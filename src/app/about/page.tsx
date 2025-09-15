"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          About GoShield
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Pioneering the future of DDoS protection with cutting-edge technology and unwavering commitment to security.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Mission</h2>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
            To provide unbreakable DDoS protection that empowers businesses worldwide to operate securely in the digital age.
            We combine advanced AI, global infrastructure, and 24/7 monitoring to keep your services online, no matter the threat.
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security First</h3>
            <p className="text-sm text-slate-400">Every decision we make prioritizes the security and protection of our clients.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-slate-400">We work closely with our clients to understand their unique security needs.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-slate-400">Constantly pushing the boundaries of DDoS mitigation technology.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-sm text-slate-400">Delivering the highest quality service with 99.999% uptime guarantees.</p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight mb-8">Our Team</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Led by cybersecurity experts with decades of experience in network security, threat intelligence, and enterprise protection.
        </p>
      </motion.div>
    </div>
  );
}
