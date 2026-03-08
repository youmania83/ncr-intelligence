import { execSync } from "child_process"

function run(command) {

 try {

  console.log(`Running: ${command}`)
  execSync(command, { stdio: "inherit" })

 } catch (error) {

  console.error(`Error running: ${command}`)

 }

}

console.log("Starting Real Estate AI Agent")

// Step 1 — Scrape projects
run("node scripts/scrape-builders.js")

// Step 2 — Download project images
run("node scripts/download-images.js")

// Step 3 — Git commit
run("git add .")

run('git commit -m "AI agent update projects"')

// Step 4 — Push to GitHub
run("git push")

console.log("AI Agent Completed — Vercel will deploy automatically")