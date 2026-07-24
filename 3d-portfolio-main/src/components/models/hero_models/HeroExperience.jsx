import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import { Avatar } from "../../Avatar";
import { Suspense } from "react";

const HeroExperience = ({ onAboutClick, scrollProgress }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} color="#ffffff" />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={15}
        minDistance={3}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Avatar
          onAboutClick={onAboutClick}
          scrollProgress={scrollProgress}
          scale={isMobile ? 1.5 : 2.5}
          position={[0, -1, 0]}
          rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
