import Link from "next/link"

export default function Home() {
  return (
    <main
      style={{
        background: "#0b0f14",
        minHeight: "100vh",
        color: "#e6edf3",
        fontFamily: "Inter, sans-serif",
        padding: "80px 40px"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          Expreality Intelligence
        </h1>

        <p style={{ color: "#9ba6b2", fontSize: 18, marginBottom: 40 }}>
          Institutional-grade intelligence for luxury real estate in Delhi NCR.
        </p>

        <Link href="/projects">
          <button
            style={{
              background: "#1f6feb",
              border: "none",
              padding: "14px 26px",
              borderRadius: 8,
              color: "white",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Explore Delhi NCR Projects
          </button>
        </Link>

      </div>
    </main>
  )
}