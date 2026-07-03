"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ElectricField } from "./electric-field";
import { prefersReducedMotion } from "./webgl";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero WebGL canvas. Loaded via next/dynamic (ssr: false) so Three.js never
 * enters the initial bundle. Performance guardrails: adaptive DPR, a
 * PerformanceMonitor that drops post-processing on weak GPUs, and demand-less
 * frameloop only while the hero is on screen.
 */
export default function HeroCanvas({ still = false }: { still?: boolean }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const [degraded, setDegraded] = useState(false);
  const [dpr, setDpr] = useState<[number, number]>([1, 1.75]);
  const reduceMotion = prefersReducedMotion() || still;

  // Scroll-linked morph: uScroll follows the hero's exit progress.
  useEffect(() => {
    if (reduceMotion || !wrapper.current) return;
    const trigger = ScrollTrigger.create({
      trigger: wrapper.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });
    return () => trigger.kill();
  }, [reduceMotion]);

  return (
    <div ref={wrapper} className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 2.4, 9.5], fov: 52, near: 0.1, far: 60 }}
        dpr={dpr}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
        frameloop={reduceMotion ? "demand" : "always"}
        style={{ background: "transparent" }}
      >
        <PerformanceMonitor
          onDecline={() => {
            setDegraded(true);
            setDpr([0.75, 1.25]);
          }}
        >
          <ElectricField scrollRef={scrollProgress} animated={!reduceMotion} />
          {!degraded && !reduceMotion && (
            <EffectComposer multisampling={0}>
              <Bloom
                intensity={0.85}
                luminanceThreshold={0.18}
                luminanceSmoothing={0.35}
                mipmapBlur
              />
              <ChromaticAberration offset={[0.0009, 0.0006]} />
            </EffectComposer>
          )}
        </PerformanceMonitor>
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
