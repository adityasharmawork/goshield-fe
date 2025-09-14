"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe as GlobeIcon,
  Users,
  Award,
  Check,
  ArrowRight,
  Lock,
  BarChart2,
  Server,
} from "lucide-react";
// Globe component not found in this repo at ../../globe — using an inline placeholder here to prevent build errors.
const Globe = () => (
  <div className="w-full h-64 rounded-2xl bg-gradient-to-r from-indigo-700/20 to-teal-600/10 border border-white/6 flex items-center justify-center text-slate-400">
    Globe placeholder — replace with your actual Globe component or correct import path (e.g. import Globe from '@/components/Globe')
  </div>
);

// --- About Page (single-file, matches landing layout but more professional) ---
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <Hero />

        <MissionValues />

        <WhoWeAre />

        <TeamSection />

        <ImpactStats />

        <Timeline />

        <FAQSection />

        <FinalCTASection />

        <div className="mt-12">
          <Globe />
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ---------- Header & Footer (keeps look consistent with landing page) ----------
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
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <a href="/about" className="text-white font-semibold">About</a>
        <a href="/docs" className="hover:text-white transition-colors">Docs</a>
        <a href="/status" className="hover:text-white transition-colors">Status</a>
      </nav>
      <motion.div whileHover={{ scale: 1.03 }} className="hidden md:inline-flex">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 transition"
        >
          Request a Demo
        </a>
      </motion.div>
    </div>
  </header>
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

// ---------- Sections ----------
const Hero = () => (
  <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div>
      <div className="inline-flex items-center gap-2 text-sm rounded-full bg-white/5 px-4 py-2 text-indigo-300 border border-white/10">
        <Zap className="w-4 h-4" />
        Trusted by governments & enterprises
      </div>

      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
        About GoShield
        <span className="block mt-2 text-indigo-300 text-lg font-semibold">We defend critical services from DDoS and internet threats.</span>
      </h1>

      <p className="mt-6 text-lg text-slate-400 max-w-xl">
        Founded by security engineers, GoShield combines a global anycast network with AI-driven detection to keep your services available and compliant. We partner with public sector agencies and large enterprises to deliver resilient, auditable protection.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#team" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white shadow-xl transition">
          Meet the Team
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5 transition">
          Contact Sales <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>

    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
      <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-700/40 to-slate-900/50 border border-white/10 shadow-2xl backdrop-blur-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-300">Company</div>
                <div className="font-semibold text-slate-100">GoShield Inc.</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">Operational</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          <p>
            We run a global network of scrubbing centers and provide mission-critical SOC support. Our engineering-first culture focuses on reliability, privacy, and measurable outcomes for customers.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <StatCard label="PoPs" value="300+" icon={<GlobeIcon className="w-5 h-5" />} />
          <StatCard label="Avg. SLA" value="99.999%" icon={<Award className="w-5 h-5" />} />
        </div>
      </div>
    </motion.div>
  </section>
);

function StatCard({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg bg-slate-900/40 border border-white/6 flex items-center gap-4">
      <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white">{icon}</div>
      <div>
        <div className="text-sm text-slate-400">{label}</div>
        <div className="font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

const MissionValues = () => (
  <section className="py-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-slate-900/50 border border-white/10">
        <h3 className="text-lg font-semibold">Our Mission</h3>
        <p className="mt-2 text-slate-400 text-sm">To keep critical online services available, private, and performant — even under the largest attacks.</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Rapid onboarding</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Transparent forensic logs</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Privacy-preserving telemetry</li>
        </ul>
      </motion.div>

      <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-slate-900/50 border border-white/10">
        <h3 className="text-lg font-semibold">Core Values</h3>
        <p className="mt-2 text-slate-400 text-sm">Engineering rigor, customer empathy, and security-first thinking guide every decision we make.</p>
        <ol className="mt-4 space-y-2 text-sm text-slate-300 list-decimal list-inside">
          <li>Reliability above all</li>
          <li>Explainable detection</li>
          <li>Compliance-first delivery</li>
        </ol>
      </motion.div>

      <motion.div whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-slate-900/50 border border-white/10">
        <h3 className="text-lg font-semibold">What Sets Us Apart</h3>
        <p className="mt-2 text-slate-400 text-sm">A SOC-led approach, on-call engineers, and the ability to tune mitigations for low false-positive impact on customers.
        </p>
      </motion.div>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section className="py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-extrabold">Who we are</h3>
        <p className="mt-4 text-slate-400">We are operators, engineers, and analysts who have spent decades running resilient systems at scale. Our team has experience across national CERTs, hyperscale cloud providers, and telecom networks.</p>

        <ul className="mt-6 space-y-3 text-sm text-slate-300">
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Rapid incident response playbooks</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Custom mitigation signatures</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-teal-400 mt-1" /> Compliance & audit assistance</li>
        </ul>
      </div>

      <div className="rounded-2xl p-6 bg-slate-900/40 border border-white/6">
        <h4 className="text-sm font-medium text-slate-300">Approach</h4>
        <p className="mt-2 text-slate-400 text-sm">We operate a safety-first mitigation pipeline that prefers minimal impact on legitimate users while surgically blocking attack traffic at the edge.</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg">
            <div>
              <div className="text-sm font-medium text-slate-200">Telemetry & ML</div>
              <div className="text-xs text-slate-400">Behavioral models + signatures</div>
            </div>
            <div className="text-sm text-teal-300 font-semibold">Real-time</div>
          </div>

          <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg">
            <div>
              <div className="text-sm font-medium text-slate-200">Human-in-the-loop</div>
              <div className="text-xs text-slate-400">SOC review & overrides</div>
            </div>
            <div className="text-sm text-teal-300 font-semibold">24/7</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Team ----------
const TeamSection = () => {
  const team = [
    { name: "Priya Nair", role: "CTO — Head of Detection", bio: "Former SRE at a hyperscaler. Focus: ML-based anomaly detection." },
    { name: "Arjun Verma", role: "Head of SOC", bio: "Ex-national CERT operator; incident response & playbooks." },
    { name: "Meera Singh", role: "VP, Product", bio: "Built observability and mitigation controls at scale." },
    { name: "Ravi Patel", role: "Lead Network Engineer", bio: "Built large-scale anycast networks and edge routing." },
  ];

  return (
    <section id="team" className="py-12">
      <div className="text-center">
        <h3 className="text-3xl font-extrabold">Leadership</h3>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">The team that builds and runs GoShield. Experienced operators backed by rigorous engineering.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <motion.div key={m.name} whileHover={{ y: -6 }} className="rounded-2xl p-6 bg-slate-900/50 border border-white/6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">{m.name.split(" ")[0].charAt(0)}</div>
              <div>
                <div className="font-semibold text-slate-100">{m.name}</div>
                <div className="text-xs text-slate-400">{m.role}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300">{m.bio}</p>
            <div className="mt-4 text-sm">
              <a className="inline-flex items-center gap-2 text-indigo-300 hover:underline">View profile</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ImpactStats = () => (
  <section className="py-12">
    <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-700/20 to-violet-900/10 border border-white/6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-2xl font-extrabold">Impact</h4>
          <p className="mt-2 text-slate-400">Numbers that show why customers choose us.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl">
          <ImpactItem label="Attacks Mitigated (last 30d)" value="1,243" />
          <ImpactItem label="Peak Mitigation" value="240 Gbps" />
          <ImpactItem label="Avg. MTTR" value="11 min" />
          <ImpactItem label="Customers" value="50+" />
        </div>
      </div>
    </div>
  </section>
);

function ImpactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-slate-900/40 border border-white/6 text-center">
      <div className="text-slate-400 text-sm">{label}</div>
      <div className="font-semibold text-white mt-2">{value}</div>
    </div>
  );
}

// ---------- Timeline (company milestones) ----------
const Timeline = () => {
  const events = [
    { year: "2019", title: "Founded", desc: "Founded by security engineers from cloud and telecom." },
    { year: "2020", title: "First PoP", desc: "Launched our first public scrubbing PoP and initial customers." },
    { year: "2022", title: "Enterprise SLA", desc: "Announced enterprise SLA and SOC offering." },
    { year: "2024", title: "Nationwide Deployments", desc: "Multiple government deployments and audits." },
  ];

  return (
    <section className="py-12">
      <h3 className="text-2xl font-extrabold">Milestones</h3>
      <div className="mt-6 space-y-4">
        {events.map((e) => (
          <div key={e.year} className="flex items-start gap-4">
            <div className="w-14 flex-shrink-0">
              <div className="text-xl font-bold text-indigo-300">{e.year}</div>
            </div>
            <div className="flex-1 bg-slate-900/40 p-4 rounded-lg border border-white/6">
              <div className="font-semibold text-white">{e.title}</div>
              <div className="text-sm text-slate-400 mt-1">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ---------- FAQ ----------
const FAQSection = () => {
  const faqs = [
    { q: "How fast is onboarding?", a: "Typically minutes for DNS change; full SOC integration in days." },
    { q: "Do you keep logs for audits?", a: "Yes — we provide configurable audit logs and exportable forensic reports." },
    { q: "Can we run an on-prem connector?", a: "We offer a connector option for customers with strict data sovereignty requirements." },
  ];

  return (
    <section className="py-12">
      <h3 className="text-2xl font-extrabold">Frequently asked questions</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="p-4 rounded-lg bg-slate-900/50 border border-white/6">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <div className="mt-2 text-sm text-slate-400">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

const FinalCTASection = () => (
  <section id="contact" className="my-12 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-indigo-700/40 to-violet-900/30 border border-white/10 shadow-2xl">
    <div className="md:flex items-center justify-between gap-8 text-center md:text-left">
      <div>
        <h3 className="text-3xl font-extrabold">Talk to our team</h3>
        <p className="mt-2 text-slate-300 max-w-2xl">Book a demo, request procurement guidance, or ask about compliance and custom SLAs.</p>
      </div>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 md:mt-0 flex-shrink-0 rounded-lg px-6 py-3 bg-indigo-600 font-semibold shadow-lg hover:bg-indigo-500 transition-colors">
        Request a Demo
      </motion.button>
    </div>
  </section>
);

// ---------- Small helper components ----------

// The following small components are inline for simplicity and previewability —
// we can extract them into shared components later if you want.

function TeamCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="rounded-2xl p-4 bg-slate-900/50 border border-white/6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">{name.split(" ")[0].charAt(0)}</div>
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-xs text-slate-400">{role}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-300">{bio}</p>
    </div>
  );
}

// --- End of file ---
