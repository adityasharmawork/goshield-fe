import { ShieldAlert } from 'lucide-react';

export default function BlockedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      <ShieldAlert className="w-16 h-16 text-red-500" />
      <h1 className="mt-4 text-3xl font-bold">Access Denied</h1>
      <p className="mt-2 text-slate-400">
        Your IP address has been flagged for security reasons.
      </p>
    </div>
  );
}