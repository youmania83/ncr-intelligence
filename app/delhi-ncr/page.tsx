import Link from "next/link";
import projects from "@/data/projects";

export default function DelhiNCRPage() {
  return (
    <div className="min-h-screen bg-[#050c12] text-white px-8 py-20">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-yellow-500 tracking-widest text-sm uppercase mb-4">
            Delhi NCR Intelligence Desk
          </p>

          <h1 className="text-5xl font-semibold mb-6">
            Curated Strategic Projects
          </h1>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            We do not list everything. We filter aggressively. 
            Only projects with long-term capital logic, 
            developer credibility, and location defensibility make this page.
          </p>
        </div>

        {/* Investment Thesis */}
        <div className="mb-20 grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 p-6 rounded-lg bg-[#0c1620]">
            <h3 className="text-yellow-500 mb-3">Demand Drivers</h3>
            <p className="text-gray-400 text-sm">
              Infrastructure push, corporate relocation, luxury absorption rate,
              and limited prime land supply support premium pricing.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg bg-[#0c1620]">
            <h3 className="text-yellow-500 mb-3">Capital Outlook</h3>
            <p className="text-gray-400 text-sm">
              Select micro-markets indicate 12–18% structured upside over 
              a 4–5 year horizon, subject to macro stability.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg bg-[#0c1620]">
            <h3 className="text-yellow-500 mb-3">Risk Consideration</h3>
            <p className="text-gray-400 text-sm">
              Execution risk, supply pipeline expansion, and liquidity cycles 
              must be evaluated before allocation.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="border border-gray-800 p-6 rounded-lg bg-[#0c1620] hover:border-yellow-500 transition cursor-pointer">
                <h2 className="text-xl mb-2">{project.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{project.location}</p>
                <p className="text-yellow-500 font-semibold">
                  {project.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}