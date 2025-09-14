// // app/page.tsx
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Zap,
//   Globe,
//   Server,
//   Lock,
//   BarChart2,
//   Check,
//   ArrowRight,
// } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   Tooltip,
//   CartesianGrid,
//   XAxis,
//   YAxis,
// } from "recharts";

// // --- Data for the Demo Chart ---
// const attackData = [
//   { time: "22:00", "Total Traffic": 45, "Mitigated Traffic": 43 },
//   { time: "23:00", "Total Traffic": 52, "Mitigated Traffic": 50 },
//   { time: "00:00", "Total Traffic": 190, "Mitigated Traffic": 188 },
//   { time: "01:00", "Total Traffic": 240, "Mitigated Traffic": 240 },
//   { time: "02:00", "Total Traffic": 180, "Mitigated Traffic": 179 },
//   { time: "03:00", "Total Traffic": 80, "Mitigated Traffic": 78 },
//   { time: "04:00", "Total Traffic": 65, "Mitigated Traffic": 64 },
// ];

// // --- Protected websites data (comes from an object) ---
// const protectedSites = [
// {
// id: "syntax-void",
// name: "Syntax Void Blog Website",
// description: "A developer blog showcasing tutorials and deep dives.",
// url: "https://goshield-fe.vercel.app/blog",
// },
// {
// id: "amazon-clone",
// name: "Amazon Website",
// description: "High-traffic e-commerce demo to validate mitigations.",
// url: "https://goshield-fe.vercel.app/amazon",
// },
// {
// id: "sih-site",
// name: "Smart India Hackathon Website",
// description: "Event portal for SIH with public-facing services.",
// url: "https://goshield-fe.vercel.app/sih",
// },
// ];

// // --- Main Page Component ---
// export default function GoShieldLandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
//       <Header />
//       <main className="max-w-7xl mx-auto px-6">
//         <HeroSection />
//         <TrustedBySection />
//         {/* NEW: Protected Sites Section (data-driven) */}
//         <ProtectedSitesSection sites={protectedSites} />
//         <FeaturesSection />
//         <HowItWorksSection />
//         <PricingSection />
//         <FinalCTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // --- Section Components ---

// const Header = () => (
//   <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/5">
//     <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//       <div className="flex items-center gap-3 cursor-pointer">
//         <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg">
//           <ShieldCheck className="w-6 h-6 text-white" />
//         </div>
//         <div className="font-extrabold tracking-tight text-xl">GoShield</div>
//       </div>
//       <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
//         <a className="hover:text-white transition-colors">Product</a>
//         <a className="hover:text-white transition-colors">Solutions</a>
//         <a className="hover:text-white transition-colors">About Us</a>
//         <a className="hover:text-white transition-colors">Docs</a>
//       </nav>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 transition"
//       >
//         Request a Demo
//       </motion.button>
//     </div>
//   </header>
// );

// const HeroSection = () => (
//   <section className="py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="inline-flex items-center gap-2 text-sm rounded-full bg-white/5 px-4 py-2 text-indigo-300 border border-white/10">
//         <Zap className="w-4 h-4" />
//         Instant Deployment · Zero Infrastructure Changes
//       </div>
//       <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
//         Unbreachable DDoS Protection
//         <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-indigo-400 mt-2">
//           Built for Infinite Scale
//         </span>
//       </h1>
//       <p className="mt-6 text-lg text-slate-400 max-w-xl">
//         GoShield provides a plug-and-play mitigation layer that keeps your services online during any attack. Deployed in minutes, monitored 24/7, and trusted by mission-critical platforms worldwide.
//       </p>
//       <div className="mt-10 flex flex-wrap gap-4">
//         <motion.a
//           href="#pricing"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow-xl shadow-indigo-500/20 transition"
//         >
//           <ShieldCheck className="w-5 h-5" />
//           Activate Protection
//         </motion.a>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5 transition"
//         >
//           Contact Team <ArrowRight className="w-4 h-4" />
//         </motion.a>
//       </div>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//       className="relative"
//     >
//       <DashboardCard />
//       <div className="absolute -right-12 -bottom-12 w-60 h-60 rounded-full bg-gradient-to-tr from-indigo-700/40 to-teal-600/20 blur-3xl pointer-events-none" />
//     </motion.div>
//   </section>
// );

// const TrustedBySection = () => (
//   <section className="py-16 border-t border-b border-white/5 text-center">
//     <p className="text-sm text-slate-400 uppercase tracking-widest">
//       Trusted by mission-critical government and enterprise platforms
//     </p>
//     <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-slate-500 font-medium">
//       <span>GovPortal</span>
//       <span>QuantumLeap</span>
//       <span>AetherBank</span>
//       <span>Nexus Corp</span>
//       <span>CloudX</span>
//     </div>
//   </section>
// );




// // --- NEW SECTION: Protected Sites (data-driven) ---

// function ProtectedSitesSection({
//   sites,
// }: {
//   sites: { id: string; name: string; description: string; url: string }[];
// }) {
//   return (
//     <section className="py-16">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h3 className="text-xl font-semibold">Protected Websites</h3>
//             <p className="text-slate-400 text-sm mt-1">
//               Live examples of sites currently protected by GoShield (opens in a new tab).
//             </p>
//           </div>
//           <div className="text-sm text-slate-400">
//             Total: <span className="text-white font-semibold">{sites.length}</span>
//           </div>
//         </div>

//         {/* Vertical stack: single column, full-width cards */}
//         <div className="flex flex-col gap-6">
//           {sites.map((s) => (
//             <motion.div
//               key={s.id}
//               whileHover={{ y: -6, scale: 1.01 }}
//               className="rounded-xl p-6 bg-slate-900/50 border border-white/10 shadow-lg flex flex-col w-full"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
//                   {s.name.charAt(0)}
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-slate-100">{s.name}</div>
//                   <div className="text-sm text-slate-400 mt-1">{s.description}</div>
//                 </div>
//               </div>

//               {/* Actions: keep status on the left and the button anchored to the right */}
//               <div className="mt-6 flex items-center justify-between gap-4">
//                 <div className="text-xs text-slate-400">Live • Protected</div>

//                 {/* Ensure button sits on the right for visual balance */}
//                 <a
//                   href={s.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium ml-auto"
//                 >
//                   Open Site
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






// const FeaturesSection = () => (
//   <section className="py-24">
//     <div className="text-center max-w-3xl mx-auto">
//       <h2 className="text-4xl font-extrabold tracking-tight">The GoShield Advantage</h2>
//       <p className="mt-4 text-slate-400">
//         Our platform is engineered for ultimate resilience, providing a suite of powerful, integrated features that ensure your services remain online, performant, and secure.
//       </p>
//     </div>
//     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       <FeatureCard
//         icon={<Globe className="w-7 h-7" />}
//         title="Global Anycast Network"
//         desc="With 300+ PoPs, we absorb the largest attacks at the edge, ensuring low latency and instant failover."
//       />
//       <FeatureCard
//         icon={<Lock className="w-7 h-7" />}
//         title="AI-Powered Mitigation"
//         desc="Our machine learning engine analyzes traffic in real-time to distinguish legitimate users from bad actors with surgical precision."
//       />
//       <FeatureCard
//         icon={<BarChart2 className="w-7 h-7" />}
//         title="Real-time Analytics"
//         desc="Gain deep visibility with our live dashboard, forensic logs, and 24/7 SOC alerts for any anomaly."
//       />
//     </div>
//   </section>
// );

// const HowItWorksSection = () => (
//   <section className="py-24 rounded-2xl">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//       <div>
//         <h2 className="text-4xl font-extrabold tracking-tight">Onboard in Minutes, Protected Forever</h2>
//         <p className="mt-4 text-slate-400">
//           Deploying GoShield is seamless. A single DNS change is all it takes to route your traffic through our global scrubbing network. No hardware, no complex configurations.
//         </p>
//         <div className="mt-8 space-y-6">
//           <Step num={1} title="Connect Your Asset" desc="Update your DNS records. Our system automatically detects and onboard your infrastructure." />
//           <Step num={2} title="Analyze & Detect" desc="Our platform inspects all incoming traffic, using telemetry to identify malicious patterns in seconds." />
//           <Step num={3} title="Mitigate & Forward" desc="Malicious traffic is instantly blocked at the edge, while clean, legitimate traffic is forwarded to your origin servers without delay." />
//         </div>
//       </div>
//       <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900/50 p-6 rounded-xl border border-white/10 shadow-lg">
//         <p className="text-sm font-medium text-slate-300">Live Attack Log</p>
//         <div className="mt-4 space-y-3">
//           {[
//             { title: "Volumetric UDP Flood", mitigated: "240 Gbps", time: "01:14 UTC" },
//             { title: "SYN/ACK Amplification", mitigated: "88 Gbps", time: "00:52 UTC" },
//             { title: "HTTP Layer 7 Flood", mitigated: "9.2M rps", time: "00:31 UTC" },
//           ].map((a) => (
//             <div key={a.time} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg">
//               <div>
//                 <div className="font-medium text-slate-200">{a.title}</div>
//                 <div className="text-xs text-slate-400">{a.time}</div>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm font-semibold text-teal-300">{a.mitigated}</div>
//                 <div className="text-xs text-slate-400">Mitigated</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// const PricingSection = () => (
//   <section className="py-24">
//     <div className="text-center max-w-3xl mx-auto">
//       <h2 className="text-4xl font-extrabold tracking-tight">Suitable For Every Organization</h2>
//       <p className="mt-4 text-slate-400">
//         From startups to government agencies, get enterprise-grade protection with clear SLAs and dedicated support.
//       </p>
//     </div>
//     <div id="pricing" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       <PricingCard tier="MSME" price="Custom" features={["Plug & Play Setup", "Up to 50 Gbps Protection", "Email & Chat Support", "Basic Analytics"]} />
//       <PricingCard tier="Enterprise" price="Contact" features={["Guaranteed SLA 99.999%", "Unlimited L3/4/7 Scrubbing", "Dedicated SOC Engineer", "Advanced SIEM Integration", "24/7 Phone Support"]} highlight={true} />
//       <PricingCard tier="Government" price="Procurement" features={["FedRAMP / FIPS Compliant", "On-Premise Connector Option", "Full Audit Logs & Reporting", "Geofencing & Data Sovereignty"]} />
//     </div>
//   </section>
// );

// const FinalCTASection = () => (
//   <section id="contact" className="my-24 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-indigo-700/40 to-violet-900/30 border border-white/10 shadow-2xl">
//     <div className="md:flex items-center justify-between gap-8 text-center md:text-left">
//       <div>
//         <h3 className="text-3xl font-extrabold">Ready to Secure Your Infrastructure?</h3>
//         <p className="mt-2 text-slate-300 max-w-2xl">
//           Book a demo to see GoShield in action, or connect with our team for compliance and procurement needs.
//         </p>
//       </div>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-6 md:mt-0 flex-shrink-0 rounded-lg px-6 py-3 bg-indigo-600 font-semibold shadow-lg hover:bg-indigo-500 transition-colors"
//       >
//         Talk to an Expert
//       </motion.button>
//     </div>
//   </section>
// );

// const Footer = () => (
//   <footer className="border-t border-white/5 pt-12 pb-8">
//     <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center">
//           <ShieldCheck className="w-5 h-5 text-white" />
//         </div>
//         <div className="text-slate-200 font-semibold">
//           GoShield <span className="text-xs text-slate-500 ml-2">© {new Date().getFullYear()} GoShield Inc.</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-6 text-sm text-slate-400">
//         <a className="hover:text-white transition-colors">Privacy Policy</a>
//         <a className="hover:text-white transition-colors">Terms of Service</a>
//         <a className="hover:text-white transition-colors">Status</a>
//       </div>
//     </div>
//   </footer>
// );

// // --- Helper Components ---

// const DashboardCard = () => (
//   <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-slate-700/40 to-slate-900/50 border border-white/10 shadow-2xl backdrop-blur-lg">
//     <div className="flex items-start justify-between gap-4">
//       <div>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
//             <Server className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <div className="text-sm text-slate-300">Protected Asset</div>
//             <div className="font-semibold text-slate-100">api.goshield.com</div>
//           </div>
//         </div>
//       </div>
//       <div className="text-right">
//         <div className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
//           Active Protection
//         </div>
//       </div>
//     </div>
//     <div className="mt-4 w-full h-48">
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={attackData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
//           <defs>
//             <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6} />
//               <stop offset="95%" stopColor="#a855f7" stopOpacity={0.05} />
//             </linearGradient>
//             <linearGradient id="colorMitigated" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
//               <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="time" tick={{ fill: "#94a3b8", fontSize: 12 }} stroke="#334155" />
//           <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} stroke="#334155" unit=" G" />
//           <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
//           <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "0.5rem" }} />
//           <Area type="monotone" dataKey="Total Traffic" stroke="#a855f7" fillOpacity={1} fill="url(#colorTotal)" />
//           <Area type="monotone" dataKey="Mitigated Traffic" stroke="#22d3ee" fillOpacity={1} fill="url(#colorMitigated)" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// );

// function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.02 }}
//       className="rounded-2xl p-6 bg-slate-900/50 border border-white/10 shadow-lg cursor-pointer"
//     >
//       <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white flex items-center justify-center mb-4">
//         {icon}
//       </div>
//       <h3 className="font-bold text-lg text-slate-100">{title}</h3>
//       <p className="text-sm text-slate-400 mt-2">{desc}</p>
//     </motion.div>
//   );
// }

// function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
//   return (
//     <div className="flex items-start gap-4">
//       <div className="w-9 h-9 flex-shrink-0 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white border-2 border-indigo-500/50">
//         {num}
//       </div>
//       <div>
//         <h4 className="font-semibold text-slate-100">{title}</h4>
//         <p className="text-sm text-slate-400">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function PricingCard({ tier, price, features, highlight }: { tier: string; price: string; features: string[]; highlight?: boolean }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, y: -5 }}
//       className={`rounded-2xl p-8 border ${highlight ? "bg-indigo-900/30 border-indigo-500 shadow-2xl shadow-indigo-500/10" : "bg-slate-900/50 border-white/10"}`}
//     >
//       <h4 className={`font-semibold text-lg ${highlight ? "text-indigo-300" : "text-slate-300"}`}>{tier}</h4>
//       <p className="text-3xl font-bold mt-2 text-white">{price}</p>
//       <ul className="mt-8 space-y-4">
//         {features.map((f) => (
//           <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
//             <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
//             <span>{f}</span>
//           </li>
//         ))}
//       </ul>
//       <button className={`w-full rounded-lg py-3 mt-10 font-semibold transition-colors ${highlight ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-slate-800 hover:bg-slate-700"}`}>
//         {tier === "Enterprise" ? "Contact Team" : "Get Started"}
//       </button>
//     </motion.div>
//   );
// }
































// app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe as GlobeIcon,
  Server,
  Lock,
  BarChart2,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import Globe from "../../globe"; // <-- expects file at /globe.tsx
import ProtectedContent from "./components/ProtectedComponent";

// --- Data for the Demo Chart ---
const attackData = [
  { time: "22:00", "Total Traffic": 45, "Mitigated Traffic": 43 },
  { time: "23:00", "Total Traffic": 52, "Mitigated Traffic": 50 },
  { time: "00:00", "Total Traffic": 190, "Mitigated Traffic": 188 },
  { time: "01:00", "Total Traffic": 240, "Mitigated Traffic": 240 },
  { time: "02:00", "Total Traffic": 180, "Mitigated Traffic": 179 },
  { time: "03:00", "Total Traffic": 80, "Mitigated Traffic": 78 },
  { time: "04:00", "Total Traffic": 65, "Mitigated Traffic": 64 },
];

// --- Protected websites data (comes from an object) ---
const protectedSites = [
  {
    id: "syntax-void",
    name: "Syntax Void Blog Website",
    description: "A developer blog showcasing tutorials and deep dives.",
    url: "https://goshield-fe.vercel.app/blog",
  },
  {
    id: "amazon-clone",
    name: "Amazon Website",
    description: "High-traffic e-commerce demo to validate mitigations.",
    url: "https://goshield-fe.vercel.app/amazon",
  },
  {
    id: "sih-site",
    name: "Smart India Hackathon Website",
    description: "Event portal for SIH with public-facing services.",
    url: "https://goshield-fe.vercel.app/sih",
  },
  {
    id: "drdo-site",
    name: "DRDO Website",
    description: "Event portal for SIH with public-facing services.",
    url: "https://goshield-fe.vercel.app/drdo",
  },
];

// --- Main Page Component ---
export default function GoShieldLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <TrustedBySection />
        <ProtectedSitesSection sites={protectedSites} />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FinalCTASection />
        <div className="mt-16">
          {/* Place globe where you want it */}
          <Globe />
        </div>
        <ProtectedContent />
      </main>
      <Footer />
    </div>
  );
}

// --- Section Components ---

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <div className="font-extrabold tracking-tight text-xl">GoShield</div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a className="hover:text-white transition-colors">Product</a>
        <a className="hover:text-white transition-colors">Solutions</a>
        <a className="hover:text-white transition-colors">About Us</a>
        <a className="hover:text-white transition-colors">Docs</a>
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 transition"
      >
        Request a Demo
      </motion.button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 text-sm rounded-full bg-white/5 px-4 py-2 text-indigo-300 border border-white/10">
        <Zap className="w-4 h-4" />
        Instant Deployment · Zero Infrastructure Changes
      </div>
      <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
        Unbreachable DDoS Protection
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-indigo-400 mt-2">
          Built for Infinite Scale
        </span>
      </h1>
      <p className="mt-6 text-lg text-slate-400 max-w-xl">
        GoShield provides a plug-and-play mitigation layer that keeps your services online during any attack. Deployed in minutes, monitored 24/7, and trusted by mission-critical platforms worldwide.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow-xl shadow-indigo-500/20 transition"
        >
          <ShieldCheck className="w-5 h-5" />
          Activate Protection
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5 transition"
        >
          Contact Team <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <DashboardCard />
      <div className="absolute -right-12 -bottom-12 w-60 h-60 rounded-full bg-gradient-to-tr from-indigo-700/40 to-teal-600/20 blur-3xl pointer-events-none" />
    </motion.div>
  </section>
);

const TrustedBySection = () => (
  <section className="py-16 border-t border-b border-white/5 text-center">
    <p className="text-sm text-slate-400 uppercase tracking-widest">
      Trusted by mission-critical government and enterprise platforms
    </p>
    <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-slate-500 font-medium">
      <span>GovPortal</span>
      <span>QuantumLeap</span>
      <span>AetherBank</span>
      <span>Nexus Corp</span>
      <span>CloudX</span>
    </div>
  </section>
);

// --- NEW SECTION: Protected Sites (data-driven) ---

function ProtectedSitesSection({
  sites,
}: {
  sites: { id: string; name: string; description: string; url: string }[];
}) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold">Protected Websites</h3>
            <p className="text-slate-400 text-sm mt-1">
              Live examples of sites currently protected by GoShield (opens in a new tab).
            </p>
          </div>
          <div className="text-sm text-slate-400">
            Total: <span className="text-white font-semibold">{sites.length}</span>
          </div>
        </div>

        {/* Vertical stack: single column, full-width cards */}
        <div className="flex flex-col gap-6">
          {sites.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-xl p-6 bg-slate-900/50 border border-white/10 shadow-lg flex flex-col w-full"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  {s.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-100">{s.name}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.description}</div>
                </div>
              </div>

              {/* Actions: keep status on the left and the button anchored to the right */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-400">Live • Protected</div>

                {/* Ensure button sits on the right for visual balance */}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium ml-auto"
                >
                  Open Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FeaturesSection = () => (
  <section className="py-24">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold tracking-tight">The GoShield Advantage</h2>
      <p className="mt-4 text-slate-400">
        Our platform is engineered for ultimate resilience, providing a suite of powerful, integrated features that ensure your services remain online, performant, and secure.
      </p>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<GlobeIcon className="w-7 h-7" />}
        title="Global Anycast Network"
        desc="With 300+ PoPs, we absorb the largest attacks at the edge, ensuring low latency and instant failover."
      />
      <FeatureCard
        icon={<Lock className="w-7 h-7" />}
        title="AI-Powered Mitigation"
        desc="Our machine learning engine analyzes traffic in real-time to distinguish legitimate users from bad actors with surgical precision."
      />
      <FeatureCard
        icon={<BarChart2 className="w-7 h-7" />}
        title="Real-time Analytics"
        desc="Gain deep visibility with our live dashboard, forensic logs, and 24/7 SOC alerts for any anomaly."
      />
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-24 rounded-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight">Onboard in Minutes, Protected Forever</h2>
        <p className="mt-4 text-slate-400">
          Deploying GoShield is seamless. A single DNS change is all it takes to route your traffic through our global scrubbing network. No hardware, no complex configurations.
        </p>
        <div className="mt-8 space-y-6">
          <Step num={1} title="Connect Your Asset" desc="Update your DNS records. Our system automatically detects and onboard your infrastructure." />
          <Step num={2} title="Analyze & Detect" desc="Our platform inspects all incoming traffic, using telemetry to identify malicious patterns in seconds." />
          <Step num={3} title="Mitigate & Forward" desc="Malicious traffic is instantly blocked at the edge, while clean, legitimate traffic is forwarded to your origin servers without delay." />
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900/50 p-6 rounded-xl border border-white/10 shadow-lg">
        <p className="text-sm font-medium text-slate-300">Live Attack Log</p>
        <div className="mt-4 space-y-3">
          {[
            { title: "Volumetric UDP Flood", mitigated: "240 Gbps", time: "01:14 UTC" },
            { title: "SYN/ACK Amplification", mitigated: "88 Gbps", time: "00:52 UTC" },
            { title: "HTTP Layer 7 Flood", mitigated: "9.2M rps", time: "00:31 UTC" },
          ].map((a) => (
            <div key={a.time} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg">
              <div>
                <div className="font-medium text-slate-200">{a.title}</div>
                <div className="text-xs text-slate-400">{a.time}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-teal-300">{a.mitigated}</div>
                <div className="text-xs text-slate-400">Mitigated</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-24">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold tracking-tight">Suitable For Every Organization</h2>
      <p className="mt-4 text-slate-400">
        From startups to government agencies, get enterprise-grade protection with clear SLAs and dedicated support.
      </p>
    </div>
    <div id="pricing" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <PricingCard tier="MSME" price="Custom" features={["Plug & Play Setup", "Up to 50 Gbps Protection", "Email & Chat Support", "Basic Analytics"]} />
      <PricingCard tier="Enterprise" price="Contact" features={["Guaranteed SLA 99.999%", "Unlimited L3/4/7 Scrubbing", "Dedicated SOC Engineer", "Advanced SIEM Integration", "24/7 Phone Support"]} highlight={true} />
      <PricingCard tier="Government" price="Procurement" features={["FedRAMP / FIPS Compliant", "On-Premise Connector Option", "Full Audit Logs & Reporting", "Geofencing & Data Sovereignty"]} />
    </div>
  </section>
);

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

const Footer = () => (
  <footer className="border-t border-white/5 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div className="text-slate-200 font-semibold">
          GoShield <span className="text-xs text-slate-500 ml-2">© {new Date().getFullYear()} GoShield Inc.</span>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm text-slate-400">
        <a className="hover:text-white transition-colors">Privacy Policy</a>
        <a className="hover:text-white transition-colors">Terms of Service</a>
        <a className="hover:text-white transition-colors">Status</a>
      </div>
    </div>
  </footer>
);

// --- Helper Components ---

const DashboardCard = () => (
  <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-slate-700/40 to-slate-900/50 border border-white/10 shadow-2xl backdrop-blur-lg">
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
            <Server className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm text-slate-300">Protected Asset</div>
            <div className="font-semibold text-slate-100">api.goshield.com</div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
          Active Protection
        </div>
      </div>
    </div>
    <div className="mt-4 w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={attackData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorMitigated" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tick={{ fill: "#94a3b8", fontSize: 12 }} stroke="#334155" />
          <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} stroke="#334155" unit=" G" />
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "0.5rem" }} />
          <Area type="monotone" dataKey="Total Traffic" stroke="#a855f7" fillOpacity={1} fill="url(#colorTotal)" />
          <Area type="monotone" dataKey="Mitigated Traffic" stroke="#22d3ee" fillOpacity={1} fill="url(#colorMitigated)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-2xl p-6 bg-slate-900/50 border border-white/10 shadow-lg cursor-pointer"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </motion.div>
  );
}

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 flex-shrink-0 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white border-2 border-indigo-500/50">
        {num}
      </div>
      <div>
        <h4 className="font-semibold text-slate-100">{title}</h4>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ tier, price, features, highlight }: { tier: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`rounded-2xl p-8 border ${highlight ? "bg-indigo-900/30 border-indigo-500 shadow-2xl shadow-indigo-500/10" : "bg-slate-900/50 border-white/10"}`}
    >
      <h4 className={`font-semibold text-lg ${highlight ? "text-indigo-300" : "text-slate-300"}`}>{tier}</h4>
      <p className="text-3xl font-bold mt-2 text-white">{price}</p>
      <ul className="mt-8 space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
            <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full rounded-lg py-3 mt-10 font-semibold transition-colors ${highlight ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-slate-800 hover:bg-slate-700"}`}>
        {tier === "Enterprise" ? "Contact Team" : "Get Started"}
      </button>
    </motion.div>
  );
}

