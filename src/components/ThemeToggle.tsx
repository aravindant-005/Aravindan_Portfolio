import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center
                 bg-card/50 hover:bg-card text-foreground
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.8, opacity: 0, rotate: theme === "light" ? -90 : 90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: theme === "light" ? 90 : -90 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute"
      >
        {theme === "light" ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-indigo-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
