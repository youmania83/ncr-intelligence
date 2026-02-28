import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      background: "#0b0f14",
      minHeight: "100vh",
      color: "#e6edf3",
      fontFamily: "Inter, sans-serif",
      padding: "80px 40px"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#f5c542"
          }}>
            Delhi NCR Real Estate Intelligence
          </div>

          <h1 style={{
            fontSize: "clamp(3rem,6vw,5rem)",
            lineHeight: 1.1,
            marginTop: 20,
            fontWeight: 600
          }}>
            Strategic Property <br />
            Intelligence Platform
          </h1>

          <p style={{
            marginTop: 24,
            maxWidth: 600,
            color: "#8b949e",
            fontSize: "18px",
            lineHeight: 1.6
          }}>
            Curated luxury projects. Verified data.
            Advisory-driven acquisition strategy for serious buyers.
          </p>
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
          <Link href="/delhi-ncr">
            <button style={{
              background: "#f5c542",
              color: "#0b0f14",
              border: "none",
              padding: "14px 28px",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Explore Delhi NCR
            </button>
          </Link>

          <button style={{
            background: "transparent",
            border: "1px solid #2f363d",
            color: "#e6edf3",
            padding: "14px 28px",
            cursor: "pointer"
          }}>
            Request Strategic Callback
          </button>
        </div>

      </div>
    </main>
  );
}