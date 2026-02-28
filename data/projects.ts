export interface Project {
  slug: string
  name: string
  developer: string
  location: string
  address: string
  price: string
  configuration: string
  sizeRange: string
  possession: string
  type: "Ultra Luxury" | "Premium"
  status: "Ready" | "Under Construction"
  investmentHorizon: string
  positioning: string
  heroImage: string
  gallery: string[]
}

const projects: Project[] = [
  {
    slug: "dlf-camellias",
    name: "DLF Camellias",
    developer: "DLF Limited",
    location: "Golf Course Road, Gurgaon",
    address: "Sector 42, Golf Course Road, Gurugram, Haryana",
    price: "₹15 Cr onwards",
    configuration: "4 BHK, 5 BHK, Penthouse",
    sizeRange: "7,400 – 16,000 sq.ft.",
    possession: "Ready to Move",
    type: "Ultra Luxury",
    status: "Ready",
    investmentHorizon: "5+ Years",
    positioning:
      "Flagship ultra-luxury residences within Gurgaon’s most defensible micro-market.",
    heroImage: "/projects/camellias/hero.jpg",
    gallery: [
      "/projects/camellias/golf.jpg",
      "/projects/camellias/pool.jpg"
    ]
  },

  {
    slug: "m3m-golf-estate",
    name: "M3M Golf Estate",
    developer: "M3M India",
    location: "Sector 65, Golf Course Extension Road, Gurgaon",
    address: "Sector 65, Golf Course Extension Road, Gurugram, Haryana",
    price: "₹4 Cr onwards",
    configuration: "3 BHK, 4 BHK, Penthouse",
    sizeRange: "2,950 – 10,500 sq.ft.",
    possession: "Ready to Move",
    type: "Premium",
    status: "Ready",
    investmentHorizon: "3–5 Years",
    positioning:
      "Golf-centric premium residences targeting aspirational luxury buyers.",
    heroImage: "/projects/m3m/hero.jpg",
    gallery: [
      "/projects/m3m/1.jpg",
      "/projects/m3m/2.jpg"
    ]
  }
]

export default projects