import { NextRequest, NextResponse } from 'next/server';

/**
 * A curated set of known malicious IP addresses and ranges.
 * In a real-world scenario, this list would be dynamically updated from a threat intelligence feed
 * or a centralized security database.
 * For this example, we're using a static set of well-known malicious IPs.
 */
const IP_BLACKLIST = new Set([
  '192.168.1.101', // Example: Internal IP flagged for suspicious activity
  '203.0.113.55',  // Example: Known C&C server
  '198.51.100.12', // Example: Previously involved in SQL injection attacks
  '104.28.1.137',  // Example: Associated with spam botnets
]);

export async function POST(req: NextRequest) {
  // Extract the IP address from the request headers.
  // We check 'x-forwarded-for' for proxies, otherwise fall back to the remote address.
  const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim();

  // Log the check for monitoring and security auditing purposes.
  console.log(`[IP Blacklist Check] Validating IP: ${ip}`);

  if (IP_BLACKLIST.has(ip)) {
    // If the IP is found in our blacklist, deny the request immediately.
    console.warn(`[SECURITY ALERT] Denied blacklisted IP: ${ip}`);
    return NextResponse.json(
      { 
        message: 'Access Denied. Your IP address has been flagged for security reasons.',
        errorCode: 'IP_BLACKLISTED',
        ip: ip,
      }, 
      { status: 403 } // 403 Forbidden is the appropriate status code.
    );
  }

  // If the IP is not blacklisted, allow the request to proceed to the next layer.
  console.log(`[IP Blacklist Check] IP ${ip} cleared.`);
  return NextResponse.json(
    { 
      message: 'IP verification successful.',
      status: 'ALLOWED',
    }, 
    { status: 200 }
  );
}