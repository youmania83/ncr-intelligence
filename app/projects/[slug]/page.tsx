import Image from "next/image"
import projects from "@/data/projects"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#050c12] text-white">
      <h1 className="text-5xl p-20">{project.name}</h1>
    </div>
  )
}