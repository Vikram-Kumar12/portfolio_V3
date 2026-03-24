import { useRef, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = []; // Reset on render

  const projectsData = [
    {
      title: "Notebook LLM",
      description:
        "An AI-powered document assistant that lets users upload PDFs, text files, PPTs, Word docs, or even web URLs, and instantly chat with the content to extract insights, ask questions, and summarize information.",
      tech: ["JavaScript","React.js", "Tailwind CSS", "Node.js", "MongoDB", "OpenAI API", "LangChain", "QdrantDB"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      video: "https://res.cloudinary.com/djhdbide5/video/upload/v1773926080/Notebooklm_ruqzap.mp4",
      // liveUrl: "#",
      githubUrl: "https://github.com/Vikram-Kumar12/NotebookLM",
    },
    {
      title: "Persona Chatbot",
      description:
        "A personalized AI chat system built with React.js (frontend) and Node.js + Express (backend). Each AI persona (like Hitesh Choudhary and Piyush Garg) responds in their own tone and style — creating realistic, interactive conversations powered by OpenAI.",
      tech: ["JavaScript","React.js", "Tailwind CSS", "Node.js", "MongoDB", "OpenAI API", ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      video: "https://res.cloudinary.com/djhdbide5/video/upload/v1773925953/Persona_goccxd.mp4",
      // liveUrl: "#",
      githubUrl: "https://github.com/Vikram-Kumar12/Persona-ChatBot",
    },
    {
      title: "SELLNBUY",
      description:
        "SELLNBUY is a web-based marketplace where users can, Buy second-hand products at minimal cost and Sell their own used items to reach other interested buyers. The idea is to create a simplified and accessible platform where people can reuse resources and reduce waste.",
      tech: ["JavaScript","React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer"],
      image:
        "/images/sellnbuyProject.png",
      video: "https://res.cloudinary.com/djhdbide5/video/upload/v1754388890/sellnbuy_ognfsj.mp4",
      liveUrl: "https://sellnbuy.vercel.app/",
      githubUrl: "https://github.com/Vikram-Kumar12/Sab-Kharido-Sab-Becho-",
    },
    {
      title: "Review Collection",
      description:
        "ReviewCollection is a full-stack web app designed to simulate a mini social media platform focused on user reviews. Each review supports text, media (images/videos), hashtags, and URLs. Users can interact through likes, comments, and share posts via unique URLs.",
      tech: ["JavaScript","React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      video: "https://res.cloudinary.com/djhdbide5/video/upload/v1758120398/Untitled_video_-_Made_with_Clipchamp_5_mvjyyj.mp4",
      liveUrl: "https://www.review-collection.space/",
      githubUrl: "https://github.com/Vikram-Kumar12/Review-Collection2-",
    },
    {
      title: "Coding Practice Platform",
      description:
        "A responsive coding practice platform built to simulate real-world coding environments. Developed interactive problem-solving interface using ReactJS and Tailwind CSS.",
      tech: ["JavaScript","React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker", "Judge0 API"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      video: "https://res.cloudinary.com/djhdbide5/video/upload/v1750854764/audo_enhanced_LeetLab_-_Google_Chrome_2025-06-01_22-01-08_1_qdtete.mp4",
      liveUrl: "https://res.cloudinary.com/djhdbide5/video/upload/v1750854764/audo_enhanced_LeetLab_-_Google_Chrome_2025-06-01_22-01-08_1_qdtete.mp4",
      githubUrl: "https://github.com/Vikram-Kumar12/Leetlab-Project/",
    },
  ];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const cardElements = cardsRef.current;
    if (cardElements.length === 0) return;

    // Use GSAP MatchMedia for Responsive Animations
    let mm = gsap.matchMedia();

    const applyStickyStack = () => {
      const totalCards = cardElements.length;

      cardElements.forEach((card, i) => {
        gsap.set(card, { y: i === 0 ? 0 : "100%", scale: 1, opacity: 1 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${(totalCards - 1) * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cardElements.forEach((card, i) => {
        if (i > 0) {
          tl.to(card, { y: "0%", duration: 1, ease: "power2.inOut" }, i - 1);
          for (let j = 0; j < i; j++) {
            tl.to(
              cardElements[j],
              {
                scale: 1 - (i - j) * 0.05,
                y: `-${(i - j) * 4}%`,
                opacity: 1 - (i - j) * 0.15,
                duration: 1,
                ease: "power2.inOut",
              },
              i - 1,
            );
          }
        }
      });

      return () => {
        tl.kill();
      };
    };

    // Apply Sticky Animation on Mobile (< 768px) and Laptop/Desktop (>= 1024px)
    mm.add("(max-width: 767px)", applyStickyStack);
    mm.add("(min-width: 1024px)", applyStickyStack);

    // Normal Scroll on Tablet/md (768px to 1023px) - Clear GSAP properties
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      cardElements.forEach((card) => {
        gsap.set(card, { clearProps: "all" });
      });
    });

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      mm.revert(); // Revert matchMedia changes on unmount
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative text-[#1a1a1a] overflow-hidden">
      <div className="relative z-10 pt-20 text-start px-6 md:px-12 lg:px-20 pb-0 md:pb-20 lg:pb-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
          Projects
        </h2>
      </div>
      {/* GSAP Pinned Wrapper */}
      <div
        ref={wrapperRef}
        className="relative flex items-center justify-center overflow-hidden z-10 w-full h-screen md:h-auto lg:h-screen pb-10 md:pb-20 lg:pb-0 md:py-30 lg:py-0"
      >
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-col lg:block h-[70vh] md:h-full lg:h-[70vh] gap-10 md:gap-14 lg:gap-0">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              ref={addToRefs}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


