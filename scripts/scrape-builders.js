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
 
   const url = link.url.toLowerCase()
 
   // Allow only real project paths
   if (
     !url.includes("/residential/") &&
     !url.includes("/homes/") &&
     !url.includes("/projects/")
   ) continue
 
   // Reject obvious non-project pages
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
 
   let name = cleanName(link.name || "")

// If the button text is generic, extract name from URL
if (
  !name ||
  name.toLowerCase().includes("know") ||
  name.toLowerCase().includes("more")
) {
  const parts = link.url.split("/")
  name = parts[parts.length - 1] || parts[parts.length - 2]
  name = name.replace(/-/g, " ")
}
 
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
       console.log("Skipping builder:", builder.name)
       console.log(error.message)
       continue
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