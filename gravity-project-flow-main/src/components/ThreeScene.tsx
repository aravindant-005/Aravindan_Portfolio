import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedGeometry = ({ geometry = "sphere", ...props }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case "box":
        return (
          <mesh ref={meshRef} {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color="#00ffff" 
              wireframe 
              emissive="#003333"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      case "torus":
        return (
          <mesh ref={meshRef} {...props}>
            <torusGeometry args={[1, 0.4, 16, 100]} />
            <meshStandardMaterial 
              color="#ff00ff" 
              wireframe 
              emissive="#330033"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      default:
        return (
          <mesh ref={meshRef} {...props}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
              color="#00ffff" 
              wireframe 
              emissive="#003333"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
    }
  };

  return <GeometryComponent />;
};

interface ThreeSceneProps {
  geometry?: "sphere" | "box" | "torus";
  scale?: number;
  position?: [number, number, number];
  className?: string;
}

const ThreeScene = ({ 
  geometry = "sphere", 
  scale = 1, 
  position = [0, 0, 0],
  className = ""
}: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false
        }}
        onCreated={(state) => {
          state.scene.background = null;
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        <AnimatedGeometry 
          geometry={geometry}
          scale={scale}
          position={position}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;