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
    <section ref={sectionRef} className="relative text-[#1a1a1a] overflow-hidden mt-5 lg:mt-0 max-w-7xl mx-auto w-full">
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
            className="text-4xl font-bold tracking-tight text-[#1a1a1a]"
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-gray-700 mt-3 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Turning Ideas Into Scalable, Production-Ready Solutions.
          </motion.p>
        </div>

        {/* Experience Entries */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* ── Company Header Row ── */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 pt-5 pb-4 border-b border-gray-100">
                {/* Left: Company + Role */}
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-[#1a1a1a] hover:text-[#9c663e] transition-colors"
                  >
                    {exp.company}
                  </a>
                  <p className="text-sm md:text-base text-[#4a4a4a] mt-0.5">{exp.role}</p>
                </div>

                {/* Right: Date range + Location badge */}
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <div className="relative inline-block p-[1.5px] rounded-full overflow-hidden">
                    <div className="moving-border absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_00deg,transparent_120deg,#f97316_180deg,transparent_210deg)]" />
                    <div className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                      <AnimatePresence mode="wait">
                        <motion.span
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          {exp.startDate} — {exp.endDate}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  {exp.location && (
                    <span className="text-xs text-gray-500 font-medium px-2">{exp.location}</span>
                  )}
                </div>
              </div>

              {/* ── Projects List ── */}
              <div className="px-6 py-4 space-y-6">
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx} className="flex gap-3 group">
                    {/* Left accent line */}
                    <div className="flex flex-col items-center pt-1 shrink-0">
                      <div className="w-[2px] h-full bg-gradient-to-b from-[#f97316]/60 to-transparent rounded-full min-h-[60px]" />
                    </div>

                    {/* Project content */}
                    <div className="flex-1 min-w-0">
                      {/* Project title */}
                      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 leading-snug">
                        {project.workUrl ? (
                          <a
                            href={project.workUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-[#9c663e] transition-colors group/title"
                          >
                            {project.workTitle}
                          </a>
                        ) : (
                          project.workTitle
                        )}
                      </h3>

                      {/* Impact bullets */}
                      <ul className="space-y-1 mb-3">
                        {project.impact.map((point, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm md:text-base text-[#4a4a4a]">
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] md:text-xs font-medium uppercase tracking-wider px-3 py-1 bg-[#fdf4e7] border border-[#faeedb] rounded-lg text-[#9c663e] hover:bg-[#faeedb] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
