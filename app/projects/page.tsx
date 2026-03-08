import Link from "next/link"
import { getProjects } from "@/lib/projects"

export default function ProjectsPage() {

 const projects = getProjects()

 return (

  <main className="bg-[#0b0f14] text-white min-h-screen px-10 py-20">

   <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-semibold mb-12">
     Delhi NCR Projects
    </h1>

    <div className="grid md:grid-cols-3 gap-8">

     {projects.map((project: any) => (

      <Link
       key={project.slug}
       href={`/projects/${project.slug}`}
       className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
      >

       <h2 className="text-xl font-semibold mb-2">
        {project.name}
       </h2>

       <p className="text-gray-400 text-sm">
        {project.builder}
       </p>

       <p className="text-gray-500 text-sm">
        {project.location}
       </p>

      </Link>

     ))}

    </div>

   </div>

  </main>

 )
}