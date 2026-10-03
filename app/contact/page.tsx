'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  Send,
  Upload,
  Paperclip,
  Calculator,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function ContactPage() {
  const { openSampleModal } = useUI();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Delhi',
    projectType: 'Residential',
    productInterests: ['Charcoal Louvers'],
    approxArea: '250',
    unit: 'sq.ft',
    timeline: 'Immediate (1–2 weeks)',
    message: '',
    fileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleProductToggle = (prod: string) => {
    setFormData((prev) => {
      const exists = prev.productInterests.includes(prod);
      if (exists) {
        return {
          ...prev,
          productInterests: prev.productInterests.filter((p) => p !== prod),
        };
      } else {
        return {
          ...prev,
          productInterests: [...prev.productInterests, prod],
        };
      }
    });
  };

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productCategory: formData.productInterests.join(', '),
        }),
      });
      setIsSuccess(true);
      trackEvent('quote_submit', {
        source: 'contact_page_form',
        product: formData.productInterests.join(', '),
        value: formData.approxArea,
      });
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCustomWhatsAppText = () => {
    return `Hi Gordon, I submitted an enquiry for:\n• Products: ${formData.productInterests.join(', ')}\n• Approx Area: ${formData.approxArea} ${formData.unit}\n• Project Type: ${formData.projectType}\n• City: ${formData.city}\n• Name: ${formData.name}\n• Phone: ${formData.phone}`;
  };

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="LocalBusiness"
        data={{
          name: 'Contact GORDON Architectural Wall Solutions',
          description: 'Get quotes, check stock, and order samples from our Wazirpur central warehouse in Delhi.',
        }}
      />

      {/* Header */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 sm:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              <span>Direct Trade & Sales Desk</span>
              <span aria-hidden="true">·</span>
              <span>Delhi NCR</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC]">
              Request a Quote & Technical Takeoff
            </h1>
            <p className="text-sm sm:text-base text-[#C5BEB3] leading-relaxed">
              Share your wall dimensions, drawings, or product shade requirements. Our Delhi estimating desk provides immediate BOQ calculations, wholesale rate cards, and sample dispatches.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Side Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Conversion Form Left */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-md border border-[#E5DFD5] shadow-md">
            {isSuccess ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-[#B08D57]/20 text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif-display text-[#1C1C1C]">
                  Quote Request Submitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#595754] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1C1C1C]">{formData.name}</span>. Our Wazirpur team will prepare your material estimate for {formData.productInterests.join(' & ')} within 2 business hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={COMPANY_INFO.getWhatsAppLink(getCustomWhatsAppText())}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', { source: 'contact_success_whatsapp' })}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="w-full sm:w-auto px-5 py-3.5 bg-[#141414] hover:bg-[#282828] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif-display text-[#1C1C1C]">
                    Project & Quote Details
                  </h3>
                  <p className="text-xs text-[#595754] mt-1">
                    Fill out the fields below for an accurate material estimate.
                  </p>
                </div>

                {/* Products Multi-select */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-2">
                    Materials of Interest (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Charcoal Louvers (Fluted Slats)',
                      'PVC UV Panels (Marble Sheets)',
                      'Architectural Metal Trims (Bronze/Black)',
                      'Acoustic Decorative Panels',
                    ].map((item) => (
                      <label
                        key={item}
                        className={`flex items-center gap-2.5 p-3 rounded-sm border cursor-pointer transition-colors ${
                          formData.productInterests.includes(item)
                            ? 'bg-[#FAF8F5] border-[#B08D57] font-semibold text-[#1C1C1C]'
                            : 'bg-white border-[#E5DFD5] text-[#555] hover:border-[#BBB]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.productInterests.includes(item)}
                          onChange={() => handleProductToggle(item)}
                          className="accent-[#B08D57] rounded"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Phone / WhatsApp Number (+91) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98110XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Project City / Location in Delhi NCR *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    >
                      <option value="Delhi">Delhi (South / West / Central / North)</option>
                      <option value="Gurgaon">Gurgaon (Golf Course / Sohna / Cyber City)</option>
                      <option value="Noida & Greater Noida">Noida & Greater Noida</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Ghaziabad">Ghaziabad</option>
                      <option value="Other North India">Other North India</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    >
                      <option value="Residential">Residential (Villa / Penthouse / Flat)</option>
                      <option value="Commercial">Commercial (Office / Retail / Clinic)</option>
                      <option value="Hospitality">Hospitality (Hotel / Cafe / Lounge)</option>
                      <option value="Trade / Specifier">Architect / Contractor Trade Order</option>
                    </select>
                  </div>

                  {/* Approx Area */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Approximate Area (Sq.Ft)
                    </label>
                    <input
                      type="number"
                      min="10"
                      max="100000"
                      value={formData.approxArea}
                      onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                {/* File Upload Simulation */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                    Upload CAD / Elevation / Floor Plan / Photos (Optional)
                  </label>
                  <div className="p-4 border-2 border-dashed border-[#D5CFBE] rounded-sm text-center bg-[#FAF8F5] hover:border-[#B08D57] transition-colors relative cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileSimulate}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <Paperclip className="w-5 h-5 text-[#8A6B3D]" />
                      <span className="text-xs font-medium text-[#1C1C1C]">
                        {formData.fileName ? formData.fileName : 'Click or drag drawings / PDFs / photos here'}
                      </span>
                      <span className="text-[10px] text-[#888]">Supported: PDF, DWG, JPG, PNG (Max 25MB)</span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                    Specific Shades or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Please quote Nero Matte louvers for a 12 ft x 9.5 ft wall in Vasant Vihar with matching bronze edge trims..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3.5 py-2.5 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#B08D57] hover:bg-[#C5A069] active:bg-[#967442] text-[#141414] font-bold text-xs uppercase tracking-[0.18em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Calculating Quote...' : 'Submit for Material Quote & BOQ'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Side Panel Right */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-[#141414] text-[#F5F2EC] p-6 sm:p-8 rounded-md border border-[#2A2A2A] shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">
                  Delhi Central Warehouse & Trade Desk
                </span>
                <h3 className="text-2xl font-bold font-serif-display text-[#F5F2EC]">
                  Connect with Gordon
                </h3>
              </div>

              <div className="space-y-4 text-xs border-y border-[#282828] py-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8A83] block">Direct Phone:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      onClick={() => trackEvent('call_click', { source: 'contact_side_panel' })}
                      className="text-[#F5F2EC] font-semibold text-sm hover:text-[#B08D57] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8A83] block">WhatsApp Instant Enquiry:</span>
                    <a
                      href={COMPANY_INFO.getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('whatsapp_click', { source: 'contact_side_panel' })}
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      +91 7582-808-808 (Fastest Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8A83] block">Warehouse / Facility:</span>
                    <p className="text-[#D8D4CC] leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8A83] block">Operating Hours:</span>
                    <p className="text-[#D8D4CC]">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={COMPANY_INFO.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'contact_side_panel_button' })}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>

                <button
                  type="button"
                  onClick={() => openSampleModal()}
                  className="w-full py-3 bg-[#242424] hover:bg-[#303030] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors"
                >
                  Request Sample Box by Courier
                </button>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="bg-white p-2 rounded-md border border-[#E5DFD5] shadow-sm overflow-hidden">
              <div className="relative w-full h-[260px] rounded-sm overflow-hidden">
                <iframe
                  title="Gordon Interior Delhi Map"
                  src={COMPANY_INFO.address.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
