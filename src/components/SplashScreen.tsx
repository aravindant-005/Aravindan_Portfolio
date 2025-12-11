import { motion } from "framer-motion";
import { useEffect } from "react";
import { Code, Cpu } from "lucide-react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Splash screen duration: 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated background elements - simplified */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Very subtle floating particles (reduced number and intensity) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              opacity: 0,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -20],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        {/* Animated logo container - removed */}
        {/* Welcome text */}
        <motion.div
          className="text-center space-y-2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent relative"
            style={{
              backgroundImage: 'linear-gradient(to right, #e0e0e0, #ffffff)',
              textShadow: '0 0 15px rgba(0, 224, 255, 0.7), 0 0 30px rgba(0, 224, 255, 0.5), 0 0 45px rgba(0, 224, 255, 0.3)'
            }}
          >
            Welcome to My Portfolio
            <motion.span
              className="absolute inset-0 block"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                textShadow: '0 0 10px #00e0ff, 0 0 20px #00e0ff, 0 0 30px #00e0ff'
              }}
            />
          </h1>
          <p className="text-gray-500 text-lg">Loading your experience...</p>
        </motion.div>

        {/* Loading indicator - simplified */}
        <div className="relative w-32 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
