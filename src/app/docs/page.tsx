"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Dna, LayoutDashboard, TerminalSquare } from "lucide-react";

// A simple syntax highlighter component for demonstration
const CodeSnippet = ({ code, language = 'bash' }: { code: string, language?: string }) => (
    <div className="bg-slate-900 rounded-lg my-4">
        <div className="flex justify-between items-center px-4 py-2 border-b border-slate-700">
            <span className="text-xs font-sans text-slate-400">{language}</span>
            {/* You could add a copy button here */}
        </div>
        <pre className="p-4 text-sm overflow-x-auto">
            <code className={`language-${language}`}>{code.trim()}</code>
        </pre>
    </div>
);


export default function DocsPage() {
    const [activeSection, setActiveSection] = useState('getting-started');

    const docsSections = {
        'getting-started': {
            icon: <Book size={20} />,
            title: 'Getting Started',
            content: (
                <div>
                    <h2 className="text-3xl font-bold mb-4">Onboard in Minutes</h2>
                    <p className="text-slate-400 mb-6">
                        Deploying GoShield is a seamless process designed to get you protected as quickly as possible. A single DNS change is all it takes to route your traffic through our global scrubbing network. No hardware, no complex configurations, and zero downtime.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Step 1: Add Your Website</h3>
                    <p className="text-slate-400 mb-4">
                        Log in to your GoShield dashboard and add your domain (e.g., `your-website.com`). Our system will automatically detect your existing DNS records.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Step 2: Update Your DNS</h3>
                    <p className="text-slate-400">
                        We will provide you with a new set of nameservers. Update these in your domain registrar&apos;s control panel. The change is seamless and propagation is typically fast. See the <a href="#dns-configuration" onClick={() => setActiveSection('dns-configuration')} className="text-indigo-400 hover:underline">DNS Configuration</a> section for details.
                    </p>
                    <CodeSnippet code={'ns1.goshield.com\nns2.goshield.com'} />
                    <h3 className="text-xl font-semibold mt-6 mb-2">Step 3: Protection Activated</h3>
                    <p className="text-slate-400">
                        Once your DNS changes propagate, all traffic to your site will be routed through GoShield. You&apos;ll instantly be protected from DDoS attacks. You can monitor traffic and threats in real-time from your Analytics Dashboard.
                    </p>
                </div>
            )
        },
        'dns-configuration': {
            icon: <Dna size={20} />,
            title: 'DNS Configuration',
            content: (
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Configuring Your DNS</h2>
                    <p className="text-slate-400 mb-6">
                        To activate GoShield, you must point your domain&apos;s nameservers to us. This allows us to act as your authoritative DNS server, routing all traffic through our secure global network before it reaches your origin server.
                    </p>
                    <div className="bg-yellow-900/50 text-yellow-300 border border-yellow-700 rounded-lg p-4 mb-6">
                        <span className="font-bold">Important:</span> Before changing nameservers, ensure all your existing DNS records (A, CNAME, MX, etc.) have been correctly imported into your GoShield dashboard to prevent service interruption.
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Example: GoDaddy</h3>
                    <ol className="list-decimal list-inside text-slate-400 space-y-2 mb-4">
                        <li>Log in to your GoDaddy account.</li>
                        <li>Navigate to &quot;My Products&quot; and select your domain.</li>
                        <li>Find the &quot;Manage DNS&quot; section.</li>
                        <li>Under &quot;Nameservers&quot;, click &quot;Change&quot; and select &quot;Custom&quot;.</li>
                        <li>Enter the GoShield nameservers provided in your dashboard and save.</li>
                    </ol>
                     <CodeSnippet code={`# GoShield Nameservers\nns1.goshield.com\nns2.goshield.com`} />
                </div>
            )
        },
        'analytics-dashboard': {
            icon: <LayoutDashboard size={20} />,
            title: 'Analytics Dashboard',
            content: (
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Real-time Visibility</h2>
                    <p className="text-slate-400 mb-6">
                        The Analytics Dashboard provides a comprehensive, real-time view of your traffic and any mitigated threats. Gain deep visibility into attack vectors, traffic origins, and mitigation effectiveness.
                    </p>
                     
                    <h3 className="text-xl font-semibold mt-8 mb-2">Key Metrics</h3>
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                        <li><span className="font-semibold text-slate-200">Total vs. Mitigated Traffic:</span> Visualize the volume of malicious traffic blocked by our platform.</li>
                        <li><span className="font-semibold text-slate-200">Attack Types:</span> Identify the specific DDoS vectors used against your assets (e.g., UDP Flood, SYN Flood, L7 HTTP attacks).</li>
                        <li><span className="font-semibold text-slate-200">Geographic Distribution:</span> See where your traffic—both legitimate and malicious—is coming from on a world map.</li>
                        <li><span className="font-semibold text-slate-200">Event Logs:</span> Access detailed, forensic logs for security auditing and analysis.</li>
                    </ul>
                </div>
            )
        },
        'api-reference': {
            icon: <TerminalSquare size={20} />,
            title: 'API Reference',
            content: (
                <div>
                    <h2 className="text-3xl font-bold mb-4">Automate & Integrate</h2>
                    <p className="text-slate-400 mb-6">
                        Our REST API allows you to programmatically manage your GoShield assets, configure security settings, and pull analytics data for integration with your existing tools like SIEMs.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                    <p className="text-slate-400 mb-4">
                        All API requests must be authenticated using an API key, which can be generated from your account settings. Include it in the header of your requests.
                    </p>
                    <CodeSnippet code={`Authorization: Bearer YOUR_API_KEY`} />
                    <h3 className="text-xl font-semibold mt-6 mb-2">Example: Fetch Attack Events</h3>
                     <p className="text-slate-400 mb-4">
                        Retrieve a list of the latest security events for a specific domain.
                    </p>
                    <CodeSnippet language="javascript" code={
`fetch(&quot;https://api.goshield.com/v1/events?domain=your-website.com&quot;, {
  headers: {
    &quot;Authorization&quot;: &quot;Bearer YOUR_API_KEY&quot;
  }
})
.then(res => res.json())
.then(data => console.log(data));`
                    }/>
                </div>
            )
        }
    };

    const activeContent = docsSections[activeSection as keyof typeof docsSections];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
                    <nav className="space-y-2">
                        {Object.entries(docsSections).map(([key, { icon, title }]) => (
                             <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeSection === key ? 'bg-indigo-600/20 text-indigo-300' : 'text-slate-400 hover:bg-slate-800/50'}`}
                            >
                               {icon}
                               <span className="font-medium">{title}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-9">
                     <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-slate-900/50 p-8 rounded-2xl border border-white/10"
                    >
                        {activeContent.content}
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
