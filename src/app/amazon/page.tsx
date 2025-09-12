// // src/app/blog/page.tsx
// 'use client';
// import React, { useEffect } from 'react';

// export default function AmazonPage() {
//   useEffect(() => {
//     const t = setTimeout(() => {
//       window.location.replace('https://amazon.com');
//     }, 1200);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
//       <h1 style={{ marginBottom: 8 }}>Redirecting to the blog…</h1>
//       <p style={{ marginBottom: 12 }}>
//         If you are not forwarded automatically, <a href="https://amazon.com">click here</a>.
//       </p>
//       <small>Loading — this page ensures GoShield&apos;s security check runs before redirect.</small>
//       <noscript style={{ marginTop: 12 }}>
//         <p>JavaScript is disabled — <a href="https://amazon.com">open Amazon</a>.</p>
//       </noscript>
//     </main>
//   );
// }























// src/app/blog/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Bot, Zap, Check, Loader2 } from 'lucide-react';

// --- Configuration for the security checks ---
const securityChecks = [
  {
    id: 1,
    text: 'IP Blacklisting Check',
    icon: <Shield className="w-5 h-5 text-slate-400" />,
  },
  {
    id: 2,
    text: 'Bot Protection Analysis',
    icon: <Bot className="w-5 h-5 text-slate-400" />,
  },
  {
    id: 3,
    text: 'DDoS Mitigation Shield',
    icon: <Zap className="w-5 h-5 text-slate-400" />,
  },
];

// --- Main Page Component ---
export default function BlogPage() {
  const [activeCheckIndex, setActiveCheckIndex] = useState(0);

  useEffect(() => {
    const REAL_BLOG_URL = 'https://amazon.com';
    const totalChecks = securityChecks.length;

    if (activeCheckIndex >= totalChecks) {
      const redirectTimer = setTimeout(() => {
        window.location.replace(REAL_BLOG_URL);
      }, 1200);
      return () => clearTimeout(redirectTimer);
    }

    const checkTimer = setTimeout(() => {
      setActiveCheckIndex(activeCheckIndex + 1);
    }, 1500);

    return () => clearTimeout(checkTimer);
  }, [activeCheckIndex]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 antialiased">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Verifying Your Connection
          </h1>
          <p className="mt-2 text-slate-400">
            GoShield is running security checks to protect this site. Please wait a moment.
          </p>
        </div>

        {/* Animated Checks List */}
        <div className="mt-10 space-y-3">
          {securityChecks.map((check, index) => {
            const isPassed = activeCheckIndex > index;
            const isRunning = activeCheckIndex === index;
            
            if (activeCheckIndex < index) return null;

            return (
              <CheckItem
                key={check.id}
                icon={check.icon}
                text={check.text}
                status={isPassed ? 'passed' : isRunning ? 'running' : 'pending'}
              />
            );
          })}
        </div>

        {/* Final Redirect Message */}
        <AnimatePresence>
            {activeCheckIndex >= securityChecks.length && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-green-400 font-medium">
                      All checks passed. Redirecting now...
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <noscript>
        <div className="text-center mt-8 p-4 bg-yellow-900/50 text-yellow-300 border border-yellow-700 rounded-lg">
          <p>JavaScript is required for this security verification.</p>
          <p>
            Please enable it or <a href="https://amazon.com" className="underline font-bold">click here to proceed manually</a>.
          </p>
        </div>
      </noscript>
    </div>
  );
}

// --- Individual Check Item Component ---
const CheckItem = ({ icon, text, status }: { icon: React.ReactNode, text: string, status: string }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex items-center justify-between p-4 rounded-lg bg-slate-900 border border-slate-700/80"
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-medium text-slate-300">{text}</span>
      </div>
      <div className="w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {status === 'running' && (
            <motion.div
              key="running"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
            </motion.div>
          )}
          {status === 'passed' && (
            <motion.div
              key="passed"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Check className="w-6 h-6 text-green-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};