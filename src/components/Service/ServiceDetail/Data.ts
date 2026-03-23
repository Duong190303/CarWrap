export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string; // hero background
  icon: string;
  accentColor: string; // CSS color for accents
  features: {
    icon: string; // emoji or icon path
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  gallery: string[]; // image urls
  faq: { question: string; answer: string }[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "wrapping",
    title: "Car Wrapping",
    tagline: "Transform your vehicle's identity",
    description:
      "Professional vinyl car wrapping services that completely transform your vehicle's appearance while protecting the original paint. Choose from thousands of colors, textures, and finishes — matte, gloss, satin, chrome, carbon fiber and more.",
    image:
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063109/wrapping_xzt0et.jpg",
    icon: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774062960/wrapping_qhokss.png",
    accentColor: "#389fff",
    features: [
      {
        icon: "🎨",
        title: "1000+ Color Options",
        description:
          "From classic solid colors to specialty textures like brushed metal, carbon fiber, and color-shift films.",
      },
      {
        icon: "🛡️",
        title: "Paint Protection",
        description:
          "Vinyl wrap acts as a barrier against rock chips, minor scratches, UV rays and environmental damage.",
      },
      {
        icon: "↩️",
        title: "100% Reversible",
        description:
          "Remove the wrap anytime to reveal a factory-fresh original paint underneath.",
      },
      {
        icon: "⏱️",
        title: "3–5 Year Lifespan",
        description:
          "Premium 3M and KPMF films rated for 5+ years of outdoor durability with proper care.",
      },
      {
        icon: "✂️",
        title: "Precision Cut",
        description:
          "Computer-aided cutting ensures seamless edges and a factory-finish look on every panel.",
      },
      {
        icon: "💰",
        title: "Cost Effective",
        description:
          "A fraction of the cost of a traditional respray, with superior protection and easier reversal.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Quote",
        description:
          "We discuss your vision, inspect the vehicle, and provide a detailed quote with material options.",
      },
      {
        step: 2,
        title: "Surface Preparation",
        description:
          "Thorough wash, clay bar treatment, and panel cleaning to ensure perfect film adhesion.",
      },
      {
        step: 3,
        title: "Film Application",
        description:
          "Our certified technicians apply the film in a climate-controlled bay, panel by panel.",
      },
      {
        step: 4,
        title: "Heat Setting",
        description:
          "Professional heat guns conform the film to curves and contours for a seamless fit.",
      },
      {
        step: 5,
        title: "Quality Inspection",
        description:
          "Every seam, edge, and panel is inspected under UV light before handover.",
      },
      {
        step: 6,
        title: "Handover & Care Guide",
        description:
          "We walk you through the care instructions and hand over your transformed vehicle.",
      },
    ],
    gallery: [
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774065219/1_nebjao.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774065219/2_cq2boz.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774065218/3_xpiqpv.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774065218/4_hjmvsr.jpg",
    ],
    faq: [
      {
        question: "How long does a full car wrap take?",
        answer:
          "A full wrap typically takes 2–4 days depending on vehicle size and complexity of the design.",
      },
      {
        question: "Can I wash my car after wrapping?",
        answer:
          "Yes, but wait 2 weeks after installation. Hand wash is recommended; avoid high-pressure jets on edges.",
      },
      {
        question: "Will wrapping damage my paint?",
        answer:
          "No — quality vinyl actually protects your paint. Removal by a professional leaves paint unharmed.",
      },
      {
        question: "What brands of film do you use?",
        answer:
          "We work exclusively with 3M, Avery Dennison, KPMF, and Hexis — all backed by manufacturer warranties.",
      },
    ],
  },
  {
    slug: "washing",
    title: "Car Washing & Detailing",
    tagline: "Spotless inside and out",
    description:
      "Premium car washing and full detailing services that go beyond a standard wash. We restore your vehicle's paintwork, interior and glass to showroom condition using professional-grade products and techniques.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop",
    icon: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774062961/wash_mhiwff.png",
    accentColor: "#22d3ee",
    features: [
      {
        icon: "💧",
        title: "Hand Wash",
        description:
          "Gentle two-bucket method eliminates swirl marks and micro-scratches common with machine washes.",
      },
      {
        icon: "✨",
        title: "Paint Decontamination",
        description:
          "Iron fallout remover and clay bar treatment to restore a perfectly smooth surface.",
      },
      {
        icon: "🔬",
        title: "Paint Correction",
        description:
          "Machine polishing removes swirls, scratches and oxidation to restore paint clarity.",
      },
      {
        icon: "🛋️",
        title: "Interior Detailing",
        description:
          "Deep clean of seats, carpets, dashboard, and all plastics — steam cleaned and conditioned.",
      },
      {
        icon: "🪟",
        title: "Glass Polishing",
        description:
          "Water spot removal and glass sealant application for crystal-clear visibility.",
      },
      {
        icon: "🏆",
        title: "Ceramic Coating",
        description:
          "Optional nano-ceramic coating for 2–5 years of hydrophobic protection and gloss.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Pre-rinse & Wheel Clean",
        description:
          "High-pressure pre-rinse to loosen dirt, followed by dedicated wheel and tire cleaning.",
      },
      {
        step: 2,
        title: "Hand Wash",
        description:
          "Two-bucket method with premium pH-neutral shampoo across every panel.",
      },
      {
        step: 3,
        title: "Decontamination",
        description:
          "Iron remover spray and clay bar treatment to pull bonded contaminants from the paint.",
      },
      {
        step: 4,
        title: "Paint Correction",
        description:
          "Single or multi-stage machine polish to remove swirls and restore gloss.",
      },
      {
        step: 5,
        title: "Protection Layer",
        description:
          "Wax, sealant or ceramic coating applied as the final protective layer.",
      },
      {
        step: 6,
        title: "Interior & Final Detail",
        description:
          "Full interior clean, glass polish, tyre dressing and final inspection.",
      },
    ],
    gallery: [
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064200/3_cqiscn.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774064199/1_uzi55h.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236875/11_bpek94.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236876/10_zbnfwa.jpg",
    ],
    faq: [
      {
        question: "How often should I detail my car?",
        answer:
          "A full detail every 3–6 months is ideal. More frequent light washes are recommended in between.",
      },
      {
        question: "How long does ceramic coating last?",
        answer:
          "Professional-grade coatings last 2–5 years depending on maintenance and environmental conditions.",
      },
      {
        question: "Do you offer mobile detailing?",
        answer:
          "Yes — our mobile team can come to your home or office for most detailing packages.",
      },
    ],
  },
  {
    slug: "repair",
    title: "Wrap & Paint Repair",
    tagline: "Back to perfect — fast",
    description:
      "Expert repair services for vinyl wraps and vehicle paintwork. Whether it's a lifted edge, a bubble, a scratch in the film, or deeper paint damage — our technicians diagnose and restore with precision.",
    image:
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774063104/Repair_jlalxa.jpg",
    icon: "https://res.cloudinary.com/dguivkg8d/image/upload/v1774062959/repair_mvqhlo.png",
    accentColor: "#a855f7",
    features: [
      {
        icon: "🔧",
        title: "Wrap Repair",
        description:
          "Lifted edges, bubbles, tears and discoloration fixed using matching film from our stock.",
      },
      {
        icon: "🎯",
        title: "Spot Painting",
        description:
          "Precision paint-matched touch-ups for stone chips, scratches and panel damage.",
      },
      {
        icon: "📋",
        title: "Insurance Support",
        description:
          "We provide detailed repair reports and work with major insurance providers.",
      },
      {
        icon: "⚡",
        title: "Fast Turnaround",
        description:
          "Most wrap repairs completed same-day or next-day. No long waits.",
      },
      {
        icon: "🔍",
        title: "UV Scan Inspection",
        description:
          "UV light inspection detects hidden damage under the film before and after repair.",
      },
      {
        icon: "✅",
        title: "Warranty on Repairs",
        description:
          "All repair work is covered by a 6-month workmanship warranty.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Damage Assessment",
        description:
          "Visual and UV inspection to map the full extent of the damage.",
      },
      {
        step: 2,
        title: "Film Removal",
        description:
          "Careful removal of damaged wrap sections using heat and plastic tools — no sharp blades near paint.",
      },
      {
        step: 3,
        title: "Surface Prep",
        description:
          "Paint inspection, decontamination and any required paint correction before new film.",
      },
      {
        step: 4,
        title: "Film Matching",
        description:
          "We source matching film from our inventory or order from the manufacturer.",
      },
      {
        step: 5,
        title: "Reinstallation",
        description:
          "New film applied and heat-set to match surrounding panels exactly.",
      },
      {
        step: 6,
        title: "Quality Sign-off",
        description:
          "Side-by-side inspection under natural and UV light before handover.",
      },
    ],
    gallery: [
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236876/6_ob6zia.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236876/9_hyfiju.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236877/5_hgrp9a.jpg",
      "https://res.cloudinary.com/dguivkg8d/image/upload/v1774236877/8_d9fwsz.jpg",
    ],
    faq: [
      {
        question: "Can you repair just one panel?",
        answer:
          "Yes. We can replace individual sections or panels without rewrapping the entire vehicle.",
      },
      {
        question: "What if you can't source matching film?",
        answer:
          "We'll discuss options including partial or full rewrap at a discounted rate if film is discontinued.",
      },
      {
        question: "How long does a wrap repair take?",
        answer:
          "Small repairs take 2–4 hours. Larger panel replacements typically require one full day.",
      },
    ],
  },
];

// Đảm bảo mọi image path đều bắt đầu bằng /
function normalizePaths(service: ServiceDetail): ServiceDetail {
  const fix = (p: string) =>
    p.startsWith("/") || p.startsWith("http") ? p : `/${p}`;
  return {
    ...service,
    image: fix(service.image),
    icon: fix(service.icon),
    gallery: service.gallery.map(fix),
  };
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const s = SERVICES.find((s) => s.slug === slug);
  return s ? normalizePaths(s) : undefined;
}
