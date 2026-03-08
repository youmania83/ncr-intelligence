import fs from "fs"
import puppeteer from "puppeteer"
import slugify from "slugify"

const builders = JSON.parse(
  fs.readFileSync("./data/builders.json")
)

const projects = []

function cleanName(name) {
  return name
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .replace(/Gurugram|Gurgaon|Delhi NCR|Noida|Panipat/gi, "")
    .trim()
}

async function scrapeBuilder(builder) {

  console.log("Scraping:", builder.name)

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto(builder.projectsPage, {
    waitUntil: "networkidle2",
    timeout: 60000
  })

  const links = await page.evaluate(() => {

    const anchors = Array.from(document.querySelectorAll("a"))

    return anchors.map(a => ({
      name: a.innerText,
      url: a.href
    }))

  })

  for (const link of links) {

    if (!link.url) continue

    if (
      !link.url.includes("/residential/") &&
      !link.url.includes("/homes/") &&
      !link.url.includes("/projects/")
    ) continue

    const name = cleanName(link.name || "")

    if (!name) continue
    if (name.length < 3) continue
    if (name.toLowerCase().includes("know")) continue
    if (name.toLowerCase().includes("more")) continue
    if (name.toLowerCase().includes("read")) continue
    if (name.toLowerCase().includes("click")) continue

    const slug = slugify(name, { lower: true, strict: true })

    projects.push({
      name,
      slug,
      builder: builder.name,
      location: builder.location,
      officialWebsite: link.url
    })
  }

  await browser.close()
}

async function run() {

  for (const builder of builders) {
    await scrapeBuilder(builder)
  }

  const uniqueProjects = Array.from(
    new Map(projects.map(p => [p.slug, p])).values()
  )

  fs.writeFileSync(
    "./data/projects.json",
    JSON.stringify(uniqueProjects, null, 2)
  )

  console.log("Projects saved:", uniqueProjects.length)
}

run()