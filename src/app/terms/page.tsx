"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert prose-headings:font-extrabold prose-a:text-indigo-400"
      >
        <h1>Terms of Service</h1>
        <p>
          <strong>Last Updated:</strong> September 14, 2025
        </p>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the GoShield Inc. website and services (&quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.
        </p>

        <h2>1. Use of Service</h2>
        <p>
          You agree to use our Service in compliance with all applicable laws and regulations and not for any purpose that is prohibited by these Terms. You are responsible for all activity that occurs under your account.
        </p>

        <h2>2. Prohibited Activities</h2>
        <p>
          You are expressly prohibited from using the Service to support or engage in any illegal activities, including but not limited to, distributing malware, engaging in phishing scams, or hosting content that infringes on the intellectual property rights of others.
        </p>

        <h2>3. Termination</h2>
        <p>
          We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        
        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall GoShield Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:legal@goshield.com">legal@goshield.com</a>.
        </p>
      </motion.div>
    </div>
  );
}
