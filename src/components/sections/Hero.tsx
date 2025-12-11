import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Download,
  Mail,
} from "lucide-react";
import AnimatedShape from "../AnimatedShape";
// import ParticlesBackground from "../ParticlesBackground"; // Removed

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aravindant-005",
      label: "GitHub",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aravindan-t-855225366/",
      label: "LinkedIn",
      color: "hover:text-primary",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-accent",
    },


  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* <ParticlesBackground /> Removed */}

      {/* Gradient overlay - Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" /> */}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-primary font-semibold text-lg"
              >
                Hi, Welcome to my portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-neon">Aravindan</span>
                <br />
                <span className="text-neon-purple">Frontend Developer & Graphics Designer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
               Crafting smooth, powerful, and intuitive user experiences.
Combining modern tech with thoughtful visual design.
Solving complex problems through innovation and clarity.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/src/components/sections/Resume.png'; // Updated path to Resume.png
                  link.download = 'Aravindan-Resume.png'; // Updated filename for download
                  link.click();
                }}
                className="btn-neon flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-secondary-neon flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-primary/20`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right column - image + 3D shape */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 lg:h-[500px] flex justify-center items-center"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Floating shape behind */}
            <div className="absolute z-0">
              <AnimatedShape
                geometry="sphere"
                scale={1.8}
                className="animate-float opacity-50"
              />
            </div>

            {/* Profile image */}
            <motion.img
              src="./src/components/sections/What.jpeg" // rename your file and put it in public folder
              alt="Aravind"
              className="w-72 h-72 rounded-full object-cover border-4 border-primary shadow-lg relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
