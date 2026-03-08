import puppeteer from "puppeteer"
import fs from "fs"
import slugify from "slugify"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function scrapeDLF() {

 const browser = await puppeteer.launch({ headless: true })
 const page = await browser.newPage()

 await page.goto("https://www.dlf.in/listing", {
  waitUntil: "networkidle2"
 })

 // close popup
 try {
  await page.waitForSelector(".close", { timeout: 3000 })
  await page.click(".close")
 } catch (e) {}

 await delay(4000)

 const links = await page.evaluate(() => {

  const results = []

  const anchors = document.querySelectorAll("a")

  anchors.forEach(a => {

   const href = a.href

   if (
    href.includes("/homes/") &&
    !href.endsWith("/homes/") &&
    !href.includes(".pdf")
   ) {

    results.push(href)

   }

  })

  return [...new Set(results)]

 })

 const projects = links.map(link => {

    let raw = link
    .split("/")
    .filter(Boolean)
    .pop()
   
   raw = raw.replace(/-/g, " ")
   
   const dictionary = [
    "the",
    "grand",
    "valley",
    "gardens",
    "orchard",
    "dahlias",
    "phase"
   ]
   
   dictionary.forEach(word => {
    raw = raw.replace(word, " " + word + " ")
   })
   
   raw = raw.replace(/\s+/g, " ").trim()
   
   const name = raw.replace(/\b\w/g, c => c.toUpperCase())

  const slug = slugify(name, { lower: true })

  return {
   name,
   slug,
   builder: "DLF",
   location: "Gurgaon",
   officialWebsite: link
  }

 })

 fs.writeFileSync(
  "./data/projects.json",
  JSON.stringify(projects, null, 2)
 )

 console.log("Projects saved:", projects.length)

 await browser.close()
}

scrapeDLF()