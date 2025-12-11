import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface AnimatedShapeProps {
  geometry?: "sphere" | "box" | "torus" | "ring";
  scale?: number;
  className?: string;
  color1?: string;
  color2?: string;
  duration?: number;
  reverse?: boolean;
  pulse?: boolean;
}

const AnimatedShape = ({ 
  geometry = "sphere", 
  scale = 1,
  className = "",
  color1 = "#6366f1",
  color2 = "#8b5cf6",
  duration = 30,
  reverse = false,
  pulse = false
}: AnimatedShapeProps) => {
  const controls = useAnimation();
  const baseSize = 200 * scale;

  useEffect(() => {
    const sequence = async () => {
      const rotation = {
        rotateX: reverse ? [360, 0] : [0, 360],
        rotateY: reverse ? [360, 0] : [0, 360],
        scale: pulse ? [1, 1.1, 1] : 1,
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        },
      };
      
      await controls.start(rotation);
    };
    
    sequence();
  }, [controls, duration, reverse, pulse]);

  const getShapeStyles = () => {
    switch (geometry) {
      case "box":
        return {
          width: baseSize,
          height: baseSize,
          background: `linear-gradient(135deg, ${color1}, ${color2})`,
          borderRadius: "20px",
          boxShadow: `0 0 30px -5px ${color1}80`,
        };
      case "torus":
        return {
          width: baseSize,
          height: baseSize,
          background: `radial-gradient(circle at 30% 30%, ${color1} 0%, ${color2} 100%)`,
          borderRadius: "50%",
          border: `${baseSize * 0.15}px solid ${color1}40`,
          boxShadow: `0 0 40px -10px ${color1}80`,
        };
      case "ring":
        return {
          width: baseSize,
          height: baseSize,
          borderRadius: "50%",
          border: `${baseSize * 0.1}px solid transparent`,
          borderTop: `${baseSize * 0.1}px solid ${color1}`,
          borderRight: `${baseSize * 0.1}px solid ${color2}`,
          boxShadow: `0 0 30px -5px ${color1}80`,
        };
      default: // sphere
        return {
          width: baseSize,
          height: baseSize,
          background: `radial-gradient(circle at 30% 30%, ${color1} 0%, ${color2} 100%)`,
          borderRadius: "50%",
          boxShadow: `0 0 40px -10px ${color1}80`,
        };
    }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <motion.div
        style={{
          ...getShapeStyles(),
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))"
        }}
        animate={controls}
        className="will-change-transform"
      />
    </div>
  );
};

export default AnimatedShape;