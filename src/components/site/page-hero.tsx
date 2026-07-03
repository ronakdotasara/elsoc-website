import { cn } from "@/lib/utils";

/** Interior-page hero: blueprint backdrop, kinetic title, mono breadcrumb. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line pt-[calc(var(--nav-height)+4rem)] pb-16",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-70" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-pulse/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent"
      />
      <div className="container-site relative">
        <p className="mono-label mb-4 flex items-center gap-2 text-volt">
          <span aria-hidden className="inline-block h-px w-8 bg-volt/60" />
          {eyebrow}
        </p>
        <h1
          data-animate="chars"
          className="max-w-3xl text-display-xl font-display font-bold text-gradient"
        >
          {title}
        </h1>
        {lede && (
          <p data-animate="rise" className="mt-5 max-w-2xl text-pretty text-fg-muted">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
