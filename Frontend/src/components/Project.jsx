import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Github } from "lucide-react";


export const MediaShowcase = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openPlayer, setOpenPlayer] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <>
      <div
        className="relative w-full h-full md:h-full px-3 py-3 md:px-0 md:py-0  overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenPlayer(true)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video}
          muted
          loop
          playsInline
        />
      </div>
      {openPlayer && createPortal(
        <div
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          onClick={() => setOpenPlayer(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenPlayer(false)}
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer z-10 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          >
            ✕
          </button>

          <video
            src={video}
            controls
            autoPlay
            className="w-screen h-screen object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
};

const Project = ({ project }) => {
  return (
    <div className="w-full">
      <div className="w-full md:w-full h-full bg-white rounded-xl md:rounded-[2.5rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col-reverse lg:flex-row transform-gpu">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 px-6 md:px-10 py-5 flex flex-col justify-center bg-white z-10">
          <h3 className="text-3xl font-bold text-[#1a1a1a] tracking-tight hover:text-[#f28e2c] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[#4a4a4a] text-md leading-relaxed mt-2 mb-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] md:text-xs font-semibold  tracking-wider px-3 py-1.5 md:px-4 md:py-2 bg-[#fcfaf5] border border-gray-100 rounded-lg text-[#9c663e]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] hover:bg-black text-white px-5 py-3 md:px-6 md:py-3.5 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2 transition-all shadow-md group"
              >
                View Live
                <ArrowUpRight
                  size={18}
                  className="text-[#f28e2c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:bg-[#fcfaf5] border border-gray-200 text-[#1a1a1a] p-3 md:p-3.5 rounded-lg flex items-center justify-center transition-all hover:border-[#f28e2c]/40"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Media Side */}
        <div className="w-full lg:w-1/2 relative h-[250px] md:h-[25vh] lg:h-full md:p-5">
          <MediaShowcase image={project.image} video={project.video} />
        </div>
      </div>
    </div>
  );
};

export default Project;
