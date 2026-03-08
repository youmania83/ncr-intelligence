import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050c12] text-white">

      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* HERO */}

        <div className="mb-24">

          <p className="text-yellow-400 text-xs tracking-[4px] uppercase mb-4">
            Delhi NCR Luxury Real Estate Intelligence
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
            Strategic Luxury Property
            <br />
            Intelligence Platform
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mt-6 leading-relaxed">
            Curated intelligence on Delhi NCR luxury residential projects.
            Designed for serious buyers seeking advisory-driven property
            acquisitions.
          </p>

          <div className="flex gap-6 mt-10">

            <Link href="/delhi-ncr">
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition">
                Explore Luxury Projects
              </button>
            </Link>

            <a
              href="https://wa.me/918368137724"
              target="_blank"
              className="border border-gray-700 px-8 py-4 rounded-lg hover:border-gray-500 transition"
            >
              WhatsApp Advisory
            </a>

          </div>

        </div>

        {/* FEATURED INTELLIGENCE */}

        <div className="mb-24">

          <h2 className="text-2xl font-semibold mb-10">
            Featured Intelligence
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <Link href="/projects/dlf-camellias">
              <div className="bg-[#0b1620] p-8 rounded-xl hover:bg-[#101d29] transition cursor-pointer">

                <h3 className="text-xl font-semibold mb-2">
                  DLF Camellias
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  Golf Course Road
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Ultra luxury residential inventory with strong
                  UHNI end-user demand and limited supply.
                </p>

              </div>
            </Link>

            <Link href="/projects/m3m-golf-estate">
              <div className="bg-[#0b1620] p-8 rounded-xl hover:bg-[#101d29] transition cursor-pointer">

                <h3 className="text-xl font-semibold mb-2">
                  M3M Golf Estate
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  Golf Course Extension Road
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Golf-themed luxury residences attracting premium
                  end-users and aspirational buyers.
                </p>

              </div>
            </Link>

          </div>

        </div>

        {/* MICRO MARKET SECTION */}

        <div className="mb-24">

          <h2 className="text-2xl font-semibold mb-10">
            Micro-Market Intelligence
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#0b1620] p-8 rounded-xl">

              <h3 className="text-lg font-semibold mb-2">
                Golf Course Road
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Delhi NCR's most defensible luxury micro-market
                driven by UHNI end-user demand and limited supply.
              </p>

            </div>

            <div className="bg-[#0b1620] p-8 rounded-xl">

              <h3 className="text-lg font-semibold mb-2">
                Golf Course Extension
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Rapidly evolving luxury corridor attracting premium
                developments and aspirational buyers.
              </p>

            </div>

            <div className="bg-[#0b1620] p-8 rounded-xl">

              <h3 className="text-lg font-semibold mb-2">
                Dwarka Expressway
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Emerging luxury growth corridor supported by new
                infrastructure and improving connectivity.
              </p>

            </div>

          </div>

        </div>

        {/* ADVISOR CTA */}

        <div className="bg-[#0b1620] rounded-xl p-12 text-center">

          <h2 className="text-3xl font-semibold mb-4">
            Private Luxury Property Advisory
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Serious investors can connect directly for curated
            intelligence and advisory on Delhi NCR luxury
            residential investments.
          </p>

          <a
            href="https://wa.me/918368137724"
            target="_blank"
            className="bg-green-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-400 transition"
          >
            WhatsApp Advisory
          </a>

        </div>

      </div>

    </main>
  )
}