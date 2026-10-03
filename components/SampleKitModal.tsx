'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, PackageCheck, Send, MessageSquare } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { COMPANY_INFO } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function SampleKitModal() {
  const { sampleModalOpen, closeSampleModal, samplePreset } = useUI();

  const [formData, setFormData] = useState({
    name: '',
    firmOrRole: '',
    phone: '',
    email: '',
    deliveryAddress: '',
    pinCode: '',
    city: 'Delhi',
    sampleTypes: ['Charcoal Louver Swatches (All Shades)', 'PVC UV Marble Slabs (High Gloss)'],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!sampleModalOpen) return null;

  const handleCheckbox = (type: string) => {
    setFormData((prev) => {
      const exists = prev.sampleTypes.includes(type);
      if (exists) {
        return { ...prev, sampleTypes: prev.sampleTypes.filter((t) => t !== type) };
      } else {
        return { ...prev, sampleTypes: [...prev.sampleTypes, type] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          presetNote: samplePreset.finishName,
          subject: 'Sample Box Request',
          type: 'sample_kit',
        }),
      });
      setIsSuccess(true);
      trackEvent('sample_request', {
        product: formData.sampleTypes.join(', '),
        source: 'sample_modal',
      });
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppSampleText = () => {
    return `Hi Gordon, I'd like to request an Architect/Designer Sample Kit for:\n• Samples: ${formData.sampleTypes.join(', ')}\n• Firm/Name: ${formData.name} (${formData.firmOrRole || 'Designer'})\n• Address: ${formData.deliveryAddress}, ${formData.city} - ${formData.pinCode}\n• Phone: ${formData.phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-xl bg-[#181818] border border-[#2E2E2E] rounded-md shadow-2xl overflow-hidden text-[#E5E5E5] my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2A2A2A] bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <PackageCheck className="w-5 h-5 text-[#B08D57]" />
            <h3 className="text-base font-semibold text-[#F5F2EC]">
              Request Designer Sample Box (Delhi NCR)
            </h3>
          </div>
          <button
            type="button"
            onClick={closeSampleModal}
            className="text-[#8E8A83] hover:text-white p-1 rounded-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#B08D57]/20 text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-[#F5F2EC] font-serif-display">
                Sample Dispatch Scheduled
              </h4>
              <p className="text-sm text-[#A8A399] max-w-md mx-auto">
                Thank you, <span className="text-[#F5F2EC] font-medium">{formData.name}</span>. Your tactile material folder is being packed at our Wazirpur central warehouse for dispatch across Delhi NCR within 24–48 hours.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.getWhatsAppLink(getWhatsAppSampleText())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'sample_success_screen' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Track via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  closeSampleModal();
                }}
                className="w-full sm:w-auto px-5 py-3 bg-[#262626] hover:bg-[#333] text-[#F5F2EC] text-xs font-medium uppercase tracking-wider rounded-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <p className="text-xs text-[#A8A399]">
              Touch and evaluate true material density, fluted profiles, and UV gloss under real project lighting. Delivered to studios and job sites across Delhi, Gurgaon, Noida, and NCR.
            </p>

            {/* Sample selection checkboxes */}
            <div>
              <label className="block text-xs font-medium text-[#C5BEB3] mb-2">
                Select Materials Required in Sample Box:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  'Charcoal Louver Swatches (All Shades)',
                  'PVC UV Marble Slabs (High Gloss)',
                  'Matte Stone & Travertine Swatches',
                  'Brushed Bronze Architectural Trims',
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 p-2.5 bg-[#202020] border border-[#2E2E2E] rounded cursor-pointer hover:border-[#B08D57] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.sampleTypes.includes(item)}
                      onChange={() => handleCheckbox(item)}
                      className="accent-[#B08D57] rounded"
                    />
                    <span className="text-[#E5E5E5]">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ar. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  Firm / Profession *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Architecture Studio / Contractor / Homeowner"
                  value={formData.firmOrRole}
                  onChange={(e) => setFormData({ ...formData, firmOrRole: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  Mobile / WhatsApp (+91) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98100XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  Email (for dispatch tracking)
                </label>
                <input
                  type="email"
                  placeholder="designer@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                Studio / Project Delivery Address in Delhi NCR *
              </label>
              <textarea
                rows={2}
                placeholder="Full street address, studio name, building, and nearby landmark..."
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 110001 / 122002"
                  value={formData.pinCode}
                  onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#2A2A2A]">
              <button
                type="button"
                onClick={closeSampleModal}
                className="px-4 py-2.5 bg-[#262626] hover:bg-[#333] text-xs font-medium rounded-sm text-[#C5BEB3]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                {isSubmitting ? 'Packing Box...' : 'Dispatch Sample Box'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
