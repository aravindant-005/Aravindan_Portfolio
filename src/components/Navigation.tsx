import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, Mail, Award, Calendar, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: Home, type: "internal" },
    { id: "about", label: "About", icon: User, type: "internal" },
    { id: "projects", label: "Projects", icon: Briefcase, type: "internal" },
    { id: "skills", label: "Skills", icon: Code, type: "internal" },
    { id: "events", label: "Events", icon: Calendar, type: "internal" },
    { id: "resume", label: "Certificates", icon: Award, type: "internal" },
    { id: "graphic-designs", label: "Graphic Designs", icon: Code, type: "internal" }, // New item
    { id: "contact", label: "Contact", icon: Mail, type: "internal" },
    { id: "resume-link", label: "View Resume", icon: FileText, href: "/src/components/sections/Resume.png", type: "external" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-neon cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                if (item.type === "external") {
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    >
                      <Icon size={16} />
                      {item.label}
                    </motion.a>
                  );
                }
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:hover:bg-muted/50"
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-card border-l border-border p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-neon">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  if (item.type === "external") {
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      >
                        <Icon size={20} />
                        {item.label}
                      </motion.a>
                    );
                  }
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;