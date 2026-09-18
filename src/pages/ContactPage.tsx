import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Sparkles, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            Location & Concierge Desk
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          GET IN TOUCH
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          We welcome your inquiries, feedback, and special banquet requests. Visit us in Bodakdev or connect with our concierge team below.
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
                    Restaurant Address
                  </h3>
                  <p className="text-sm text-[#d4cebe] leading-relaxed">
                    {RESTAURANT_INFO.address.line1}
                  </p>
                  <p className="text-sm text-[#9e988c] leading-relaxed">
                    {RESTAURANT_INFO.address.line2}, {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#c5a059] font-medium">
                    <Car className="w-3.5 h-3.5 text-[#e05326]" />
                    <span>Complimentary Valet Parking Available</span>
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
                    <p className="text-xs uppercase tracking-wider text-[#8e887c]">Direct Line</p>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base font-serif text-[#f4efe4] hover:text-[#f89e5a] transition-colors"
                    >
                      {RESTAURANT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#1e1e2b]">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e887c]">General & Press Email</p>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-sm text-[#f4efe4] hover:text-[#f89e5a] transition-colors"
                    >
                      {RESTAURANT_INFO.email}
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
                    Dining Timings
                  </h3>
                  <div className="text-xs text-[#a09b8e] space-y-1">
                    <p className="text-[#f4efe4] font-medium">Monday – Thursday:</p>
                    <p>12:00 PM – 11:00 PM (Continuous Kitchen)</p>
                  </div>
                  <div className="text-xs text-[#a09b8e] space-y-1 pt-2 border-t border-[#1e1e2b]">
                    <p className="text-[#f4efe4] font-medium">Friday – Sunday:</p>
                    <p>12:00 PM – 12:00 AM Midnight</p>
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

        {/* Styled Interactive Map Section */}
        <div className="bg-[#121219] border border-[#232332] rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-[#20202d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e05326] font-medium font-sans">
                Location Map
              </span>
              <h3 className="font-serif text-2xl text-[#f4efe4] mt-0.5">
                Finding OneTen in Ahmedabad
              </h3>
              <p className="text-xs text-[#9d978a] mt-1">
                Centrally located on SG Highway, opposite Pakwan junction in the prime Bodakdev dining enclave.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Bodakdev,Ahmedabad,Gujarat,India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1c28] hover:bg-[#e05326] text-xs text-white uppercase tracking-wider font-semibold transition-colors border border-[#2d2d3e]"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Styled Luxury Dark Map Placeholder (Clean visual map design with landmarks) */}
          <div className="relative aspect-[16/8] min-h-[300px] w-full bg-[#0d0d12] flex items-center justify-center overflow-hidden">
            {/* Subtle grid lines & map contours */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute w-[600px] h-[350px] border border-[#e05326]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Roads & intersections graphics */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#c5a059" strokeWidth="4" />
              <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#a09b8e" strokeWidth="2" strokeDasharray="8 6" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e05326" strokeWidth="4" />
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#a09b8e" strokeWidth="1.5" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#a09b8e" strokeWidth="1.5" />
            </svg>

            {/* Central Luxury Pin */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#e05326] to-[#f89e5a] p-1 shadow-2xl shadow-[#e05326]/60 flex items-center justify-center border-2 border-white">
                <MapPin className="w-6 h-6 text-[#0b0b0e] fill-[#0b0b0e]" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-[#0b0b0e]/90 border border-[#e05326]/60 text-[11px] text-[#f4efe4] font-serif font-bold tracking-wider shadow-lg whitespace-nowrap">
                ONETEN · THE PAVILION
              </div>
            </div>

            {/* Surrounding Landmark Labels */}
            <div className="absolute top-6 left-8 bg-[#121219]/90 border border-[#252535] px-3 py-1 rounded text-[11px] text-[#a09a8e] hidden sm:block">
              SG Highway Corridor
            </div>
            <div className="absolute bottom-6 right-8 bg-[#121219]/90 border border-[#252535] px-3 py-1 rounded text-[11px] text-[#a09a8e] hidden sm:block">
              Pakwan Junction · Bodakdev
            </div>
          </div>

          {/* Transit and Arrival Details */}
          <div className="p-6 bg-[#101016] border-t border-[#20202d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#a09a8e]">
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">From Sardar Vallabhbhai Airport:</span>
              <span>18 km · Approx 35 mins via Airport Road & SG Highway</span>
            </div>
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">From Kalupur Railway Station:</span>
              <span>14 km · Approx 30 mins via Drive-In Road</span>
            </div>
            <div>
              <span className="text-[#f4efe4] font-medium block mb-0.5">Chauffeur & Valet:</span>
              <span>Dedicated valet bay at The Pavilion main entrance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
