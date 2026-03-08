import { getProjects, getProjectBySlug } from "@/lib/projects"

export async function generateStaticParams() {

 const projects = getProjects()

 return projects.map((project: any) => ({
  slug: project.slug
 }))
}

export default async function ProjectPage({ params }: any) {

 const { slug } = await params

 const project = getProjectBySlug(slug)

 if (!project) {
  return <div>Project not found</div>
 }

 return (
  <main className="bg-[#0b0f14] text-white min-h-screen px-10 py-20">

   <div className="max-w-4xl mx-auto">

    <h1 className="text-4xl font-semibold mb-6">
     {project.name}
    </h1>

    <p className="text-gray-400 mb-4">
     Builder: {project.builder}
    </p>

    <p className="text-gray-400 mb-10">
     Location: {project.location}
    </p>

    <a
     href={project.officialWebsite}
     target="_blank"
     className="bg-white text-black px-6 py-3 rounded-lg font-medium"
    >
     Visit Official Project Website
    </a>

   </div>

  </main>
 )
}