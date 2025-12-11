import { motion } from "framer-motion";
import { Code2, Database, Code, Coffee, BarChart3, Zap } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: Code2,
      color: "from-cyan-400 to-teal-400",
      skills: [
        { name: "C", icon: Code, color: "from-blue-500 to-blue-600" },
        { name: "Java", icon: Coffee, color: "from-orange-500 to-orange-600" },
        { name: "Python", icon: Code2, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: Zap, color: "from-yellow-400 to-yellow-500" },
        { name: "SQL", icon: Database, color: "from-slate-500 to-slate-600" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: BarChart3,
      color: "from-blue-400 to-blue-500",
      skills: [
        { name: "React", icon: Code, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: Code2, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", icon: Zap, color: "from-cyan-500 to-cyan-600" },
        { name: "CSS", icon: Code, color: "from-purple-500 to-purple-600" },
        { name: "HTML", icon: Code, color: "from-orange-500 to-orange-600" },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      icon: Database,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Node.js", icon: Code2, color: "from-green-500 to-green-600" },
        { name: "Express.js", icon: Zap, color: "from-gray-700 to-gray-800" },
        { name: "MongoDB", icon: Database, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", icon: Code, color: "from-yellow-500 to-orange-500" },
        { name: "REST APIs", icon: Code2, color: "from-blue-500 to-blue-600" },
      ],
    },
    {
      id: 4,
      title: "Graphics Designing",
      icon: Zap,
      color: "from-pink-400 to-rose-400",
      skills: [
        { name: "Figma", icon: Code, color: "from-purple-500 to-purple-600" },
        { name: "Adobe XD", icon: Code, color: "from-purple-500 to-purple-600" },
        { name: "Photoshop", icon: Code, color: "from-blue-500 to-blue-600" },
        { name: "UI Design", icon: Zap, color: "from-pink-500 to-pink-600" },
        { name: "UX Design", icon: Code2, color: "from-indigo-500 to-indigo-600" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-neon-pink">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Key technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isHovered = hoveredCategory === category.id;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                <div className="relative bg-card/50 backdrop-blur-md border-2 border-border/40 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl p-0">
                  {/* Header Section */}
                  <div className="px-8 py-6 border-b border-border/20">
                    <div className="flex items-center gap-4">
                      {/* Icon with soft glow */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
                        <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                          <CategoryIcon className="w-6 h-6 text-background" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-neon-pink group-hover:text-neon transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="px-8 py-6 space-y-3">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.9,
                            x: 0,
                          }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 8, scale: 1.02 }}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-background to-card/40 hover:from-primary/5 hover:to-accent/5 border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md group/item cursor-pointer"
                        >
                          {/* Skill Icon */}
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} shadow-md flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                            <SkillIcon className="w-4 h-4 text-white" />
                          </div>

                          {/* Skill Name */}
                          <span className="text-foreground font-semibold text-sm group-hover/item:text-neon transition-colors duration-300 flex-grow">
                            {skill.name}
                          </span>

                          {/* Indicator dot */}
                          <motion.div
                            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            className="w-2 h-2 rounded-full bg-primary"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
