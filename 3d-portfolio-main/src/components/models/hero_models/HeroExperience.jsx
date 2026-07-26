import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { assetPath } from "../../../utils/assetPath";

const RhetoricianModel = ({ isMobile }) => {
  const { scene } = useGLTF(assetPath("models/rhetorician.glb"));
  return <primitive object={scene} scale={isMobile ? 0.8 : 1.2} position={[0, -3.5, 0]} />;
};

const HeroExperience = ({ onAboutClick, compact }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const canvasHeight = compact ? '280px' : (isMobile ? '50vh' : '80vh');

  return (
    <Canvas camera={{ position: [0, 1, 8], fov: 45 }} style={{ height: canvasHeight, width: compact ? '280px' : '100%' }}>
      <ambientLight intensity={0.5} color="#ffffff" />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={15}
        minDistance={3}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <Particles count={200} />

      <Suspense fallback={null}>
        <RhetoricianModel isMobile={compact ? false : isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;