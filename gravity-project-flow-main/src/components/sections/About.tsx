import { motion } from "framer-motion";
import { Code, Palette, Zap, Coffee } from "lucide-react";
import AnimatedShape from "../AnimatedShape";

const About = () => {
  const stats = [
    { icon: Code, value: "50+", label: "Projects Completed" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Zap, value: "3+", label: "Years Experience" },
    { icon: Palette, value: "∞", label: "Creative Ideas" },
  ];

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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
      
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
            About <span className="text-neon">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            I'm a passionate developer who loves creating digital experiences that make a difference
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-neon-purple">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey in technology with a curiosity about how things work behind the scenes. 
                  What began as simple HTML experiments has evolved into a passion for creating sophisticated, 
                  user-centered digital experiences.
                </p>
                <p>
                  Today, I specialize in modern web technologies, focusing on React, TypeScript, and cutting-edge 
                  animation libraries. I believe that great software combines robust functionality with delightful 
                  user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-6 text-center group"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="text-2xl font-bold text-neon mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-radial from-secondary/20 via-transparent to-transparent rounded-full blur-3xl" />
            <AnimatedShape geometry="torus" scale={1.2} className="animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;