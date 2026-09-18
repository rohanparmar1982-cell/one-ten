import React from 'react';
import { ReservationForm } from '../components/ReservationForm';
import { SupabaseReservationsManager } from '../components/SupabaseReservationsManager';
import { Calendar, Clock, Phone, Sparkles, Shield, Building2, Car } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationsPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#c5a059]/30 mb-3">
          <Calendar className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e3ded2] font-medium font-sans">
            One Ten Restaurant & Banquet · Chandkheda
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          RESERVE YOUR TABLE
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          Book your table for family dining, Punjabi thali lunches, or inquire for celebrations in our 1,700 sq. ft. banquet hall at Highway Mall.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Form (8 cols on lg) */}
          <div className="lg:col-span-8">
            <ReservationForm />
            <SupabaseReservationsManager />
          </div>

          {/* Concierge & Dining Information Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Telephone Card */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1">
                Direct Calling Desk
              </h4>
              <p className="text-xs text-[#9d978a] leading-relaxed mb-4">
                Prefer immediate booking, inquiries for today's Punjabi thali, or banquet arrangements?
              </p>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f89e5a] hover:text-[#f4efe4] transition-colors font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.phoneFormatted}</span>
              </a>
              <p className="text-[11px] text-[#6b675d] mt-2">
                Available daily 11:00 AM – 11:00 PM.
              </p>
            </div>

            {/* Timings Card */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-3">
                Service Timings
              </h4>
              <div className="space-y-3 text-xs text-[#aba598]">
                <div>
                  <p className="text-[#f4efe4] font-medium">Daily Hours</p>
                  <p>11:00 AM – 11:00 PM (Monday – Sunday)</p>
                </div>
                <div className="pt-2 border-t border-[#1f1f2b]">
                  <p className="text-[#f4efe4] font-medium">Lunch & Fixed Thali</p>
                  <p>11:30 AM – 03:30 PM</p>
                </div>
                <div className="pt-2 border-t border-[#1f1f2b]">
                  <p className="text-[#f4efe4] font-medium">Dinner & Ala Carte</p>
                  <p>07:00 PM – 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Private Banquets & Large Gatherings */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-2">
                Banquet Hall (1,700 sq. ft.)
              </h4>
              <p className="text-xs text-[#9d978a] leading-relaxed mb-4">
                Hosting a wedding, engagement, birthday party, or corporate banquet for 50 to 500 guests? Catering packages available from ₹245–₹300+ per plate.
              </p>
              <a
                href="#banquet"
                className="text-xs uppercase tracking-wider font-semibold text-[#c5a059] hover:underline inline-flex items-center gap-1"
              >
                View Banquet Hall Details →
              </a>
            </div>

            {/* Guidelines Card */}
            <div className="bg-[#0e0e14] border border-[#1e1e28] rounded-2xl p-5 text-xs text-[#8c867b] space-y-2">
              <div className="flex items-center gap-1.5 text-[#d4cebe] font-medium">
                <Car className="w-3.5 h-3.5 text-[#e05326]" />
                <span>Highway Mall Parking & Arrival</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Ample mall parking is available at Highway Mall, Chandkheda. Table holds are reserved for 15 minutes past scheduled time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
