import fs from "fs"
import puppeteer from "puppeteer"
import fetch from "node-fetch"

const projects = JSON.parse(
  fs.readFileSync("./data/projects.json")
)

async function download() {

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  })

  const page = await browser.newPage()

  for (const project of projects) {

    console.log("Opening:", project.name)

    try {

      await page.goto(project.officialWebsite, {
        waitUntil: "networkidle2",
        timeout: 60000
      })

      const imageUrl = await page.evaluate(() => {

        const selectors = [
          ".hero img",
          ".banner img",
          ".slider img",
          ".carousel img",
          ".project-banner img",
          "img"
        ]

        for (const selector of selectors) {

          const img = document.querySelector(selector)

          if (img && img.src && img.src.startsWith("http")) {
            return img.src
          }
        }

        return null
      })

      if (!imageUrl) {
        console.log("No image found")
        continue
      }

      if (imageUrl.includes("map")) {
        console.log("Skipping map image")
        continue
      }

      const response = await fetch(imageUrl)
      const buffer = await response.arrayBuffer()

      fs.writeFileSync(
        `./public/projects/${project.slug}.jpg`,
        Buffer.from(buffer)
      )

      console.log("Saved image:", project.slug)

    } catch (error) {

      console.log("Failed:", project.slug)

    }

  }

  await browser.close()
}

download()