import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "Next.js", level: 85, color: "from-gray-800 to-gray-600" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-cyan-500" },
        { name: "Framer Motion", level: 88, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 87, color: "from-green-600 to-green-400" },
        { name: "Python", level: 82, color: "from-yellow-500 to-blue-500" },
        { name: "PostgreSQL", level: 85, color: "from-blue-700 to-indigo-500" },
        { name: "MongoDB", level: 80, color: "from-green-700 to-green-500" },
        { name: "GraphQL", level: 78, color: "from-pink-600 to-purple-500" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 92, color: "from-orange-600 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-600 to-blue-400" },
        { name: "AWS", level: 70, color: "from-orange-500 to-yellow-500" },
        { name: "Figma", level: 85, color: "from-purple-600 to-pink-500" },
        { name: "Three.js", level: 72, color: "from-green-500 to-teal-500" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "var(--progress-width)",
      transition: { duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
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
            Skills & <span className="text-neon-purple">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-4"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(index)}
                className={`w-full p-6 text-left rounded-xl transition-all duration-300 ${
                  activeCategory === index
                    ? "glass-card border-primary/30 bg-primary/5"
                    : "glass-card hover:bg-muted/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-neon">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-2 glass-card p-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-neon-pink flex items-center gap-3"
            >
              <span className="text-3xl">{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title} Skills
            </motion.h3>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Highlight */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
            >
              <h4 className="font-bold text-primary mb-2">Featured Skill</h4>
              <p className="text-sm text-muted-foreground">
                {skillCategories[activeCategory].title === "Frontend" && 
                  "I specialize in creating beautiful, responsive user interfaces with modern React patterns and animations."}
                {skillCategories[activeCategory].title === "Backend" && 
                  "I build scalable server-side applications with robust APIs and efficient database designs."}
                {skillCategories[activeCategory].title === "Tools & Others" && 
                  "I leverage modern development tools and cloud platforms to deliver production-ready applications."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;