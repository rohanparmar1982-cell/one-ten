import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#c5a059]/30 mb-3">
          <MapPin className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e3ded2] font-medium font-sans">
            Highway Mall, Chandkheda · Ahmedabad
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          CONTACT & LOCATION
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          Visit One Ten Restaurant & Banquet for dining, takeaway, or host your weddings and corporate events in our 1,700 sq. ft. banquet hall.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Direct Contact & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location & Address Card */}
            <div className="bg-[#121219] border border-[#232332] rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#f4efe4] mb-1">
                    Restaurant & Banquet Address
                  </h3>
                  <p className="text-sm text-[#d4cebe] leading-relaxed">
                    {RESTAURANT_INFO.address.line1}
                  </p>
                  <p className="text-sm text-[#d4cebe] leading-relaxed">
                    {RESTAURANT_INFO.address.line2}, {RESTAURANT_INFO.address.city}, Gujarat {RESTAURANT_INFO.address.pincode}
                  </p>
                  <p className="text-xs text-[#c5a059] font-mono mt-1">
                    Plus Code: {RESTAURANT_INFO.address.plusCode}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#4ade80] font-medium">
                    <Car className="w-3.5 h-3.5 text-[#4ade80]" />
                    <span>Ample Mall & Street Parking at Highway Mall</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Card */}
            <div className="bg-[#121219] border border-[#232332] rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e887c]">Direct Calling Line</p>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base font-serif text-[#f4efe4] hover:text-[#f89e5a] transition-colors font-mono"
                    >
                      {RESTAURANT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#1e1e2b]">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e887c]">Official Website</p>
                    <a
                      href={`https://${RESTAURANT_INFO.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#f4efe4] hover:text-[#f89e5a] transition-colors"
                    >
                      {RESTAURANT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Hours Card */}
            <div className="bg-[#121219] border border-[#232332] rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e05326]/10 border border-[#e05326]/30 flex items-center justify-center text-[#e05326] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-3 flex-grow">
                  <h3 className="font-serif text-xl text-[#f4efe4]">
                    Operating Hours
                  </h3>
                  <div className="text-xs text-[#a09b8e] space-y-1">
                    <p className="text-[#f4efe4] font-medium">Daily Service Hours:</p>
                    <p>11:00 AM – 11:00 PM (Monday – Sunday)</p>
                  </div>
                  <div className="text-xs text-[#a09b8e] space-y-1 pt-2 border-t border-[#1e1e2b]">
                    <p className="text-[#f4efe4] font-medium">Fixed Punjabi Thali:</p>
                    <p>Available for Lunch (11:30 AM – 3:30 PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Styled Google Maps Section */}
        <div className="bg-[#121219] border border-[#232332] rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-[#20202d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e05326] font-medium font-sans">
                Google Maps Location
              </span>
              <h3 className="font-serif text-2xl text-[#f4efe4] mt-0.5">
                Finding One Ten at Highway Mall, Chandkheda
              </h3>
              <p className="text-xs text-[#9d978a] mt-1">
                GJ SH 41, near Satyamave Hospital, Chandkheda, Ahmedabad, Gujarat 382424
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=One+Ten+Restaurant+%26+Banquet+Highway+Mall+Chandkheda+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1c28] hover:bg-[#e05326] text-xs text-white uppercase tracking-wider font-semibold transition-colors border border-[#2d2d3e]"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Styled Luxury Dark Map Graphic */}
          <div className="relative aspect-[16/8] min-h-[320px] w-full bg-[#0d0d12] flex items-center justify-center overflow-hidden">
            {/* Subtle grid lines & map contours */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute w-[600px] h-[350px] border border-[#e05326]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Roads & intersections graphics */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#c5a059" strokeWidth="5" />
              <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#a09b8e" strokeWidth="2" strokeDasharray="8 6" />
              <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#e05326" strokeWidth="4" />
              <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#a09b8e" strokeWidth="1.5" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#a09b8e" strokeWidth="1.5" />
            </svg>

            {/* Central Pin for One Ten */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#e05326] to-[#f89e5a] p-1 shadow-2xl shadow-[#e05326]/60 flex items-center justify-center border-2 border-white">
                <MapPin className="w-6 h-6 text-[#0b0b0e] fill-[#0b0b0e]" />
              </div>
              <div className="mt-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0e]/95 border border-[#e05326]/60 text-xs text-[#f4efe4] font-serif font-bold tracking-wider shadow-lg whitespace-nowrap">
                ONE TEN RESTAURANT & BANQUET
              </div>
              <span className="text-[10px] text-[#c5a059] font-mono mt-0.5">Highway Mall, Chandkheda</span>
            </div>

            {/* Surrounding Landmark Labels */}
            <div className="absolute top-6 left-8 bg-[#121219]/90 border border-[#252535] px-3 py-1 rounded text-[11px] text-[#a09a8e] hidden sm:block">
              GJ SH 41 Corridor
            </div>
            <div className="absolute bottom-6 right-8 bg-[#121219]/90 border border-[#252535] px-3 py-1 rounded text-[11px] text-[#a09a8e] hidden sm:block">
              Near Satyamave Hospital
            </div>
          </div>

          {/* Transit and Arrival Details */}
          <div className="p-6 bg-[#101016] border-t border-[#20202d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#a09a8e]">
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">From Motera Stadium:</span>
              <span>Approx 4.5 km · 10 mins drive via Chandkheda Road</span>
            </div>
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">From Sabarmati Junction:</span>
              <span>Approx 6.5 km · 15 mins drive along State Highway 41</span>
            </div>
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">Highway Mall Parking:</span>
              <span>Generous parking spaces for dinner patrons & banquet attendees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
