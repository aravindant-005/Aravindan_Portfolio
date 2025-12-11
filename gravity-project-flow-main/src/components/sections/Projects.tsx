import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Code2, Palette, Smartphone, Globe } from "lucide-react";
import AnimatedShape from "../AnimatedShape";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/500/300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      github: "#",
      live: "#",
      icon: Globe,
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and intuitive user interface.",
      image: "/api/placeholder/500/300",
      tags: ["React Native", "Firebase", "TypeScript"],
      category: "Mobile",
      github: "#",
      live: "#",
      icon: Smartphone,
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive design system with reusable components, design tokens, and documentation for scalable product development.",
      image: "/api/placeholder/500/300",
      tags: ["React", "Storybook", "Figma", "CSS"],
      category: "Design",
      github: "#",
      live: "#",
      icon: Palette,
    },
    {
      id: 4,
      title: "AI Code Assistant",
      description: "Intelligent code assistant that helps developers write better code with AI-powered suggestions and automated refactoring.",
      image: "/api/placeholder/500/300",
      tags: ["Python", "OpenAI", "VS Code", "TypeScript"],
      category: "Open Source",
      github: "#",
      live: "#",
      icon: Code2,
    },
  ];

  const categories = ["All", "Web", "Mobile", "Design", "Open Source"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
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
            Featured <span className="text-neon-pink">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Explore my latest work and side projects that showcase my skills and passion for development
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-background shadow-lg shadow-primary/30"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card"
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
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card group overflow-hidden"
              >
                {/* Project Image/3D Scene */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <AnimatedShape 
                    geometry={index % 3 === 0 ? "sphere" : index % 3 === 1 ? "box" : "torus"}
                    scale={0.8}
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-neon group-hover:text-neon-pink transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-muted transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
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

export default Projects;