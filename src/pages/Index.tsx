import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Events from "@/components/sections/Events";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Events />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card/50 backdrop-blur-md border-t border-border/20 py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 Your Name. Built with ❤️ using React, Framer Motion & Three.js
              </p>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </motion.a>
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Back to Top ↑
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
