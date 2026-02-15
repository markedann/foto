import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const DAILY_LIMIT = 1;
const TTL_SECONDS = 86400; // 24 hours

/**
 * Check whether the given IP has remaining generations today.
 * Returns { allowed, remaining, resetInSeconds }.
 */
export async function checkRateLimit(ip: string) {
  const key = `rl:generate:${ip}`;

  try {
    const current = await redis.get<number>(key);

    if (current !== null && current >= DAILY_LIMIT) {
      const ttl = await redis.ttl(key);
      return {
        allowed: false,
        remaining: 0,
        resetInSeconds: ttl > 0 ? ttl : TTL_SECONDS,
      };
    }

    // Increment counter and set expiry on first use
    const newCount = await redis.incr(key);
    if (newCount === 1) {
      await redis.expire(key, TTL_SECONDS);
    }

    const ttl = await redis.ttl(key);

    return {
      allowed: newCount <= DAILY_LIMIT,
      remaining: Math.max(0, DAILY_LIMIT - newCount),
      resetInSeconds: ttl > 0 ? ttl : TTL_SECONDS,
    };
  } catch (err) {
    // Fail open -- if Redis is down, allow the request
    console.error("[v0] Redis rate-limit error:", err);
    return { allowed: true, remaining: 0, resetInSeconds: 0 };
  }
}

/**
 * Read-only check — does NOT increment the counter.
 * Used by the frontend to show remaining generations proactively.
 */
export async function getRateLimitStatus(ip: string) {
  const key = `rl:generate:${ip}`;

  try {
    const current = (await redis.get<number>(key)) ?? 0;
    const ttl = await redis.ttl(key);

    return {
      allowed: current < DAILY_LIMIT,
      remaining: Math.max(0, DAILY_LIMIT - current),
      resetInSeconds: ttl > 0 ? ttl : 0,
    };
  } catch (err) {
    console.error("[v0] Redis status check error:", err);
    return { allowed: true, remaining: DAILY_LIMIT, resetInSeconds: 0 };
  }
}
