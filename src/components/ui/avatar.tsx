import Image from "next/image";
import { cn, initials } from "@/lib/utils";

/**
 * Team photo with a deterministic, branded fallback (initials on a gradient)
 * for members who haven't submitted a photograph.
 */
export function Avatar({
  name,
  src,
  size = 96,
  className,
  sizes,
}: {
  name: string;
  src?: string | null;
  size?: number;
  className?: string;
  sizes?: string;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={name}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-pulse/30 via-bg-raised to-volt/20",
          "font-display font-semibold text-fg-muted",
          className,
        )}
        style={{ fontSize: Math.max(14, size / 3.2) }}
      >
        {initials(name)}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      sizes={sizes ?? `${size}px`}
      className={cn("object-cover", className)}
    />
  );
}
