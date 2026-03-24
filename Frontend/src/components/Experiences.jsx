import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

const MediaShowcase = ({ image, video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Handle video play/pause based on hover state for desktop
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video play error:", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile View: Video only, auto-plays */}
      <video
        className="md:hidden w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Desktop View: Image default, video on hover */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img
          src={image}
          alt="Project Preview"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Play Icon Overlay (Hints interactivity on Desktop) */}
      <div
        className={`hidden md:flex absolute inset-0 items-center justify-center bg-black/10 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#f28e2c"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3l14 9-14 9V3z" fill="#f28e2c" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const borderRef = useRef(null);
  const experiences = [
    {
      description:
        "Engineered a responsive and animation-rich agency website, transforming design prototypes into high-performance digital assets with a focus on seamless user experiences.",
      impact: [
        "Built reusable UI architecture using React & Tailwind CSS",
        "Orchestrated complex animations with Framer Motion",
        "Optimized Core Web Vitals for better SEO and engagement",
        "Ensured 100% responsiveness across all device tiers",
      ],
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
      image: "/images/experienceImage.jpg",
      video:
        "https://res.cloudinary.com/djhdbide5/video/upload/v1773568573/experienceVideo_kzzkin.mp4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(".moving-border", {
        rotate: 180,
        duration: 1.5,
        ease: "power2.inOut",
      })
        .to({}, { duration: 1 })
        .to(".moving-border", {
          rotate: 360,
          duration: 1.5,
          ease: "power2.inOut",
        });
    }, borderRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-5 text-[#1a1a1a] overflow-hidden mt-10 lg:mt-0 max-w-7xl mx-auto w-full">
      {/* Animated Background Colors */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#faf0e1] blur-[50px] rounded-full opacity-60 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -60, 40, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#fdf4e7] blur-[120px] rounded-full opacity-70 pointer-events-none"
      />

      <div className="container relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-start mb-5">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]"
          >
            Experience
          </motion.h2>
          <motion.p
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: 0.2 }}
            // viewport={{ once: true }}
            className="text-gray-700 mt-3 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Turning Ideas Into Scalable, Production-Ready Solutions.
          </motion.p>
        </div>

        {/* Content Areas */}
        <div className="space-y-32   rounded-b-2xl shadow-lg pb-5 lg:pb-3">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-12 lg:gap-16 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Left Side*/}
              <motion.div
                className="w-full p-1 lg:p-3 lg:w-1/2"
              >
                <MediaShowcase image={exp.image} video={exp.video} />
              </motion.div>

              {/* Right Side*/}
              <motion.div
                className="w-full px-5 lg:px-0 lg:p-10 lg:w-1/2 flex flex-col items-start "
              >
                {/* Period */}
                <div
                  ref={borderRef}
                  className="relative inline-block mb-6 p-[1.5px] rounded-full overflow-hidden group"
                >
                  <div className="moving-border absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_00deg,transparent_120deg,#f97316_180deg,transparent_210deg)]" />
                  <div className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="block text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <span className="inline-block mr-3">2025-Nov</span>
                        <span>2026-Jan</span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
                {/* Role */}
                <div className="text-[#9c663e] mb-2 tracking-tight">
                  <a
                    href="https://digitalmato.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:underline font-bold text-2xl "
                  >
                    DigitalMato
                  </a>
                  <span className="text-[#4a4a4a] text-xl"> | Freelancer</span>
                </div>
                {/* Work */}
                <div className="text-xl text-[#9c663e] mb-2 tracking-tight">
                  <span className="text-[#4a4a4a]">Work | </span>
                  <a
                    href="https://digital-guru.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:underline font-bold"
                  >
                    DigitalGuru Pte Ltd
                  </a>
                </div>
                {/* Description */}
                <p className="text-[#4a4a4a] text-md leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-[#fdf4e7] border border-[#faeedb] rounded-lg text-[#9c663e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
