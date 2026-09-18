import React, { useState, useEffect } from 'react';
import { Database, RefreshCw, CheckCircle2, AlertTriangle, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { fetchRecentReservations, SUPABASE_PROJECT_ID, SUPABASE_SQL_SCHEMA } from '../lib/supabase';
import { ReservationRecord } from '../types';

export const SupabaseReservationsManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState<ReservationRecord[]>([]);
  const [tableMissing, setTableMissing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadReservations = async () => {
    setLoading(true);
    setErrorMessage(null);
    const res = await fetchRecentReservations(25);
    setLoading(false);

    if (res.success && res.data) {
      setReservations(res.data);
      setTableMissing(false);
    } else {
      if (res.tableMissing) {
        setTableMissing(true);
      } else {
        setErrorMessage(res.error || 'Failed to query Supabase table');
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadReservations();
    }
  }, [isOpen]);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-8">
      {/* Top Banner / Trigger */}
      <div className="bg-[#121219] border border-[#242435] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <Database className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#f4efe4] tracking-wide">
                Supabase Database Connected
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>
            <p className="text-[11px] text-[#938d82] mt-0.5">
              Project ID: <span className="font-mono text-[#c5a059]">{SUPABASE_PROJECT_ID}</span> · Storing in <code className="text-[#e05326] font-mono">public.reservations</code>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-xl bg-[#1c1c28] hover:bg-[#252535] text-xs font-medium text-[#f4efe4] transition-colors border border-[#2e2e42] flex items-center gap-2"
          >
            <Database className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{isOpen ? 'Hide Stored Bookings' : 'View Stored Bookings'}</span>
          </button>
        </div>
      </div>

      {/* Expanded Table & Records Viewer */}
      {isOpen && (
        <div className="mt-3 bg-[#101016] border border-[#242436] rounded-2xl p-5 sm:p-6 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#20202e] gap-3">
            <div>
              <h4 className="font-serif text-lg text-[#f4efe4]">
                Supabase Live Reservations Log
              </h4>
              <p className="text-xs text-[#8c867b] mt-0.5">
                Real-time records querying your Supabase PostgreSQL cluster directly.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={loadReservations}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg bg-[#181824] hover:bg-[#202030] text-xs text-[#dcd7cb] flex items-center gap-1.5 border border-[#2b2b3d] transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#e05326] ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleCopySql}
                className="px-3 py-1.5 rounded-lg bg-[#181824] hover:bg-[#202030] text-xs text-[#c5a059] flex items-center gap-1.5 border border-[#2b2b3d] transition-colors"
                title="Copy SQL Table Schema for Supabase SQL Editor"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'SQL Copied!' : 'Copy SQL Schema'}</span>
              </button>
            </div>
          </div>

          {/* Table Missing / First-time SQL Setup Prompt */}
          {tableMissing && (
            <div className="mt-4 p-4 rounded-xl bg-[#e05326]/10 border border-[#e05326]/30 text-xs space-y-3">
              <div className="flex items-center gap-2 text-[#f89e5a] font-semibold">
                <AlertTriangle className="w-4 h-4 text-[#e05326] shrink-0" />
                <span>Table <code className="font-mono bg-[#0b0b0e] px-1.5 py-0.5 rounded text-white">public.reservations</code> is not created yet</span>
              </div>
              <p className="text-[#dcd7cb] leading-relaxed">
                Your Supabase project (<strong className="text-white">{SUPABASE_PROJECT_ID}</strong>) is connected with your publishable key. To enable storing bookings in PostgreSQL, run the following SQL script in your{' '}
                <a
                  href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a059] underline hover:text-[#f4efe4] inline-flex items-center gap-1"
                >
                  Supabase SQL Editor <ExternalLink className="w-3 h-3" />
                </a>:
              </p>

              <div className="relative">
                <pre className="p-3 rounded-lg bg-[#07070a] border border-[#222230] text-[11px] font-mono text-[#a5f3fc] overflow-x-auto max-h-48 leading-relaxed">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
                <button
                  onClick={handleCopySql}
                  className="absolute top-2 right-2 px-2.5 py-1 rounded bg-[#1c1c28] hover:bg-[#282838] text-[11px] text-[#f4efe4] border border-[#3b3b4f] flex items-center gap-1 shadow"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#c5a059]" />}
                  <span>{copied ? 'Copied' : 'Copy SQL'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Generic Error message */}
          {errorMessage && !tableMissing && (
            <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
              {errorMessage}
            </div>
          )}

          {/* Records Table */}
          {!tableMissing && (
            <div className="mt-4 overflow-x-auto">
              {reservations.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#7e796e]">
                  No reservation records found yet in Supabase table. Submit a booking above to test live insertion!
                </div>
              ) : (
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#222232] text-[#8e897e] font-medium uppercase tracking-wider text-[10px]">
                      <th className="py-2 px-3">Reference</th>
                      <th className="py-2 px-3">Guest Name</th>
                      <th className="py-2 px-3">Dining Date & Time</th>
                      <th className="py-2 px-3">Guests</th>
                      <th className="py-2 px-3">Seating</th>
                      <th className="py-2 px-3">Contact</th>
                      <th className="py-2 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1a1a26] text-[#e2ded5]">
                    {reservations.map((item, idx) => (
                      <tr key={item.id || item.booking_reference || idx} className="hover:bg-[#151520] transition-colors">
                        <td className="py-2.5 px-3 font-mono text-[#c5a059] font-semibold whitespace-nowrap">
                          {item.booking_reference}
                        </td>
                        <td className="py-2.5 px-3 font-medium whitespace-nowrap">
                          {item.full_name}
                        </td>
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          {item.date} <span className="text-[#888] font-mono">@{item.time}</span>
                        </td>
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          {item.guests} {item.guests === 1 ? 'Guest' : 'Guests'}
                        </td>
                        <td className="py-2.5 px-3 capitalize whitespace-nowrap text-[#b0aba0]">
                          {item.seating_preference?.replace('-', ' ')}
                        </td>
                        <td className="py-2.5 px-3 text-[#999] whitespace-nowrap">
                          {item.phone}
                        </td>
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            {item.status || 'confirmed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
