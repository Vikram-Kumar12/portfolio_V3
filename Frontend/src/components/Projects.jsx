import Project from "./Project";

const Projects = () => {
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

  return (
    <div className="relative text-[#1a1a1a] mt-10 mb-10">
      <div className="relative z-10 text-start px-6 md:px-12 lg:px-20 mb-6">
        <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a]">
          Projects
        </h2>
      </div>

      <div className="px-6 md:px-12 flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;


