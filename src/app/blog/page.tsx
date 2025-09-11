// app/blog/page.js
'use client';

import { useEffect } from 'react';

export default function BlogRedirectPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      // after a short delay (gives Vercel challenge a chance to run),
      // navigate to the external blog
      window.location.replace('https://syntax-void.onrender.com');
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{minHeight:'60vh',display:'grid',placeItems:'center',textAlign:'center',padding:24}}>
      <h1 style={{marginBottom:8}}>Redirecting to the blog…</h1>
      <p style={{marginBottom:12}}>If you are not forwarded automatically, <a href="https://syntax-void.onrender.com">click here</a>.</p>
      <small>Loading — this page ensures GoShield's security check runs before redirect.</small>
    </main>
  );
}
