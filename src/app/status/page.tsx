"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export default function StatusPage() {
  const systems = [
    { name: "Global Anycast Network", status: "Operational" },
    { name: "Dashboard & Login", status: "Operational" },
    { name: "API Services", status: "Operational" },
    { name: "Mitigation Engine", status: "Operational" },
  ];

  const incidents = [
    {
      date: "September 12, 2025",
      title: "Minor Latency in APAC Region",
      description: "We experienced a brief period of elevated latency affecting some customers in our APAC PoPs. The issue was identified and resolved within 15 minutes. All systems are now operating normally.",
      status: "Resolved",
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Operational':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-green-900/50 border border-green-700 text-green-300 rounded-lg p-6 mb-12 text-center">
          <h1 className="text-2xl font-bold">All Systems Operational</h1>
        </div>

        <h2 className="text-xl font-semibold mb-6">Current System Status</h2>
        <div className="space-y-4 mb-16">
          {systems.map((system) => (
            <div key={system.name} className="flex justify-between items-center bg-slate-900/50 p-5 rounded-lg border border-white/10">
              <span className="font-medium">{system.name}</span>
              <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                {getStatusIcon(system.status)}
                <span>{system.status}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-6">Past Incidents</h2>
        <div className="space-y-8">
            {incidents.map((incident) => (
                <div key={incident.title} className="p-5 rounded-lg border border-white/10">
                    <p className="text-sm text-slate-400 mb-2">{incident.date}</p>
                    <h3 className="font-semibold text-slate-100 mb-2">{incident.title}</h3>
                    <p className="text-slate-400 text-sm">{incident.description}</p>
                    <p className="text-xs font-semibold text-green-400 mt-4">{incident.status}</p>
                </div>
            ))}
            <div className="text-center text-slate-500 text-sm">
                No incidents reported in the last 90 days.
            </div>
        </div>
      </motion.div>
    </div>
  );
}
