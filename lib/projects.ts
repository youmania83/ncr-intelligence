import fs from "fs"
import path from "path"

export function getProjects() {

 const filePath = path.join(process.cwd(), "data/projects.json")

 const jsonData = fs.readFileSync(filePath, "utf8")

 return JSON.parse(jsonData)
}

export function getProjectBySlug(slug: string) {

 const projects = getProjects()

 return projects.find((p: any) => p.slug === slug)
}