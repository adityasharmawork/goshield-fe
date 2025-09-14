'use client';

import { useState, useEffect } from 'react';

/**
 * A dummy function to simulate a user solving a CAPTCHA.
 * In a real app, this would be an integration with a service like hCaptcha/reCAPTCHA,
 * which would provide a real token upon user completion.
 */
const getCaptchaToken = async (): Promise<string> => {
  console.log('Simulating CAPTCHA challenge...');
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate user solving time
  return `valid-token-${Date.now()}`;
};


export default function ProtectedContent() {
  const [status, setStatus] = useState('Verifying connection...');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runSecurityChecks = async () => {
      try {
        // --- Layer 1: IP Blacklist Check ---
        setStatus('Layer 1: Verifying your IP address...');
        const ipCheckResponse = await fetch('/api/security/v1/ip-blacklisting', { method: 'POST' });
        if (!ipCheckResponse.ok) {
          const result = await ipCheckResponse.json();
          throw new Error(result.message || 'IP Blacklist check failed.');
        }

        // --- Layer 2: Bot Protection Check ---
        setStatus('Layer 2: Please complete the security challenge...');
        const token = await getCaptchaToken(); // User solves CAPTCHA
        
        setStatus('Layer 2: Verifying challenge...');
        const botCheckResponse = await fetch('/api/security/v1/bot-protection', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ challengeToken: token }),
        });
        if (!botCheckResponse.ok) {
          const result = await botCheckResponse.json();
          throw new Error(result.message || 'Bot protection check failed.');
        }
        
        // --- All Checks Passed ---
        // The DDoS check happens automatically on the server for every request,
        // so we don't need to call it explicitly here.
        setStatus('All security checks passed. Access granted.');
        setIsVerified(true);

      } catch (err: any) {
        setError(err.message);
        setStatus('Access Denied');
      }
    };

    runSecurityChecks();
  }, []); // The empty dependency array ensures this runs only once on mount.

  if (error) {
    return (
      <div style={{ color: 'red', border: '1px solid red', padding: '1rem' }}>
        <h2>🚫 Access Denied</h2>
        <p><strong>Reason:</strong> {error}</p>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div>
        <h2>🛡️ Securing Your Session...</h2>
        <p>Status: {status}</p>
        {/* You can add a loading spinner here */}
      </div>
    );
  }

  // --- Render the actual protected content once verified ---
  return (
    <div>
      <h1>✅ Welcome, Verified User!</h1>
      <p>This is the sensitive content you are now allowed to see.</p>
    </div>
  );
}