import { motion } from "framer-motion";
import { FileText, Linkedin, Github, Mail } from "lucide-react";
import { LiaWhatsapp } from "react-icons/lia";

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l16 16" />
    <path d="M4 20L20 4" />
  </svg>
);

const FloatingDock = () => {
  const dockItems = [
    { name: "Resume", icon: <FileText size={22} />, href: "/resume/VikramKumar_Resume.pdf", download: true },
    { name: "X (Twitter)", icon: <XIcon />, href: "https://x.com/VikramKumar0120" },
    { name: "LinkedIn", icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/vikram-kumar-55bbab2aa/" },
    { name: "WhatsApp", icon: <LiaWhatsapp size={23} />, href: "https://wa.me/918987443835?text=Hello,%20Vikram" },
    { name: "GitHub", icon: <Github size={22} />, href: "https://github.com/Vikram-Kumar12" },
    { name: "Email", icon: <Mail size={22} />, href: "mailto:vikramkumar0120arav@gmail.com" },
  ];

  return (
    <div className="fixed  bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ gap: "1.5rem", padding: "0.75rem 1.75rem" }}
        whileHover={{ 
          gap: "2.25rem", 
          padding: "0.75rem 2.5rem" 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
        className="flex items-center bg-[#FBEFDE] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200"
      >
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            download={item.download || false}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#1a1a1a] hover:text-[#f28e2c] transition-colors duration-200 flex items-center justify-center"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};

export default FloatingDock;