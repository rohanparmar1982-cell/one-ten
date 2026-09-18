import React, { useState } from 'react';
import { Page, ReservationFormData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { saveReservationToSupabase } from '../lib/supabase';
import { 
  Building2, Users, Calendar, Phone, Sparkles, CheckCircle2, 
  MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake, Utensils
} from 'lucide-react';

interface BanquetPageProps {
  onNavigate: (page: Page) => void;
}

export const BanquetPage: React.FC<BanquetPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    time: '19:00',
    guests: 100,
    eventType: 'Wedding functions',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    const bookingRef = 'BNQ-' + Math.floor(100000 + Math.random() * 900000);

    await saveReservationToSupabase({
      booking_reference: bookingRef,
      full_name: formData.fullName.trim(),
      email: formData.email.trim() || 'banquet-inquiry@oneten.in',
      phone: formData.phone.trim(),
      date: formData.date,
      time: formData.time,
      guests: Number(formData.guests),
      seating_preference: 'banquet-hall',
      occasion: `Banquet: ${formData.eventType}`,
      special_requests: formData.notes.trim(),
      status: 'banquet_inquiry',
    });

    setIsSubmitting(false);
    setSubmittedRef(bookingRef);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#c5a059]/30 mb-4">
          <Building2 className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e3ded2] font-medium">
            1,700 sq. ft. Event & Celebration Sanctuary
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          BANQUET & EVENTS
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#d4cebe] font-sans leading-relaxed text-balance">
          Positioned as a premier restaurant and banquet destination for celebrations and functions at Highway Mall, Chandkheda.
        </p>
      </div>

      {/* Key Banquet Highlights Grid from PDF Page 3 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121219] p-8 rounded-3xl border border-[#232332] relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider text-[#9e988c] font-medium">Banquet Space</p>
            <h3 className="text-2xl font-serif text-[#f4efe4] mt-1 mb-2">1,700 Sq. Ft. Hall</h3>
            <p className="text-sm text-[#b8b3a8] leading-relaxed">
              Two distinct halls with combined seating of ~200 guests and flexible layout for 50 to 500 guests depending on arrangement style.
            </p>
          </div>

          <div className="bg-[#121219] p-8 rounded-3xl border border-[#232332] relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-5">
              <Utensils className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider text-[#9e988c] font-medium">Vegetarian Catering</p>
            <h3 className="text-2xl font-serif text-[#f4efe4] mt-1 mb-2">₹245–₹300+ / Plate</h3>
            <p className="text-sm text-[#b8b3a8] leading-relaxed">
              Reported banquet pricing starts around ₹245–₹300+ per plate with comprehensive North Indian and Indo-Chinese buffet courses.
            </p>
          </div>

          <div className="bg-[#121219] p-8 rounded-3xl border border-[#232332] relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80] mb-5">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider text-[#9e988c] font-medium">Capacity</p>
            <h3 className="text-2xl font-serif text-[#f4efe4] mt-1 mb-2">50 – 500 Guests</h3>
            <p className="text-sm text-[#b8b3a8] leading-relaxed">
              Third-party verified listings report approximately 200 seated and 300 maximum for combined halls, easily accommodating all celebration scales.
            </p>
          </div>
        </div>
      </div>

      {/* Banquet Details & Inquiry Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Event Use Cases & Features (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[#121219] rounded-3xl p-8 border border-[#232332] space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#e05326] font-medium">
                  Ideal For All Occasions
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f4efe4] mt-1">
                  Supported Event Use Cases
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESTAURANT_INFO.banquet.useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181824] border border-[#262638]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-[#dcd7cb] font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#121219] rounded-3xl p-8 border border-[#232332] space-y-5">
              <h3 className="text-xl font-serif text-[#f4efe4]">
                Banquet Facilities & Highlights
              </h3>
              <ul className="space-y-3">
                {RESTAURANT_INFO.banquet.amenities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs text-[#b8b3a8]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Call Card */}
            <div className="bg-gradient-to-br from-[#1c1c28] to-[#12121b] rounded-3xl p-6 border border-[#303045] flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-[#c5a059]">Immediate Banquet Inquiries</p>
                <p className="text-lg font-serif text-[#f4efe4] font-medium">Speak with our Event Specialist</p>
                <p className="text-xs text-[#9d978a]">Available 11:00 AM – 11:00 PM daily</p>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#e05326]/30 shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Banquet Inquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#12121a] rounded-3xl p-8 sm:p-10 border border-[#28283a] shadow-2xl">
              {submittedRef ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#f4efe4]">Banquet Inquiry Received!</h3>
                  <p className="text-sm text-[#b8b3a8] max-w-md mx-auto">
                    Thank you! Your event inquiry has been logged in our system with reference code <strong className="text-white font-mono">{submittedRef}</strong>. Our banquet manager will contact you at <span className="text-[#c5a059] font-medium">{formData.phone}</span> to discuss menu customization and date availability.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-6 py-2.5 rounded-full bg-[#1e1e2c] hover:bg-[#28283a] text-xs uppercase tracking-wider font-semibold text-[#f4efe4] border border-[#38384d]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-serif text-[#f4efe4]">Check Date Availability</h3>
                    <p className="text-xs text-[#9d978a] mt-1">
                      Fill out the form below to receive a customized quote and schedule a venue tour.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g., Rajeshbhai Patel"
                        className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5666] focus:outline-none focus:border-[#e05326]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 90330 62552"
                          className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5666] focus:outline-none focus:border-[#e05326]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@gmail.com"
                          className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5666] focus:outline-none focus:border-[#e05326]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                          Tentative Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e05326]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                          Approx. Guests *
                        </label>
                        <input
                          type="number"
                          min="30"
                          max="500"
                          required
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                          className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e05326]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                          Preferred Slot
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e05326]"
                        >
                          <option value="12:00">Lunch (12:00 PM - 3:30 PM)</option>
                          <option value="19:00">Dinner (7:00 PM - 11:30 PM)</option>
                          <option value="full-day">Full Day Function</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                        Occasion / Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e05326]"
                      >
                        {RESTAURANT_INFO.banquet.useCases.map((u) => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#b8b3a8] mb-1.5">
                        Special Catering or Decor Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Mention any specific menu items (e.g. Paneer Angara, live chaat, Jain food preferences, stage setup)"
                        className="w-full bg-[#181824] border border-[#2e2e42] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5666] focus:outline-none focus:border-[#e05326]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#e05326] hover:bg-[#eb5d2f] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-xl shadow-[#e05326]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Request Banquet Proposal & Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
