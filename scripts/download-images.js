import puppeteer from "puppeteer"
import fs from "fs"
import axios from "axios"
import path from "path"

const projects = JSON.parse(
 fs.readFileSync("./data/projects.json", "utf8")
)

async function downloadImages() {

 const browser = await puppeteer.launch({ headless: true })
 const page = await browser.newPage()

 for (const project of projects) {

  try {

   console.log("Opening:", project.name)

   await page.goto(project.officialWebsite, {
    waitUntil: "networkidle2"
   })

   const imageUrl = await page.evaluate(() => {

    const imgs = Array.from(document.querySelectorAll("img"))
   
    const largeImage = imgs.find(img =>
     img.src &&
     img.naturalWidth > 800 &&
     img.naturalHeight > 500
    )
   
    return largeImage ? largeImage.src : null
   
   })

   if (!imageUrl) {
    console.log("No image found")
    continue
   }

   const response = await axios.get(imageUrl, {
    responseType: "arraybuffer"
   })

   const filePath = path.join(
    "public/projects",
    `${project.slug}.jpg`
   )

   fs.writeFileSync(filePath, response.data)

   console.log("Saved image:", project.slug)

  } catch (error) {

   console.log("Failed:", project.slug)

  }

 }

 await browser.close()

}

downloadImages()