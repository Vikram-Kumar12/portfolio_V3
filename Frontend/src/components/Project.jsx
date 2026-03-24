import { useState, useRef, useEffect, forwardRef } from "react";
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
        className="relative w-full h-full lg:h-full  overflow-hidden group cursor-pointer md:rounded-2xl "
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
      {openPlayer && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
          
          {/* Close Button */}
          <button
            onClick={() => setOpenPlayer(false)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
          >
            ✕
          </button>

          <video
            src={video}
            controls
            autoPlay
            className="w-[95%] lg:w-[80%] max-h-[90vh] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

const Project = forwardRef(({ project}, ref) => {  
  return (
    <div
      ref={ref}
      className="w-full flex justify-center px-4 md:px-8 absolute top-[-10vw] left-0 h-full md:relative md:h-auto lg:absolute lg:top-[-2vw] lg:left-0 lg:h-full"
    >
      <div className="w-full md:w-[85%] lg:w-full h-full bg-white rounded-3xl lg:rounded-[2.5rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col-reverse lg:flex-row transform-gpu">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col justify-center bg-white z-10">
          {/* <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#9c663e] uppercase">
              0{index + 1}
            </span>
            <div className="h-[2px] w-8 md:w-12 bg-[#f28e2c]"></div>
          </div> */}

          <h3 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight hover:text-[#f28e2c] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[#4a4a4a] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
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
});

export default Project;
