import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a contact telephone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a detailed message (minimum 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="bg-[#121219] border border-[#232332] rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-[#f4efe4]">Send a Direct Message</h3>
        <p className="text-xs text-[#9d978a] mt-1">
          Inquire about private banquets, media, catering, or dining queries.
        </p>
      </div>

      {isSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-[#e2ded2]">
            <p className="font-semibold text-emerald-300">Message Delivered to Concierge</p>
            <p className="mt-0.5">Thank you for reaching out. Our guest relations manager will respond within 3 business hours.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1">
            Your Name <span className="text-[#e05326]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Radhika Parekh"
            className={`w-full bg-[#181822] border rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1">
              Email <span className="text-[#e05326]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="radhika@domain.com"
              className={`w-full bg-[#181822] border rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
                errors.email ? 'border-rose-500 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1">
              Phone Number <span className="text-[#e05326]">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98250 12345"
              className={`w-full bg-[#181822] border rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors ${
                errors.phone ? 'border-rose-500 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
              }`}
            />
            {errors.phone && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1">
            Subject
          </label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-[#181822] border border-[#292938] focus:border-[#e05326] rounded-xl px-4 py-2.5 text-sm text-[#f4efe4] focus:outline-none"
          >
            <option value="General Inquiry" className="bg-[#14141c]">General Inquiry</option>
            <option value="Private Dining & Banquets" className="bg-[#14141c]">Private Dining & Banquets (10+ Guests)</option>
            <option value="Chef's Special Tasting Menu" className="bg-[#14141c]">Chef's Special Tasting Experience</option>
            <option value="Press & Media Inquiries" className="bg-[#14141c]">Press & Media Inquiries</option>
            <option value="Feedback on Recent Visit" className="bg-[#14141c]">Feedback on Recent Visit</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#d4cebe] font-medium mb-1">
            Message <span className="text-[#e05326]">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us how we may assist you..."
            className={`w-full bg-[#181822] border rounded-xl px-4 py-3 text-sm text-[#f4efe4] placeholder-[#6b675d] focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-rose-500 bg-rose-950/10' : 'border-[#292938] focus:border-[#e05326]'
            }`}
          />
          {errors.message && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
        </div>

        {/* Send Button */}
        <button
          id="contact-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-[#f7f4eb] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-lg shadow-[#e05326]/25 border border-[#f89e5a]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
