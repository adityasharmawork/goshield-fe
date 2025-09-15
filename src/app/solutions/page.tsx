"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ShoppingCart,
  Landmark,
  Server,
  Gamepad2,
  Layers,
  Globe,
  Zap,
} from "lucide-react";

// In a real app, this would be imported from a shared components file
const FinalCTASection = () => (
  <section id="contact" className="my-24 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-indigo-700/40 to-violet-900/30 border border-white/10 shadow-2xl">
    <div className="md:flex items-center justify-between gap-8 text-center md:text-left">
      <div>
        <h3 className="text-3xl font-extrabold">Ready to Secure Your Infrastructure?</h3>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Book a demo to see GoShield in action, or connect with our team for compliance and procurement needs.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 md:mt-0 flex-shrink-0 rounded-lg px-6 py-3 bg-indigo-600 font-semibold shadow-lg hover:bg-indigo-500 transition-colors"
      >
        Talk to an Expert
      </motion.button>
    </div>
  </section>
);


export default function SolutionsPage() {
  const solutions = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce & Retail",
      description: "Ensure your storefront is always online, protecting against revenue loss from downtime, especially during peak sales events like Black Friday.",
      benefits: ["Prevent cart abandonment", "Maintain customer trust", "Ensure payment gateway availability"],
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Government & Public Sector",
      description: "Secure critical digital infrastructure and public-facing services. Our solutions meet stringent compliance standards for data sovereignty and security.",
      benefits: ["Protect sensitive citizen data", "Ensure service continuity", "FedRAMP / FIPS Compliant options"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "SaaS & API Platforms",
      description: "Guarantee high availability for your services. GoShield protects your platform's API endpoints and web applications from attacks that could impact all your customers.",
      benefits: ["Uphold SLA commitments", "Prevent customer churn", "Protect backend infrastructure"],
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Online Gaming",
      description: "Maintain a fair and stable gaming environment. We mitigate attacks designed to cause latency, lag spikes, or disconnect players from your game servers.",
      benefits: ["Ensure low-latency gameplay", "Protect player experience", "Prevent server-targeted attacks"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          Tailored Protection for Every Industry
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          GoShield provides specialized, enterprise-grade DDoS mitigation designed to meet the unique security challenges of your sector.
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, i) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col"
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white flex items-center justify-center mb-5">
              {solution.icon}
            </div>
            <h2 className="text-xl font-bold mb-3">{solution.title}</h2>
            <p className="text-slate-400 mb-6 flex-grow">{solution.description}</p>
            <ul className="space-y-3">
                {solution.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-slate-300">
                        <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Full-Spectrum Protection Section */}
      <div className="py-24">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight">Full-Spectrum Protection</h2>
            <p className="mt-4 text-slate-400">
                From massive volumetric floods to sophisticated application-layer attacks, our platform provides comprehensive defense across all network layers.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                <Layers className="w-10 h-10 mx-auto text-indigo-400 mb-4" />
                <h3 className="font-bold text-lg">Network Layer (L3/L4)</h3>
                <p className="text-sm text-slate-400 mt-2">Absorbs massive UDP/ICMP floods and SYN attacks at the edge before they reach your network.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                <Zap className="w-10 h-10 mx-auto text-indigo-400 mb-4" />
                <h3 className="font-bold text-lg">Application Layer (L7)</h3>
                <p className="text-sm text-slate-400 mt-2">Intelligently mitigates complex HTTP floods, API abuse, and bot attacks without impacting legitimate users.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                <Globe className="w-10 h-10 mx-auto text-indigo-400 mb-4" />
                <h3 className="font-bold text-lg">Global Anycast Network</h3>
                <p className="text-sm text-slate-400 mt-2">With 300+ PoPs, traffic is routed to the nearest scrubbing center, ensuring low latency and instant attack absorption.</p>
            </div>
        </div>
      </div>

      <FinalCTASection />
    </div>
  );
}
