import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Code2, Palette, Smartphone, Globe } from "lucide-react";
import AnimatedShape from "../AnimatedShape";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Inventory Management for Medical Shop",
      description: "A robust system for managing medical inventory, tracking stock, and automating order processes for pharmacies and medical suppliers.",
      image: "/api/placeholder/500/300",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Code2,
    },
    {
      id: 2,
      title: "Handcrafted Marketplace",
      description: "An online platform dedicated to artisans and craft enthusiasts, allowing them to buy and sell unique handmade products.",
      image: "/api/placeholder/500/300",
      tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Palette,
    },
    {
      id: 3,
      title: "Smart Disaster Management",
      description: "An intelligent system for real-time disaster monitoring, early warning, and efficient resource allocation during emergencies.",
      image: "/api/placeholder/500/300",
      tags: ["Python", "AI/ML", "GIS", "Cloud Computing"],
      category: "AI/ML",
      github: "#",
      live: "#",
      icon: Globe,
    },
    {
      id: 4,
      title: "Smart Traffic Management",
      description: "An advanced solution for optimizing urban traffic flow using real-time data, predictive analytics, and smart signal control.",
      image: "/api/placeholder/500/300",
      tags: ["IoT", "Big Data", "Machine Learning", "Computer Vision"],
      category: "IoT",
      github: "#",
      live: "#",
      icon: Smartphone,
    },
  ];

  const allCategories = [...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState(allCategories[0] || "");

  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">

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
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 relative inline-block"
          >
            Projects & Featured
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 opacity-70 blur-sm" />
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 mt-4"
          >
            Explore my latest work and side projects that showcase my skills and passion for development, with a focus on innovative solutions and modern technologies.
          </motion.p>

          {/* Category Filter - I will keep this for now, but its styling will be updated later */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {allCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 30px rgba(0, 224, 255, 0.2), 0 0 15px rgba(0, 224, 255, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="relative bg-gray-900 rounded-xl border border-blue-600/40 p-6 shadow-xl group cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, rgba(0, 224, 255, 0.1) 0%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
                {/* Project Image/3D Scene - Removed */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-aqua-400 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Icon className="w-8 h-8 text-blue-500 opacity-70" />
                </div>

                <p className="text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Removed */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;