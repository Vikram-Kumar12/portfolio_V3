
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
        workTitle: "Pomp Limousine (Car-Booking Platform)",
        workUrl: "https://pomplimo.com/",
        impact: [
          "Built a production limousine booking platform from scratch for a Singapore client, with distance/hourly bookings and Google Maps-based dynamic pricing.",
          "Integrated Stripe payments, JWT authentication, and automated email notifications for end-to-end transaction handling.",
          "Deployed and maintained on Hostinger + Vercel, resolving production issues including security vulnerabilities and cross-browser bugs.",
        ],
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Email API", "Google Maps API"],
      },
      {
        workTitle: "Ascension Tutorial (AI Powered Learning Platform)",
        workUrl: "https://ascensiontutorial.com/",
        impact: [
          "Developing a full-stack AI tutoring platform for a Singapore education client using MERN + OpenAI API + Qdrant vector database.",
          "Built a RAG pipeline (chunking, embeddings, vector search) so the AI tutor answers grounded in the client's actual course material.",
          "Built an admin dashboard with PDF/DOCX indexing and Stripe subscription management, improved retrieval quality from ~4/10 to ~7.5/10 through a systematic audit.",
        ],
        tags: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Qdrant", "Stripe"],
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
