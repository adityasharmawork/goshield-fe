"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert prose-headings:font-extrabold prose-a:text-indigo-400"
      >
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated:</strong> September 14, 2025
        </p>
        <p>
          GoShield Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and maintain our services.</li>
          <li>To improve, personalize, and expand our services.</li>
          <li>To understand and analyze how you use our services.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:privacy@goshield.com">privacy@goshield.com</a>.
        </p>
      </motion.div>
    </div>
  );
}
