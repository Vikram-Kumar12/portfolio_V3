import { motion } from "framer-motion";
import GridBackgroundPattern from "./GridBackgroundPattern";
import { skillData, skillCategories } from "./skillData";

const Skills = () => {
  const getSkillDetails = (skillName) => {
    const found = skillData.find(
      (s) =>
        skillName.toLowerCase().includes(s.Name.toLowerCase()) ||
        s.Name.toLowerCase().includes(skillName.toLowerCase()),
    );

    return (
      found || {
        Name: skillName,
        color: "hover:text-[#f28e2c] hover:border-[#f28e2c]/30",
        icon: <Code2 size={16} />,
      }
    );
  };

  return (
    <section className="relative text-[#1a1a1a] overflow-hidden pb-8 ">
      {/* Background animation */}
      <GridBackgroundPattern />
      <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[-10%] w-[600px] h-[500px] bg-[#faeedb] blur-[120px] rounded-full opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] bg-[#fdf4e7] blur-[150px] rounded-full opacity-70"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 mb-6  ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1a1a1a]"
        >
          Technical Skills
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-5">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full h-fit pb-8 bg-white rounded-3xl lg:rounded-[2.5rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col transform-gpu"
          >
            <div className="w-full px-8 pt-4 bg-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
                {category.title}
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed max-w-3xl">
                {category.description}
              </p>
            </div>

            <div className="w-full px-8 pt-2 bg-white flex flex-col justify-center">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skillName, i) => {
                  const skill = getSkillDetails(skillName);
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3 }}
                      className={`group flex items-center gap-2 px-3 py-2 bg-[#fcfaf5] border border-gray-200 rounded-lg text-[#4a4a4a] transition-all duration-300 cursor-default shadow-sm ${skill.color}`}
                    >
                      <div className="text-md text-gray-500 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold">{skillName}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
