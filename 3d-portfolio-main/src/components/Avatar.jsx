import { useRef, useEffect, useState, useCallback } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { assetPath } from "../utils/assetPath";

const Avatar = ({ onAboutClick, scrollProgress = 0, ...props }) => {
  const group = useRef();
  const headRef = useRef();
  const { scene, animations } = useGLTF(
    assetPath("models/avatar.glb")
  );
  const { actions, mixer } = useAnimations(animations, group);

  const [blinkClosed, setBlinkClosed] = useState(false);
  const blinkTimer = useRef(Math.random() * 3 + 1);
  const blinkDuration = useRef(0.15);

  // Track mouse position for head tracking
  const mouseTarget = useRef({ x: 0, y: 0 });
  const currentLook = useRef({ x: 0, y: 0 });

  // RobotExpressive has no "Idle" animation — use T-pose; don't auto-play any animation
  // We only trigger "Wave" on scroll
  useEffect(() => {
    // Log available animations for debugging
    if (actions) {
      console.log("Available animations:", Object.keys(actions));
    }
  }, [actions]);

  // Find and store reference to head bone/mesh
  useEffect(() => {
    scene.traverse((child) => {
      const name = child.name.toLowerCase();
      if (
        child.isBone &&
        (name.includes("head") || name.includes("neck"))
      ) {
        headRef.current = child;
      }
      // Also check for mesh named head for scale-based blinking
      if (
        child.isMesh &&
        name.includes("eye") &&
        !headRef.current
      ) {
        // Store any mesh for potential morph-based blinking
        if (child.morphTargetInfluences || child.morphTargetDictionary) {
          headRef.current = child;
        }
      }
    });

    // If no head bone found, use the whole group
    if (!headRef.current) {
      headRef.current = group.current;
    }
  }, [scene]);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Click handler for About Me modal
  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (onAboutClick) onAboutClick();
    },
    [onAboutClick]
  );

  useFrame((_, delta) => {
    // --- Blinking ---
    blinkTimer.current -= delta;
    if (blinkTimer.current <= 0) {
      setBlinkClosed(true);
      blinkDuration.current -= delta;
      if (blinkDuration.current <= 0) {
        setBlinkClosed(false);
        blinkTimer.current = Math.random() * 5 + 1.5; // 1.5–6.5 seconds
        blinkDuration.current = 0.15;
      }
    }

    // Apply blink by scaling eye meshes
    scene.traverse((child) => {
      if (
        child.isMesh &&
        (child.name.toLowerCase().includes("eye") ||
          child.name.toLowerCase().includes("eyelid"))
      ) {
        if (blinkClosed) {
          child.scale.y = THREE.MathUtils.lerp(child.scale.y, 0.01, 0.5);
        } else {
          child.scale.y = THREE.MathUtils.lerp(child.scale.y, 1, 0.3);
        }
      }
    });

    // --- Mouse head tracking ---
    if (headRef.current) {
      const targetX = mouseTarget.current.x * 0.4; // ±0.4 rad ≈ ±23°
      const targetY = mouseTarget.current.y * 0.25; // ±0.25 rad ≈ ±14°

      currentLook.current.x = THREE.MathUtils.lerp(
        currentLook.current.x,
        targetX,
        2 * delta
      );
      currentLook.current.y = THREE.MathUtils.lerp(
        currentLook.current.y,
        targetY,
        2 * delta
      );

      headRef.current.rotation.y = currentLook.current.x;
      headRef.current.rotation.x = currentLook.current.y;
    }

    // --- Scroll-triggered wave animation ---
    if (scrollProgress > 0.05) {
      const waveAction = actions["Wave"] || actions["wave"];
      if (waveAction && !waveAction.isRunning()) {
        waveAction.reset().fadeIn(0.3).play();
        waveAction.clampWhenFinished = true;
        waveAction.loop = THREE.LoopOnce;
      }
    }
  });

  return (
    <group ref={group} {...props} onClick={handleClick}>
      <primitive object={scene} />
    </group>
  );
};

export { Avatar };
useGLTF.preload(assetPath("models/avatar.glb"));
