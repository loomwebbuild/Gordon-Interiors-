'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  PackageCheck,
  Truck,
  Download,
  FileCheck2,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Building,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function ForProfessionalsPage() {
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  const [tradeForm, setTradeForm] = useState({
    name: '',
    firmName: '',
    role: 'Principal Architect',
    phone: '',
    email: '',
    city: 'Delhi',
    estimatedVolume: '500 – 2,000 sq.ft / quarter',
    gstin: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTradeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...tradeForm,
          type: 'trade_partner_application',
          subject: `Trade Account Application - ${tradeForm.firmName}`,
        }),
      });

      setSubmitted(true);
      trackEvent('quote_submit', {
        source: 'trade_page_partner_form',
        label: tradeForm.firmName,
      });
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Organization"
        data={{
          name: 'GORDON Interior Trade & Architect Services',
          description: 'Trade desk, wholesale pricing, and express sample dispatch for architects and interior designers in Delhi NCR.',
        }}
      />

      {/* Hero */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 sm:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              <span>Architect & Trade Desk</span>
              <span aria-hidden="true">·</span>
              <span>B2B Supply</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC]">
              Engineered for Specifiers. Priced for Trade.
            </h1>

            <p className="text-sm sm:text-base text-[#C5BEB3] leading-relaxed">
              We partner directly with architecture firms, interior design studios, and turnkey contracting companies across Delhi NCR. Get wholesale trade rate cards, physical presentation sample boxes, and priority Wazirpur warehouse dispatch.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { source: 'trade_hero' });
                  openSampleModal();
                }}
                className="px-5 py-3 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Request Free Architect Sample Box
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('catalogue_download', { source: 'trade_hero' });
                  openCatalogueModal();
                }}
                className="px-5 py-3 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Download CAD & Specs (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-[#E5DFD5] rounded-md shadow-sm space-y-3">
            <div className="p-3 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] font-serif-display">
              Tiered Trade Pricing & BOQ Takeoff
            </h3>
            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              Access transparent square-foot and per-piece wholesale pricing. Send us your elevation drawings for complimentary panel quantity takeoff and wastage calculations.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#E5DFD5] rounded-md shadow-sm space-y-3">
            <div className="p-3 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] font-serif-display">
              Luxury Client Presentation Kits
            </h3>
            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              High-end bound material folders containing genuine tactile swatches of all charcoal louver finishes, high-gloss UV marbles, and metallic bronze trims for your studio library.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#E5DFD5] rounded-md shadow-sm space-y-3">
            <div className="p-3 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] font-serif-display">
              Delhi NCR Job-Site Logistics
            </h3>
            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              Direct dispatch from our central Wazirpur warehouse straight to project sites across South Delhi, Gurgaon, Noida, and Faridabad with zero transit delays.
            </p>
          </div>
        </div>
      </section>

      {/* Main Trade Partner Form + Benefits */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: What We Offer */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
                Trade Program
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1C1C]">
                Why Design Studios Partner with Gordon
              </h2>
              <p className="text-xs sm:text-sm text-[#595754] mt-2 leading-relaxed">
                As a dedicated importer and stockist, our sole mission is enabling your designs to be built flawlessly on budget and on schedule.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#444]">
              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5DFD5] rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Zero Batch Color Drift:</span>
                  <p className="text-xs text-[#666] mt-0.5">Calibrated extrusion runs prevent shade mismatches when ordering across multiple rooms or phases.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5DFD5] rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Dedicated Trade Account Manager:</span>
                  <p className="text-xs text-[#666] mt-0.5">Direct phone and WhatsApp access for instant stock reservations and site delivery tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5DFD5] rounded-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Installer Referral Network:</span>
                  <p className="text-xs text-[#666] mt-0.5">We connect your projects with vetted panel fixing specialists for seamless turnkey installation.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#141414] text-[#F5F2EC] rounded-sm space-y-2 text-xs">
              <div className="font-bold text-[#B08D57]">Need Urgent Site Samples Today?</div>
              <p className="text-[#A8A399]">
                Call our Wazirpur trade desk directly at <span className="text-white font-mono">{COMPANY_INFO.phone}</span> or message on WhatsApp for instant 3-hour courier dispatch in Delhi.
              </p>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-md border border-[#E5DFD5] shadow-md">
            <h3 className="text-xl font-bold font-serif-display text-[#1C1C1C] mb-1">
              Apply for an Architect & Trade Account
            </h3>
            <p className="text-xs text-[#595754] mb-6">
              Register your studio or contracting firm to receive trade rate cards and your complimentary sample folder.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#FAF8F5] border border-[#B08D57]/40 rounded-sm text-center space-y-4">
                <div className="w-12 h-12 bg-[#B08D57]/20 text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#1C1C1C] font-serif-display">
                  Trade Account Request Received
                </h4>
                <p className="text-xs text-[#595754] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1C1C1C]">{tradeForm.name}</span> ({tradeForm.firmName}). Our Delhi trade manager will contact you within 2 business hours with your wholesale rate card and sample kit tracking details.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#8A6B3D] underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTradeSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ar. Sameer Malhotra"
                      value={tradeForm.name}
                      onChange={(e) => setTradeForm({ ...tradeForm, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Firm / Studio Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Studio Vista Architecture"
                      value={tradeForm.firmName}
                      onChange={(e) => setTradeForm({ ...tradeForm, firmName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Professional Role *
                    </label>
                    <select
                      value={tradeForm.role}
                      onChange={(e) => setTradeForm({ ...tradeForm, role: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    >
                      <option value="Principal Architect">Principal Architect</option>
                      <option value="Interior Designer / Consultant">Interior Designer / Consultant</option>
                      <option value="Turnkey Interior Contractor">Turnkey Interior Contractor</option>
                      <option value="Builder / Developer">Builder / Real Estate Developer</option>
                      <option value="Modular Furniture OEM">Modular Furniture OEM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Mobile / WhatsApp (+91) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98110XXXXX"
                      value={tradeForm.phone}
                      onChange={(e) => setTradeForm({ ...tradeForm, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="architect@firm.com"
                      value={tradeForm.email}
                      onChange={(e) => setTradeForm({ ...tradeForm, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                      Location / Base City *
                    </label>
                    <select
                      value={tradeForm.city}
                      onChange={(e) => setTradeForm({ ...tradeForm, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                      required
                    >
                      <option value="Delhi">Delhi (South / Central / West / North)</option>
                      <option value="Gurgaon">Gurgaon (Golf Course / Cyber City)</option>
                      <option value="Noida & Greater Noida">Noida & Greater Noida</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Ghaziabad">Ghaziabad</option>
                      <option value="Other North India">Other North India Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                    GSTIN / Business Registration (Optional for billing)
                  </label>
                  <input
                    type="text"
                    placeholder="07AAAAA0000A1Z5"
                    value={tradeForm.gstin}
                    onChange={(e) => setTradeForm({ ...tradeForm, gstin: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none uppercase font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-1">
                    Current Project Details or Material Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Currently designing a 4-bedroom residence in South Delhi requiring ~600 sq.ft of matte charcoal louvers..."
                    value={tradeForm.notes}
                    onChange={(e) => setTradeForm({ ...tradeForm, notes: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBE] rounded-sm px-3 py-2 text-sm text-[#1C1C1C] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Registering Account...' : 'Register for Trade Pricing & Sample Box'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
