import Link from "next/link"

export default function GolfCourseRoad() {
  return (
    <div className="min-h-screen bg-[#050c12] text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">

        <p className="text-yellow-500 tracking-[0.25em] text-xs uppercase">
          Micro-Market Intelligence
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold mt-6 tracking-tight">
          Golf Course Road, Gurgaon
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl leading-relaxed">
          Golf Course Road represents Gurgaon’s most mature ultra-luxury
          residential corridor. Limited land availability, institutional-grade
          infrastructure, and proximity to corporate hubs create strong
          long-term defensibility.
        </p>

        {/* Capital Drivers */}
        <section className="mt-20 grid md:grid-cols-3 gap-10">

          <div className="border border-gray-800 p-8 rounded-xl bg-[#0c1622]">
            <h3 className="text-yellow-500 mb-4">Supply Constraint</h3>
            <p className="text-gray-400 text-sm">
              Minimal new land parcels available. Entry barrier remains high.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl bg-[#0c1622]">
            <h3 className="text-yellow-500 mb-4">Corporate Proximity</h3>
            <p className="text-gray-400 text-sm">
              Direct connectivity to Cyber City and premium office districts.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl bg-[#0c1622]">
            <h3 className="text-yellow-500 mb-4">Resale Liquidity</h3>
            <p className="text-gray-400 text-sm">
              Historically stronger absorption compared to peripheral zones.
            </p>
          </div>

        </section>

        {/* Linked Projects */}
        <section className="mt-24">
          <h2 className="text-2xl mb-8">Strategic Projects in This Corridor</h2>

          <Link href="/projects/dlf-camellias">
            <div className="border border-gray-800 p-8 rounded-xl bg-[#0c1622] hover:border-yellow-500 transition cursor-pointer">
              <h3 className="text-xl">DLF Camellias</h3>
              <p className="text-gray-400 mt-2">
                Ultra-luxury residences positioned at the top of this micro-market.
              </p>
            </div>
          </Link>
        </section>

      </div>
    </div>
  )
}