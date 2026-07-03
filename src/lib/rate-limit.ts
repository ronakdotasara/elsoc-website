/**
 * Fixed-window in-memory rate limiter.
 *
 * Suitable for the single-instance deployments this site targets (one Docker
 * container / one Vercel region for a society site). If the app is ever
 * scaled horizontally, swap the store for Redis/Upstash — the call sites
 * won't change.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  if (bucket.count > limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }
  return { ok: true, remaining: limit - bucket.count, retryAfterSeconds: 0 };
}

// Opportunistic cleanup so long-running processes don't accumulate stale keys.
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();
export function sweepExpiredBuckets(now = Date.now()) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/** Login: 5 attempts / 15 minutes / IP (per the security spec). */
export const LOGIN_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 } as const;
/** Public form submissions: 10 / 10 minutes / IP. */
export const FORM_LIMIT = { limit: 10, windowMs: 10 * 60 * 1000 } as const;
/** Chat: 20 messages / 5 minutes / IP. */
export const CHAT_LIMIT = { limit: 20, windowMs: 5 * 60 * 1000 } as const;
