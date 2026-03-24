import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const borderRef = useRef(null);
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:gap-12 lg:items-center h-fit px-6 md:px-12 lg:px-20 py-10 lg:pb-20 max-w-7xl mx-auto w-full ">

      {/* Left Content - Stays Top on Mobile */}
      <div className="flex flex-col items-start text-left z-10 max-w-2xl order-1 ">
        {/* Dynamic Role Badge */}
        <div
          ref={borderRef}
          className="relative inline-block mb-6 md:mb-8 p-[1.5px] rounded-full overflow-hidden group"
        >
          <div className="moving-border absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_00deg,transparent_120deg,#f97316_180deg,transparent_210deg)]" />
          <div className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4.5rem] leading-[1.1] text-zinc-900 tracking-tight mb-4">
          Vikram Kumar
        </h1>

        {/* Description */}
        <div className="text-base md:text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-full md:max-w-[90%]">
          <p>
            <span className="text-[#8E5109] font-semibold">
              MERN Stack Developer
            </span>{" "}
            with experience creating user-focused, scalable, and responsive web
            applications using React.js and delivering secure backend
            functionality with Node.js, Express.js, and MongoDB.
          </p>
          <p className="mt-4">
            Experienced in freelance projects and passionate about Generative AI
            and problem solving (200+ LeetCode problems).
          </p>
          <p className="mt-4 text-[#8E5109] font-semibold">
            Open for SDE Internships & Full-Time Roles.
          </p>
        </div>
      </div>

      {/* Right Content - Moves Bottom on Mobile */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center order-2 ">
        <div
          className="relative w-full h-full rounded-b-3xl bg-contain bg-top bg-no-repeat lg:bg-cover lg:bg-center "
          style={{
            backgroundImage: "url('/images/profile3.png')",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </main>
  );
};

export default Hero;