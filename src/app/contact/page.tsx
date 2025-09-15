"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Have a question or need to discuss your security requirements? Our team is ready to help.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input type="text" id="name" className="w-full bg-slate-800 border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" id="email" className="w-full bg-slate-800 border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full bg-slate-800 border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
          </div>
          <button type="submit" className="w-full rounded-lg py-3 bg-indigo-600 font-semibold hover:bg-indigo-500 transition-colors">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
