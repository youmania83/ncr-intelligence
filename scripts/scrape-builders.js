import fs from "fs"
import puppeteer from "puppeteer"
import slugify from "slugify"

const builders = JSON.parse(
  fs.readFileSync("./data/builders.json")
)

const projects = []

const NCR_LOCATIONS = [
  "gurgaon",
  "gurugram",
  "delhi",
  "noida",
  "greater-noida",
  "dwarka",
  "sohna",
  "faridabad",
  "ghaziabad"
]

function cleanName(name) {
  return name
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .replace(/sector.*$/i, "")
    .replace(/gurugram.*$/i, "")
    .replace(/gurgaon.*$/i, "")
    .replace(/delhi.*$/i, "")
    .replace(/noida.*$/i, "")
    .trim()
}

async function scrapeBuilder(builder) {

  console.log("Scraping:", builder.name)

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--ignore-certificate-errors",
      "--disable-dev-shm-usage"
    ]
  })

  const page = await browser.newPage()

  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36"
  )

  try {

    await page.goto(builder.projectsPage, {
      waitUntil: "networkidle2",
      timeout: 60000
    })

  } catch (error) {

    console.log("Skipping builder:", builder.name)
    await browser.close()
    return
  }

  const links = await page.evaluate(() => {

    const anchors = Array.from(document.querySelectorAll("a"))

    return anchors.map(a => ({
      name: a.innerText,
      url: a.href
    }))

  })

  for (const link of links) {

    if (!link.url) continue

    const url = link.url.toLowerCase()

    // Only keep residential project pages
    if (
      !url.includes("/residential/") &&
      !url.includes("/homes/") &&
      !url.includes("/projects/")
    ) continue

    if (url.endsWith("/homes/")) continue

    // Skip corporate pages
    if (
      url.includes("/about") ||
      url.includes("/investor") ||
      url.includes("/media") ||
      url.includes("/foundation") ||
      url.includes("/contact") ||
      url.includes("/support") ||
      url.includes("/career") ||
      url.includes("/privacy") ||
      url.includes("/disclaimer") ||
      url.includes("/sitemap")
    ) continue

    // NCR Filter AFTER project detection
    const isNCR = NCR_LOCATIONS.some(loc => url.includes(loc))
    if (!isNCR && builder.name === "Godrej") continue

    let name = cleanName(link.name || "")

    if (
      !name ||
      name.toLowerCase().includes("know")
    ) {

      const parts = link.url.split("/")
      name = parts[parts.length - 1] || parts[parts.length - 2]
      name = name.replace(/-/g, " ")

    }

    name = cleanName(name)

    if (!name || name.length < 3) continue

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

    try {
      await scrapeBuilder(builder)
    } catch (error) {
      console.log("Error with builder:", builder.name)
    }
  }

  const uniqueProjects = Array.from(
    new Map(projects.map(p => [p.officialWebsite, p])).values()
  )

  fs.writeFileSync(
    "./data/projects.json",
    JSON.stringify(uniqueProjects, null, 2)
  )

  console.log("Projects saved:", uniqueProjects.length)
}

run()