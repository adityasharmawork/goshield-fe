import { NextRequest, NextResponse } from 'next/server';

// --- Configuration for the Rate Limiter ---
const TIME_WINDOW_SECONDS = 60; // The time window to track requests (in seconds).
const MAX_REQUESTS_PER_WINDOW = 100; // Max requests allowed per IP in the window.

/**
 * In-memory store for tracking request counts per IP address.
 * A production-grade system would use a distributed cache like Redis or Memcached
 * to share state across multiple server instances.
 */
const requestTracker = new Map<string, { count: number; windowStart: number }>();

/**
 * This function implements a sliding window rate-limiting algorithm.
 * @param ip - The IP address of the incoming request.
 * @returns A boolean indicating if the request is allowed or has been rate-limited.
 */
const isRateLimited = (ip: string): boolean => {
  const currentTime = Date.now();
  const record = requestTracker.get(ip);

  // If this is the first request from this IP or the window has expired.
  if (!record || (currentTime - record.windowStart > TIME_WINDOW_SECONDS * 1000)) {
    requestTracker.set(ip, {
      count: 1,
      windowStart: currentTime,
    });
    return false; // Not limited.
  }

  // Increment the request count for the current window.
  record.count++;

  // Check if the request count exceeds the maximum allowed limit.
  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    console.warn(`[DDoS Protection] Rate limit exceeded for IP: ${ip}. Requests: ${record.count}/${MAX_REQUESTS_PER_WINDOW}`);
    return true; // Limited.
  }
  
  // Update the map with the new count.
  requestTracker.set(ip, record);
  return false; // Not limited.
};

export async function GET(req: NextRequest) {
  const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim();

  if (isRateLimited(ip)) {
    const record = requestTracker.get(ip)!;
    const retryAfter = Math.ceil((record.windowStart + TIME_WINDOW_SECONDS * 1000 - Date.now()) / 1000);

    return NextResponse.json(
      {
        message: 'Too many requests. You have been rate-limited.',
        errorCode: 'RATE_LIMIT_EXCEEDED',
        retryAfterSeconds: retryAfter > 0 ? retryAfter : 1,
      },
      { 
        status: 429, // 429 Too Many Requests is the standard status code.
        headers: {
          'Retry-After': String(retryAfter),
        },
      }
    );
  }

  // If not rate-limited, the request is considered safe by this layer.
  console.log(`[DDoS Protection] Request from ${ip} is within rate limits.`);
  return NextResponse.json(
    { 
      message: 'Request allowed.',
      status: 'PASSED_RATE_LIMIT',
    }, 
    { status: 200 }
  );
}