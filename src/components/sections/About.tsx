import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

import m1 from "../../assets/m1.jpg";
import m2 from "../../assets/m2.jpg";
import m3 from "../../assets/m3.jpg";
import m4 from "../../assets/m4.jpeg";

const images = [m1, m2, m3, m4];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-lg"
      aria-label="Image slideshow"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Professional photo ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          aria-hidden="false"
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Frontend Developer & Graphics Designer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a creative professional with expertise in both frontend development and graphics design.
                I specialize in crafting beautiful, responsive, and user-centric digital experiences that
                combine technical excellence with stunning visual design.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building responsive and interactive web applications using modern JavaScript frameworks
                    and best practices in UI/UX design.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-lg">Graphics Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating visually compelling designs, logos, and brand identities that communicate
                    effectively and leave a lasting impression.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-medium">Name:</h4>
                  <p className="text-muted-foreground">Aravindan</p>
                </div>
                <div>
                  <h4 className="font-medium">Email:</h4>
                  <a href="mailto:aravindant005@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    aravindant005@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium">Expertise:</h4>
                  <p className="text-muted-foreground">Frontend & Design</p>
                </div>
                <div>
                  <h4 className="font-medium">Location:</h4>
                  <p className="text-muted-foreground">Erode, Perundurai</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Slideshow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
