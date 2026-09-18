import React, { useState } from 'react';
import { ReservationFormData, ReservationValidationErrors } from '../types';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Phone, AlertCircle, Info, ShieldCheck, Database, Copy, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { saveReservationToSupabase, SUPABASE_PROJECT_ID, SUPABASE_SQL_SCHEMA } from '../lib/supabase';

export const ReservationForm: React.FC = () => {
  // Today's date string YYYY-MM-DD
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  
  // Max date (60 days out)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: todayString,
    time: '19:30',
    guests: 2,
    seatingPreference: 'indoor-main',
    occasion: 'none',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<ReservationValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    details: ReservationFormData;
    supabaseSync: {
      success: boolean;
      tableMissing?: boolean;
      error?: string;
    };
  } | null>(null);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const timeSlots = [
    { value: '12:00', label: '12:00 PM (Lunch)' },
    { value: '12:30', label: '12:30 PM (Lunch)' },
    { value: '13:00', label: '01:00 PM (Lunch)' },
    { value: '13:30', label: '01:30 PM (Lunch)' },
    { value: '14:00', label: '02:00 PM (Lunch)' },
    { value: '19:00', label: '07:00 PM (Dinner)' },
    { value: '19:30', label: '07:30 PM (Dinner)' },
    { value: '20:00', label: '08:00 PM (Dinner)' },
    { value: '20:30', label: '08:30 PM (Dinner)' },
    { value: '21:00', label: '09:00 PM (Dinner)' },
    { value: '21:30', label: '09:30 PM (Dinner)' },
    { value: '22:00', label: '10:00 PM (Dinner)' },
  ];

  const validate = (): boolean => {
    const newErrors: ReservationValidationErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    // Phone validation: Indian mobile or standard 10+ digits
    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 15) {
      newErrors.phone = 'Please enter a valid contact telephone number';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a dining date';
    } else if (formData.date < todayString) {
      newErrors.date = 'Dining date cannot be in the past';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a service time slot';
    }

    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = 'Party size must be at least 1 guest';
    } else if (formData.guests > 20) {
      newErrors.guests = 'For parties larger than 20 guests, please contact our events team directly';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const bookingRef = 'OTN-' + Math.floor(100000 + Math.random() * 900000);

    const supabaseResult = await saveReservationToSupabase({
      booking_reference: bookingRef,
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      date: formData.date,
      time: formData.time,
      guests: Number(formData.guests),
      seating_preference: formData.seatingPreference,
      occasion: formData.occasion,
      special_requests: formData.specialRequests?.trim() || '',
      status: 'confirmed',
    });

    setIsSubmitting(false);
    setSubmittedBooking({
      id: bookingRef,
      details: { ...formData },
      supabaseSync: {
        success: supabaseResult.success,
        tableMissing: supabaseResult.tableMissing,
        error: supabaseResult.error,
      },
    });
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: todayString,
      time: '19:30',
      guests: 2,
      seatingPreference: 'indoor-main',
      occasion: 'none',
      specialRequests: '',
    });
    setErrors({});
  };

  if (submittedBooking) {
    return (
      <div
        id="reservation-success-card"
        className="max-w-2xl mx-auto bg-[#13131b] border border-[#2b2b3b] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-semibold">
          Reservation Request Logged
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#f4efe4] mt-2 mb-4">
          We Await Your Visit
        </h3>

        {/* Supabase Database Storage Status */}
        {submittedBooking.supabaseSync.success ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 mb-6 text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-2 font-semibold text-emerald-400">
                <span>Stored in Supabase Database</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 font-mono">
                  Table: public.reservations
                </span>
              </div>
              <p className="text-[#a7f3d0] mt-1">
                Booking record was successfully written to your Supabase PostgreSQL cluster (Project: <span className="font-mono font-bold text-white">{SUPABASE_PROJECT_ID}</span>).
              </p>
            </div>
          </div>
        ) : submittedBooking.supabaseSync.tableMissing ? (
          <div className="bg-[#e05326]/10 border border-[#e05326]/30 rounded-2xl p-4 mb-6 text-left space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#f89e5a]">
                <Database className="w-4 h-4 text-[#e05326]" />
                <span>Supabase Connected (Table Setup Needed)</span>
              </div>
              <button
                onClick={handleCopySql}
                className="px-2.5 py-1 rounded-lg bg-[#1a1a24] hover:bg-[#252535] text-[11px] text-[#c5a059] border border-[#3b3b4f] flex items-center gap-1 transition-colors"
              >
                {copiedSql ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSql ? 'SQL Copied!' : 'Copy SQL Script'}</span>
              </button>
            </div>
            <p className="text-xs text-[#dcd7cb] leading-relaxed">
              Your Supabase project (<strong className="text-white">{SUPABASE_PROJECT_ID}</strong>) is active with your API key. To enable storing bookings directly in PostgreSQL, run the SQL script in your Supabase SQL editor.
            </p>
          </div>
        ) : (
          <div className="bg-[#1a1a24] border border-[#2b2b3b] rounded-2xl p-4 mb-6 text-left flex items-center gap-3 text-xs text-[#b8b3a8]">
            <Database className="w-4 h-4 text-[#c5a059] shrink-0" />
            <span>Targeting Supabase Database (Project ID: {SUPABASE_PROJECT_ID})</span>
          </div>
        )}

        <div className="bg-[#181824] rounded-2xl p-5 mb-6 text-left border border-[#262638] space-y-3 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-[#232333]">
            <span className="text-[#8c867b]">Reference Code:</span>
            <span className="font-mono text-[#c5a059] font-bold tracking-wider">{submittedBooking.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8c867b]">Primary Guest:</span>
            <span className="text-[#f4efe4] font-medium">{submittedBooking.details.fullName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8c867b]">Date & Time:</span>
            <span className="text-[#f4efe4]">
              {submittedBooking.details.date} at {submittedBooking.details.time}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8c867b]">Party Size:</span>
            <span className="text-[#f4efe4]">{submittedBooking.details.guests} {submittedBooking.details.guests === 1 ? 'Guest' : 'Guests'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8c867b]">Seating Area:</span>
            <span className="text-[#f4efe4] capitalize">{submittedBooking.details.seatingPreference.replace('-', ' ')}</span>
          </div>
          {submittedBooking.details.occasion !== 'none' && (
            <div className="flex justify-between items-center">
              <span className="text-[#8c867b]">Occasion:</span>
              <span className="text-[#f89e5a] capitalize">{submittedBooking.details.occasion}</span>
            </div>
          )}
        </div>

        {/* Explicit Required Notice */}
        <div className="bg-[#0b0b0e] border border-[#222230] rounded-xl p-4 text-xs text-[#b8b3a8] text-left mb-6 space-y-2">
          <div className="flex items-center gap-2 text-[#c5a059] font-medium">
            <Info className="w-4 h-4 shrink-0" />
            <span>Reservation Confirmation</span>
          </div>
          <p className="leading-relaxed">
            "Your reservation request has been received. Our team will contact you shortly to confirm your table."
          </p>
          <p className="text-[11px] text-[#78746a]">
            Connected to Supabase account (Project: wowkoxwlpokoalekqame). All guest reservation requests are dispatched to your live database.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1c28] hover:bg-[#252535] text-[#f4efe4] text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Book Another Table
          </button>
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e05326] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#eb5d2f] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Concierge: {RESTAURANT_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      id="table-reservation-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#121219] border border-[#242433] rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto relative"
    >
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#20202d]">
        <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326]">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-[#f4efe4]">Reserve Your Table</h3>
          <p className="text-xs text-[#9d978a]">
            Complimentary valet parking & personalized table setup provided.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="res-fullName" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Full Name <span className="text-[#e05326]">*</span>
            </label>
            <input
              id="res-fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Siddharth Desai"
              className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
                errors.fullName ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="res-email" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Email Address <span className="text-[#e05326]">*</span>
            </label>
            <input
              id="res-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="siddharth@example.com"
              className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
                errors.email ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Number of Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="res-phone" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Phone Number <span className="text-[#e05326]">*</span>
            </label>
            <input
              id="res-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98250 12345"
              className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
                errors.phone ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="res-guests" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Number of Guests <span className="text-[#e05326]">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                id="res-guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none transition-colors ${
                  errors.guests ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
                }`}
              />
              <div className="flex items-center gap-1 shrink-0">
                {[2, 4, 6, 8].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: preset })}
                    className={`px-2.5 py-2.5 rounded-lg text-xs font-semibold transition-colors border ${
                      formData.guests === preset
                        ? 'bg-[#e05326] text-white border-transparent'
                        : 'bg-[#181822] border-[#292938] text-[#9d978a] hover:text-[#f4efe4]'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
            {errors.guests && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.guests}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="res-date" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Date <span className="text-[#e05326]">*</span>
            </label>
            <div className="relative">
              <input
                id="res-date"
                type="date"
                min={todayString}
                max={maxDateString}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none transition-colors ${
                  errors.date ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
                }`}
              />
            </div>
            {errors.date && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="res-time" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Preferred Time Slot <span className="text-[#e05326]">*</span>
            </label>
            <select
              id="res-time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none transition-colors ${
                errors.time ? 'border-rose-500/80 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            >
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value} className="bg-[#14141c] text-[#f4efe4]">
                  {slot.label}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.time}
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Seating Preference & Special Occasion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="res-seating" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Seating Atmosphere
            </label>
            <select
              id="res-seating"
              value={formData.seatingPreference}
              onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
              className="w-full bg-[#181822] border border-[#292938] focus:border-[#e05326] rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none"
            >
              <option value="indoor-main" className="bg-[#14141c]">Main Dining Hall (Warm Ember Glow)</option>
              <option value="private-dining" className="bg-[#14141c]">The Private Cellar (Exclusive 8-14 Seats)</option>
              <option value="patio-terrace" className="bg-[#14141c]">Open Veranda Terrace</option>
              <option value="chefs-counter" className="bg-[#14141c]">Chef's Live Tandoor Counter</option>
            </select>
          </div>

          <div>
            <label htmlFor="res-occasion" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
              Special Occasion
            </label>
            <select
              id="res-occasion"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="w-full bg-[#181822] border border-[#292938] focus:border-[#e05326] rounded-xl px-4 py-3 text-sm text-[#f4efe4] focus:outline-none"
            >
              <option value="none" className="bg-[#14141c]">Casual Fine Dining</option>
              <option value="anniversary" className="bg-[#14141c]">Wedding Anniversary</option>
              <option value="birthday" className="bg-[#14141c]">Birthday Celebration</option>
              <option value="business" className="bg-[#14141c]">Executive Corporate Dinner</option>
              <option value="romantic" className="bg-[#14141c]">Romantic Date Night</option>
              <option value="family" className="bg-[#14141c]">Family Reunion</option>
            </select>
          </div>
        </div>

        {/* Row 5: Special Requests */}
        <div>
          <label htmlFor="res-requests" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1.5">
            Special Requests & Dietary Requirements (Optional)
          </label>
          <textarea
            id="res-requests"
            rows={3}
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            placeholder="e.g. Pure Jain preparation, nut allergies, quiet corner table, high chair required..."
            className="w-full bg-[#181822] border border-[#292938] focus:border-[#e05326] rounded-xl px-4 py-3 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Disclaimer / Notice */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0f0f15] border border-[#1f1f2a] text-xs text-[#8e887d]">
          <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
          <span>
            Reservations are held for 15 minutes past scheduled time. For immediate bookings within 2 hours, please reach us directly at {RESTAURANT_INFO.phoneFormatted}.
          </span>
        </div>

        {/* Submit Button */}
        <button
          id="confirm-reservation-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] active:scale-[0.99] text-[#f7f4eb] text-sm uppercase tracking-widest font-semibold transition-all duration-200 shadow-xl shadow-[#e05326]/30 border border-[#f89e5a]/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Confirm Reservation</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
