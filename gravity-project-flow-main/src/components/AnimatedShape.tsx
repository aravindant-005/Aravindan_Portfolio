import { motion } from "framer-motion";

interface AnimatedShapeProps {
  geometry?: "sphere" | "box" | "torus";
  scale?: number;
  position?: [number, number, number];
  className?: string;
}

const AnimatedShape = ({ 
  geometry = "sphere", 
  scale = 1, 
  className = ""
}: AnimatedShapeProps) => {
  const getShapeStyles = () => {
    const baseSize = 200 * scale;
    
    switch (geometry) {
      case "box":
        return {
          width: baseSize,
          height: baseSize,
          background: "linear-gradient(45deg, #00ffff, #0080ff)",
          borderRadius: "20px",
        };
      case "torus":
        return {
          width: baseSize,
          height: baseSize,
          background: "linear-gradient(45deg, #ff00ff, #ff8000)",
          borderRadius: "50%",
          border: `${baseSize * 0.2}px solid transparent`,
          backgroundClip: "padding-box",
        };
      default: // sphere
        return {
          width: baseSize,
          height: baseSize,
          background: "linear-gradient(45deg, #00ffff, #00ff80)",
          borderRadius: "50%",
        };
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <motion.div
        style={getShapeStyles()}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="opacity-60 hover:opacity-100 transition-opacity duration-500"
      >
        <motion.div
          className="w-full h-full border-2 border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedShape;