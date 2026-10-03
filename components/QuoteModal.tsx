'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { COMPANY_INFO } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function QuoteModal() {
  const { quoteModalOpen, closeQuoteModal, quotePreset } = useUI();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Delhi',
    projectType: 'Residential',
    productCategory: 'Charcoal Louvers',
    approxArea: '200',
    unit: 'sq.ft',
    timeline: 'Within 2 weeks',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Derived active category from preset or local state
  const activeCategory = quotePreset.product || formData.productCategory;
  const activeAreaStr = quotePreset.area || formData.approxArea;
  const area = parseFloat(activeAreaStr) || 0;

  // Derive estimated panels without needing useEffect
  let estimatedPanels = 0;
  if (area > 0) {
    if (activeCategory.includes('Louver')) {
      estimatedPanels = Math.ceil(area / 3.75);
    } else if (activeCategory.includes('UV')) {
      estimatedPanels = Math.ceil(area / 32);
    } else {
      estimatedPanels = Math.ceil(area / 10);
    }
  }

  if (!quoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productCategory: activeCategory,
          approxArea: activeAreaStr,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        trackEvent('quote_submit', {
          product: activeCategory,
          value: activeAreaStr,
          source: 'quote_modal',
        });
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCustomWhatsAppText = () => {
    return `Hi Gordon, I would like a trade quote for:\n• Product: ${activeCategory}\n• Approx Area: ${activeAreaStr} ${formData.unit} (Est. ${estimatedPanels} ${activeCategory.includes('UV') ? 'sheets' : 'panels'})\n• Project: ${formData.projectType} in ${formData.city}\n• Name: ${formData.name || 'Architect/Client'}\n• Phone: ${formData.phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-[#2E2E2E] rounded-md shadow-2xl overflow-hidden text-[#E5E5E5] my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2A2A2A] bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-[#B08D57]" />
            <h3 className="text-base font-semibold text-[#F5F2EC]">
              Request Material Estimate & Trade Quotation
            </h3>
          </div>
          <button
            type="button"
            onClick={closeQuoteModal}
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
                Quote Request Received
              </h4>
              <p className="text-sm text-[#A8A399] max-w-md mx-auto">
                Thank you, <span className="text-[#F5F2EC] font-medium">{formData.name || 'Valued Client'}</span>. Our Wazirpur logistics & trade desk is preparing your BOQ rate card for {activeCategory}.
              </p>
            </div>

            <div className="p-4 bg-[#202020] border border-[#2E2E2E] rounded text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-[#8E8A83]">
                <span>Product:</span>
                <span className="text-[#F5F2EC] font-medium">{activeCategory}</span>
              </div>
              <div className="flex justify-between text-[#8E8A83]">
                <span>Estimated Quantity:</span>
                <span className="text-[#B08D57] font-semibold">~{estimatedPanels} {activeCategory.includes('UV') ? 'Sheets (8×4 ft)' : 'Panels (9.5 ft)'} ({activeAreaStr} sq.ft)</span>
              </div>
              <div className="flex justify-between text-[#8E8A83]">
                <span>Project Location:</span>
                <span className="text-[#F5F2EC]">{formData.city} ({formData.projectType})</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.getWhatsAppLink(getCustomWhatsAppText())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'quote_success_screen' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Instant Answer on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  closeQuoteModal();
                }}
                className="w-full sm:w-auto px-5 py-3 bg-[#262626] hover:bg-[#333] text-[#F5F2EC] text-xs font-medium uppercase tracking-wider rounded-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Category */}
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Material Collection *
                </label>
                <select
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                >
                  <option value="Charcoal Louvers">Charcoal Louvers (Fluted Slat Panels)</option>
                  <option value="PVC UV Panels">PVC UV Panels (Marble & Stone Sheets)</option>
                  <option value="Architectural Décor">Architectural Décor & Metal Trims</option>
                  <option value="Complete Range / Multi-Product">Complete Range / Multi-Product Project</option>
                </select>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                >
                  <option value="Residential">Residential (Villa / Penthouse / Apartment)</option>
                  <option value="Commercial">Commercial (Office / Tech Park / Retail)</option>
                  <option value="Hospitality">Hospitality (Hotel / Cafe / Lounge)</option>
                  <option value="Architect / Trade Specifier">Architect / Trade Specifier Stock</option>
                </select>
              </div>
            </div>

            {/* Area Estimator Row */}
            <div className="p-3.5 bg-[#202020] border border-[#2A2A2A] rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-[#C5BEB3] mb-1">
                    Approximate Wall Area (Sq.Ft)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="10"
                      max="50000"
                      value={formData.approxArea}
                      onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                      className="w-32 bg-[#181818] border border-[#3A3A3A] rounded-sm px-3 py-1.5 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none tabular-nums"
                      required
                    />
                    <span className="text-xs text-[#8E8A83]">sq.ft</span>
                  </div>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[#2E2E2E]">
                  <div className="text-[11px] text-[#8E8A83] uppercase tracking-wider">Estimated Quantity:</div>
                  <div className="text-sm font-bold text-[#B08D57] tabular-nums">
                    ≈ {estimatedPanels} {activeCategory.includes('UV') ? 'Sheets (8×4 ft)' : 'Panels (9.5 ft pcs)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ar. Sameer Khanna / Rajesh Gupta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Mobile / WhatsApp Number (+91) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98110XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                  Site / City in Delhi NCR *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
                  required
                >
                  <option value="Delhi - South / Central / West">Delhi (South / Central / West / North)</option>
                  <option value="Gurgaon">Gurgaon (Golf Course / Sohna / Cyber City)</option>
                  <option value="Noida & Greater Noida">Noida & Greater Noida</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Other North India">Other North India Location</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#C5BEB3] mb-1.5">
                Specific Shade Preference / Special Instructions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Looking for Nero Matte Louvers for a TV backdrop + Calacatta Gold for entrance foyer..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#202020] border border-[#333] rounded-sm px-3 py-2 text-sm text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#2A2A2A]">
              <a
                href={COMPANY_INFO.getWhatsAppLink(getCustomWhatsAppText())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'quote_modal_fast_button' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#25D366] hover:underline py-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast-track on WhatsApp</span>
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="w-1/2 sm:w-auto px-4 py-2.5 bg-[#262626] hover:bg-[#333] text-xs font-medium rounded-sm text-[#C5BEB3]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  {isSubmitting ? (
                    <span>Calculating...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
