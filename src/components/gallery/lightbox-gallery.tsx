"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  url: string;
  alt: string;
}

/**
 * Responsive masonry (CSS columns) with an accessible, keyboard-navigable
 * lightbox: Esc closes, ←/→ navigate, focus is restored on close.
 */
export function LightboxGallery({ images }: { images: LightboxImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null ? null : (current + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="columns-2 gap-4 md:columns-3 xl:columns-4 [&>li]:mb-4">
        {images.map((img, i) => (
          <li key={img.url} className="break-inside-avoid">
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group relative block w-full overflow-hidden rounded-xl border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                width={640}
                height={480}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active !== null && images[active] && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={images[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#02040a]/90 p-4 backdrop-blur-md"
            onClick={close}
          >
            <motion.div
              initial={reduceMotion ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduceMotion ? undefined : { scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[88dvh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[active].url}
                alt={images[active].alt}
                className="max-h-[82dvh] w-auto rounded-lg border border-line object-contain shadow-2xl"
              />
              <p className="mt-3 text-center font-mono text-xs text-fg-subtle">
                {active + 1} / {images.length} — {images[active].alt}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full glass text-fg transition-colors hover:text-volt"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full glass text-fg transition-colors hover:text-volt sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full glass text-fg transition-colors hover:text-volt sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
