import Link from "next/link";
import { ArrowLeft, Unplug } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <div className="relative">
        <p
          aria-hidden
          className="text-[clamp(6rem,22vw,14rem)] font-display font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--border-strong)]"
        >
          404
        </p>
        <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-signal/40 bg-bg shadow-[0_0_40px_rgba(251,191,36,0.15)]">
          <Unplug className="size-7 text-signal motion-safe:animate-float" aria-hidden />
        </span>
      </div>
      <h1 className="mt-6 text-display-md font-display font-semibold text-gradient">
        Circuit Disconnected
      </h1>
      <p className="mt-3 max-w-md text-sm text-fg-muted">
        The page you’re looking for seems to have lost its connection. Let’s get you back
        on track.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="size-4" aria-hidden /> Return Home
        </Link>
      </Button>
    </section>
  );
}
