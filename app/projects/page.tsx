import Link from "next/link"
import Image from "next/image"
import fs from "fs"
import path from "path"
import { getProjects } from "@/lib/projects"

export default function ProjectsPage() {

  const projects = getProjects()

  return (
    <main className="bg-[#0b0f14] text-white min-h-screen px-10 py-20">

      <h1 className="text-4xl mb-12">
        Delhi NCR Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project:any) => {

          const imagePath = `/projects/${project.slug}.jpg`

          const fullPath = path.join(
            process.cwd(),
            "public",
            imagePath
          )

          const imageExists = fs.existsSync(fullPath)

          const src = imageExists
            ? imagePath
            : "/projects/default.jpg"

          return (

            <Link key={project.slug} href={`/projects/${project.slug}`}>

              <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition">

                <Image
                  src={src}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-xl font-semibold mb-2">
                    {project.name}
                  </h2>

                  <p className="text-gray-400">
                    {project.builder}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {project.location}
                  </p>

                </div>

              </div>

            </Link>

          )

        })}

      </div>

    </main>
  )
}