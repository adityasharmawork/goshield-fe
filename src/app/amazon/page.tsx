// src/app/blog/page.tsx
'use client';
import React, { useEffect } from 'react';

export default function AmazonPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.replace('https://amazon.com');
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Redirecting to the blog…</h1>
      <p style={{ marginBottom: 12 }}>
        If you are not forwarded automatically, <a href="https://amazon.com">click here</a>.
      </p>
      <small>Loading — this page ensures Vercel&apos;s security check runs before redirect.</small>
      <noscript style={{ marginTop: 12 }}>
        <p>JavaScript is disabled — <a href="https://amazon.com">open Amazon</a>.</p>
      </noscript>
    </main>
  );
}
