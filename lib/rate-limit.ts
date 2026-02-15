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
}
