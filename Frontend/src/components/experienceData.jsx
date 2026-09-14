
export const experienceData = [
  {
    startDate: "April 2026",
    endDate: "Present",
    location: "Remote",

    company: "DigitalGuru Pte Ltd",
    companyUrl: "https://digitalguru.app/",

    role: "Full Stack Developer (Freelance)",

    projects: [
      {
        workTitle: "Voltaris Energy (Multi-Country Solar Energy Platform & CMS)",
        workUrl: "https://voltarisenergy.sg/",
        impact: [
          "Architected a multi-country platform for Singapore and Malaysia on Next.js 16 and Express 5, modelling country and language as independent data dimensions — adding a new market needs no migration or code change.",
          "Built a custom headless CMS driving 20+ dynamic section types across 16 pages, letting the client reorder layouts and edit content, media, and SEO metadata without a redeploy.",
          "Designed the PostgreSQL/Prisma backend — 62 relational models, 136+ REST endpoints, a tariff-based solar savings calculator, and JWT refresh-token rotation in httpOnly cookies.",
        ],
        tags: ["Next.js 16", "React", "Express 5", "PostgreSQL", "Prisma", "Tailwind CSS", "Cloudinary", "i18n"],
      },
      {
        workTitle: "Ascension Tutorial (AI Powered Learning Platform)",
        workUrl: "https://ascensiontutorial.com/",
        impact: [
          "Built a full-stack AI tutoring platform for a Singapore education client on MERN + OpenAI API + Qdrant, so the tutor answers only from the client's own course material.",
          "Built the RAG pipeline end to end — PDF/DOCX chunking, deduplication, OpenAI embeddings, and semantic search across 13,000+ vectors with subject-aware filtering and a two-pass retrieval fallback.",
          "Cut first-token latency from 5–8s to ~1s with SSE streaming, and shipped an admin dashboard for document indexing, Stripe subscriptions, and live AI configuration.",
        ],
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Qdrant", "OpenAI API", "RAG", "Stripe", "SSE"],
      },
      {
        workTitle: "Pomp Limousine (Car-Booking Platform)",
        workUrl: "https://pomplimo.com/",
        impact: [
          "Built a production limousine booking platform from scratch for a Singapore client, with distance/hourly bookings and Google Routes-based dynamic pricing.",
          "Integrated Stripe payments, JWT authentication, and automated email notifications for end-to-end transaction handling.",
          "Hardened it in production — restructured the Stripe webhook to acknowledge instantly and send mail asynchronously, added a three-tier Routes API fallback for fare accuracy, and fixed cross-origin cookie auth on mobile Safari.",
        ],
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Google Maps API", "Resend"],
      },
      {
        workTitle: "Interior.Alpha Movements (Interior Design Studio Platform)",
        workUrl: "https://i-alphamovements.com/",
        impact: [
          "Rebuilt a legacy Create React App + FastAPI site into a single-process Next.js 16 + Express 5 app — one port, one deploy, lower hosting cost.",
          "Cut the homepage image payload from 8.1 MB to 188 KB (98%) across a 51 MB photo library using AVIF/WebP conversion, responsive sizes, and blur placeholders.",
          "Built the entire luxury UI with no component library — a canvas-aware lightbox, a jank-free marquee, and a click-to-load video facade that defers ~1 MB of third-party scripts.",
        ],
        tags: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "Lenis", "Express 5", "JSON-LD SEO"],
      },
    ],
  },
  {
    startDate: "Nov 2025",
    endDate: "Jan 2026",
    location: "Remote",

    company: "DigitalMato",
    companyUrl: "https://digitalmato.com/",

    role: "Full Stack Developer (Freelance)",

    projects: [
      {
        workTitle: "DigitalGuru (Agency Website)",
        workUrl: "https://digitalguru.app/",
        impact: [
          "Engineered a responsive, animation-rich agency website using React.js, Tailwind CSS, Framer Motion, and GSAP.",
          "Improved estimated session engagement by ~30% through targeted micro-interactions.",
          "Translated Figma prototypes into 15+ reusable React components, cutting feature development time by ~25%.",
        ],
        tags: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
      },
    ],
  },
];
