import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LOGIN_LIMIT, rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows exactly `limit` attempts per window (login: 5 / 15 min)", () => {
    const key = `login:test-${Math.random()}`;
    for (let i = 0; i < 5; i++) {
      expect(rateLimit(key, LOGIN_LIMIT).ok).toBe(true);
    }
    const sixth = rateLimit(key, LOGIN_LIMIT);
    expect(sixth.ok).toBe(false);
    expect(sixth.retryAfterSeconds).toBeGreaterThan(0);
    expect(sixth.retryAfterSeconds).toBeLessThanOrEqual(15 * 60);
  });

  it("resets after the window elapses", () => {
    const key = `login:reset-${Math.random()}`;
    for (let i = 0; i < 6; i++) rateLimit(key, LOGIN_LIMIT);
    expect(rateLimit(key, LOGIN_LIMIT).ok).toBe(false);

    vi.advanceTimersByTime(15 * 60 * 1000 + 1);
    expect(rateLimit(key, LOGIN_LIMIT).ok).toBe(true);
  });

  it("tracks keys independently", () => {
    const a = `k:a-${Math.random()}`;
    const b = `k:b-${Math.random()}`;
    for (let i = 0; i < 6; i++) rateLimit(a, LOGIN_LIMIT);
    expect(rateLimit(a, LOGIN_LIMIT).ok).toBe(false);
    expect(rateLimit(b, LOGIN_LIMIT).ok).toBe(true);
  });
});
