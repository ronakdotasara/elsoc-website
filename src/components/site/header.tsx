"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { useUiStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const mobileNavOpen = useUiStore((s) => s.mobileNavOpen);
  const setMobileNavOpen = useUiStore((s) => s.setMobileNavOpen);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname, setMobileNavOpen]);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-md bg-volt px-4 py-2 font-medium text-[#04070f] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || mobileNavOpen
            ? "border-b border-line bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-site flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="ELSOC — home"
          >
            <span className="relative overflow-hidden rounded-full ring-1 ring-line transition group-hover:ring-volt/60">
              <Image
                src={site.logo}
                alt=""
                width={38}
                height={38}
                priority
                className="rounded-full"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight">
                ELSOC
              </span>
              <span className="mono-label !text-[0.5rem] !tracking-[0.28em] text-fg-subtle">
                NIT Hamirpur
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 font-display text-[0.9rem] font-medium transition-colors",
                    active ? "text-volt" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {link.label}
                  {active && !reduceMotion && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-volt to-transparent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Join ELSOC</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile navigation sheet */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[var(--nav-height)] z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3.5 font-display text-xl font-semibold transition-colors",
                        active ? "bg-surface text-volt" : "text-fg hover:bg-surface",
                      )}
                    >
                      {link.label}
                      <span className="mono-label" aria-hidden>
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Join ELSOC</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
