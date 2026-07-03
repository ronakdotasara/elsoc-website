"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

/**
 * Viewport-triggered reveal for DOM content (Framer Motion). GSAP owns the
 * scroll-linked/pinned sequences; this handles simple entrances so the two
 * systems never fight over the same elements.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: PropsWithChildren<{ delay?: number; className?: string; once?: boolean }>) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
