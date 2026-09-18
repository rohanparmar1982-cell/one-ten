import React from 'react';
import { ReservationForm } from '../components/ReservationForm';
import { Calendar, Clock, Phone, Sparkles, Shield, Users2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationsPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            Table Booking & Concierge
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          RESERVE YOUR TABLE
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          Secure an intimate table in our main hall, the secluded cellar, or our open veranda. For urgent bookings within the next 2 hours, please telephone our concierge directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Form (8 cols on lg) */}
          <div className="lg:col-span-8">
            <ReservationForm />
          </div>

          {/* Concierge & Dining Information Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Telephone Card */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1">
                Concierge Direct Desk
              </h4>
              <p className="text-xs text-[#9d978a] leading-relaxed mb-4">
                Prefer personal telephonic booking or coordinating a tailored Chef’s tasting menu?
              </p>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f89e5a] hover:text-[#f4efe4] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.phoneFormatted}</span>
              </a>
              <p className="text-[11px] text-[#6b675d] mt-2">
                Available daily from 10:30 AM to 11:30 PM.
              </p>
            </div>

            {/* Timings Card */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-3">
                Dining Seatings
              </h4>
              <div className="space-y-3 text-xs text-[#aba598]">
                <div>
                  <p className="text-[#f4efe4] font-medium">Lunch Service</p>
                  <p>12:00 PM – 03:30 PM (Last seating 02:45 PM)</p>
                </div>
                <div className="pt-2 border-t border-[#1f1f2b]">
                  <p className="text-[#f4efe4] font-medium">Dinner Service</p>
                  <p>Mon – Thu: 07:00 PM – 11:00 PM</p>
                  <p>Fri – Sun: 07:00 PM – 12:00 AM</p>
                </div>
              </div>
            </div>

            {/* Private Banquets & Large Gatherings */}
            <div className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#f4efe4] mb-2">
                Private Banquets & Events
              </h4>
              <p className="text-xs text-[#9d978a] leading-relaxed mb-4">
                Hosting an anniversary, corporate dinner, or family celebration for more than 12 guests? Our Sommelier and Chef will curate bespoke pairing menus and dedicated tableside service.
              </p>
              <a
                href={`mailto:${RESTAURANT_INFO.reservationEmail}?subject=Private%20Dining%20Inquiry`}
                className="text-xs uppercase tracking-wider font-semibold text-[#c5a059] hover:underline"
              >
                Inquire for Private Events →
              </a>
            </div>

            {/* Guidelines Card */}
            <div className="bg-[#0e0e14] border border-[#1e1e28] rounded-2xl p-5 text-xs text-[#8c867b] space-y-2">
              <div className="flex items-center gap-1.5 text-[#d4cebe] font-medium">
                <Shield className="w-3.5 h-3.5 text-[#e05326]" />
                <span>Dining Etiquette & Grace Period</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Tables are held for 15 minutes. Valet parking is located at the ground level pavilion entrance. Smart casual attire is appreciated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
