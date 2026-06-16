import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { experienceData } from "./experienceData";

const Experience = () => {
  const sectionRef = useRef(null);
  const experiences = experienceData;

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-5 text-[#1a1a1a] overflow-hidden mt-10 lg:mt-0 max-w-7xl mx-auto w-full">
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
        <div className="space-y-16 rounded-b-2xl pb-5 lg:pb-3 mt-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full"
            >
              <motion.div
                className="w-full px-6 py-8 md:p-10 flex flex-col items-start bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Header Section */}
                <div className="w-full flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div className="flex flex-col">
                    {/* Work / Role Title */}
                    <div className="text-[#9c663e] tracking-tight flex items-center gap-2 flex-wrap mb-2">
                      <a
                        href={exp.workUrl || exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:underline font-bold text-2xl md:text-3xl"
                      >
                        {exp.workTitle || exp.company}
                      </a>
                      <span className="text-[#4a4a4a] text-xl md:text-2xl font-light">
                        | {exp.role}
                      </span>
                    </div>
                    {/* Company (if different from work title) */}
                    {exp.workTitle && exp.company && (
                      <div className="text-[#4a4a4a] text-lg">
                        at <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{exp.company}</a>
                      </div>
                    )}
                  </div>
                  
                  {/* Period */}
                  <div
                    className="relative inline-block p-[1.5px] rounded-full overflow-hidden group shrink-0 mt-1 md:mt-0"
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
                          <span className="inline-block mr-3">{exp.startDate}</span>
                          <span>{exp.endDate}</span>
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs md:text-sm font-medium uppercase tracking-wider px-4 py-2 bg-[#fdf4e7] border border-[#faeedb] rounded-lg text-[#9c663e] hover:bg-[#faeedb] transition-colors"
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
