"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Declarative scroll choreography.
 *
 * Server components opt in with data attributes instead of importing GSAP:
 *   data-animate="heading"      staggered kinetic heading (children split)
 *   data-animate="chars"        per-character SplitText reveal
 *   data-animate="rise"         fade + rise
 *   data-animate="stagger"      children rise with stagger
 *   data-animate-child          marks children inside "heading"/"stagger"
 *
 * Everything no-ops under prefers-reduced-motion (content stays visible).
 */
export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('[data-animate="heading"]').forEach((el) => {
        const children = el.querySelectorAll("[data-animate-child]");
        if (!children.length) return;
        gsap.from(children, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      document.querySelectorAll<HTMLElement>('[data-animate="chars"]').forEach((el) => {
        // `background-clip: text` gradients don't paint through SplitText's
        // wrapper divs (Chrome limitation), so gradient headings get a masked
        // sweep instead of per-char splitting.
        if (el.classList.contains("text-gradient")) {
          gsap.fromTo(
            el,
            { clipPath: "inset(-10% 100% -10% 0%)", y: 26, opacity: 0 },
            {
              clipPath: "inset(-10% 0% -10% 0%)",
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
          return;
        }
        const split = SplitText.create(el, { type: "chars,words" });
        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: { each: 0.018, from: "start" },
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      document.querySelectorAll<HTMLElement>('[data-animate="rise"]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.85,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      document.querySelectorAll<HTMLElement>('[data-animate="stagger"]').forEach((el) => {
        const children = el.querySelectorAll("[data-animate-child]");
        if (!children.length) return;
        gsap.from(children, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
