import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#13131b] border border-[#2b2b3b] max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1e1e28] text-white flex items-center justify-center hover:bg-[#e05326] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#e05326]/15 border border-[#e05326]/30 flex items-center justify-center text-[#e05326]">
            {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#f4efe4]">
              {isPrivacy ? 'Privacy & Guest Confidentiality' : 'Dining Terms & House Guidelines'}
            </h3>
            <p className="text-xs text-[#9d978a]">Ember & Spice · Ahmedabad</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#b8b3a8] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Ember & Spice, we safeguard the privacy and personal details of all our dining guests. When you reserve a table or register with our concierge, information such as your name, contact phone, dietary preferences, and anniversary dates are preserved securely in accordance with Indian information security laws.
              </p>
              <h4 className="font-serif text-base text-[#f4efe4] font-semibold pt-2">Data Utilization</h4>
              <p>
                Your phone number and email are strictly used for booking confirmations, SMS table updates, and seasonal tasting invitations if you have explicitly opted in. We never sell, exchange, or share your contact credentials with third-party marketers.
              </p>
              <h4 className="font-serif text-base text-[#f4efe4] font-semibold pt-2">Special Dietary Information</h4>
              <p>
                All notes regarding Jain preparation, severe allergies, or gluten sensitivities are communicated confidentially to the Executive Chef and kitchen line leads solely for meal preparation.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Ember & Spice. To ensure a serene, unhurried, and safe fine-dining ambiance for all patrons, the following table and reservation policies apply:
              </p>
              <h4 className="font-serif text-base text-[#f4efe4] font-semibold pt-2">Table Grace Period</h4>
              <p>
                Reserved tables are held for 15 minutes past the booking schedule. If delayed due to Ahmedabad traffic or circumstances, please notify the reception concierge at +91 98765 43210.
              </p>
              <h4 className="font-serif text-base text-[#f4efe4] font-semibold pt-2">Dress Code & Ambiance</h4>
              <p>
                We appreciate smart casual or elegant ethnic attire. We kindly request guests to maintain conversational acoustics in the main dining hall and silence electronic devices during dinner services.
              </p>
              <h4 className="font-serif text-base text-[#f4efe4] font-semibold pt-2">Corkage & External Food</h4>
              <p>
                In respect to local state licensing regulations and kitchen sanitation standards, outside food, confections, and beverages are not permitted inside the restaurant premises.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#222230] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#e05326] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#eb5d2f] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
