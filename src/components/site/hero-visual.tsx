"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { supportsWebGL } from "@/components/three/webgl";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
  loading: () => <HeroFallback pulse />,
});

/**
 * Decides between the WebGL electric-field and the 2D fallback.
 * The fallback is a hand-drawn SVG oscilloscope sweep: animated via CSS for
 * low-end devices, perfectly still under prefers-reduced-motion.
 */
export function HeroVisual() {
  const [mode, setMode] = useState<"pending" | "webgl" | "fallback">("pending");

  useEffect(() => {
    // Save-Data / very small GPUs → fallback as well
    const saveData =
      "connection" in navigator &&
      (navigator as unknown as { connection?: { saveData?: boolean } }).connection
        ?.saveData === true;
    setMode(supportsWebGL() && !saveData ? "webgl" : "fallback");
  }, []);

  if (mode === "webgl") return <HeroCanvas />;
  return <HeroFallback pulse={mode === "pending"} />;
}

function HeroFallback({ pulse = false }: { pulse?: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden bg-blueprint"
      data-testid="hero-fallback"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      <svg
        className="absolute inset-x-0 bottom-[12%] mx-auto w-[140%] max-w-none -translate-x-[14%] text-volt md:w-full md:translate-x-0"
        viewBox="0 0 1200 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 160 H310 l14-44 22 88 22-118 22 132 20-58 h96 l16-36 22 72 22-96 22 110 18-42 h100 l12-30 20 60 20-82 20 96 16-34 H1200"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="2400"
          className={pulse ? "opacity-40" : "motion-safe:animate-trace"}
          style={{ filter: "drop-shadow(0 0 12px var(--glow-volt))" }}
        />
        <path
          d="M0 200 H260 l18-30 20 62 20-84 22 92 16-40 h130 l14-26 18 52 20-72 20 84 14-28 h160 l12-22 18 44 18-62 18 72 12-24 H1200"
          stroke="var(--pulse)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
