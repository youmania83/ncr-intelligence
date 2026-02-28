import Image from "next/image"
import projects from "@/data/projects"
import { notFound } from "next/navigation"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-[#050c12] text-white">

      {/* HERO SECTION */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">

        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-16 left-0 w-full">
          <div className="max-w-6xl mx-auto px-8">

            <p className="text-yellow-500 tracking-[0.25em] text-xs uppercase">
              Project Intelligence Memo
            </p>

            <div className="inline-block mt-4 px-4 py-1 text-xs border border-yellow-500 text-yellow-500 rounded-full">
              {project.type}
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold mt-6 tracking-tight leading-tight">
              {project.name}
            </h1>

            <p className="text-gray-300 mt-4 text-lg">
              {project.location}
            </p>

          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Price */}
        <div className="mb-12">
          <p className="text-yellow-500 text-3xl font-semibold">
            {project.price}
          </p>
        </div>

        {/* Structured Data Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-gray-400 mb-20">

          <p><span className="text-yellow-500">Developer:</span> {project.developer}</p>
          <p><span className="text-yellow-500">Status:</span> {project.status}</p>
          <p><span className="text-yellow-500">Address:</span> {project.address}</p>
          <p><span className="text-yellow-500">Configuration:</span> {project.configuration}</p>
          <p><span className="text-yellow-500">Size Range:</span> {project.sizeRange}</p>
          <p><span className="text-yellow-500">Possession:</span> {project.possession}</p>
          <p><span className="text-yellow-500">Suggested Horizon:</span> {project.investmentHorizon}</p>

        </div>
        <section className="mb-24">
  <h2 className="text-2xl mb-6">Location Intelligence</h2>

  <div className="relative w-full h-96 rounded-lg overflow-hidden border border-gray-800">
    <iframe
      src={`https://www.google.com/maps?q=${encodeURIComponent(project.address)}&output=embed`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section> 

        {/* Positioning */}
        <section className="mb-24">
          <h2 className="text-2xl mb-6">Strategic Positioning</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {project.positioning}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="text-2xl mb-8">Visual Overview</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((img, index) => (
              <div key={index} className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`Gallery ${index}`}
                  fill
                  sizes="33vw"
                  className="object-cover hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="border border-gray-800 p-12 rounded-xl bg-[#0c1622]">
          <h3 className="text-2xl mb-6">
            Request Strategic Advisory Consultation
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl">
            This is not a generic enquiry. Allocation suitability is assessed
            before any capital recommendation is made.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 font-semibold rounded-md hover:opacity-90 transition">
            Schedule Confidential Call
          </button>
        </section>

      </div>
    </div>
  )
}