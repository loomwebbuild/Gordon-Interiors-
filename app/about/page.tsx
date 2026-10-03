'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Building,
  CheckCircle2,
  Package,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function AboutPage() {
  const { openQuoteModal, openSampleModal } = useUI();

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Organization"
        data={{
          name: 'GORDON Interior Décor Materials',
          description: 'Delhi-based direct importer and supplier of architectural wall solutions, charcoal louvers, and PVC UV panels.',
        }}
      />

      {/* Hero */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 sm:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              <span>About Gordon Interior</span>
              <span aria-hidden="true">·</span>
              <span>Delhi, India</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC]">
              Supplying Architectural Character
            </h1>
            <p className="text-sm sm:text-base text-[#C5BEB3] leading-relaxed">
              GORDON (Gordon Interior) is a specialized direct importer, stockist, and B2B/B2C supplier of premium interior décor materials and architectural wall solutions, based in Wazirpur, Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity / Core Mission */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-4 bg-[#EAE5DB] border-l-4 border-[#B08D57] text-xs font-semibold text-[#1C1C1C]">
              Important Clarity: GORDON is a pure material supplier and importer. We do not provide interior turnkey contracting or design services. We supply high-grade materials to architects, designers, builders, and homeowners.
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1C1C]">
              Filling the Gap Between Ordinary Slatting and True Architectural Detail
            </h2>

            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              Traditional interior wall treatments in India frequently face severe site challenges: natural wood slats warp under seasonal Delhi NCR humidity, MDF swells from wall seepage, and real marble requires heavy structural support with weeks of wet grinding dust.
            </p>

            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              GORDON was established [PLACEHOLDER - Company Origin] to bridge this gap. By directly importing high-density virgin charcoal polymer louvers, UV cured marble sheets, and precision metallic profiles, we offer materials that install rapidly, require zero periodic maintenance, and maintain pristine aesthetic depth for decades.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openSampleModal()}
                className="px-5 py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Request Material Samples
              </button>
              <Link
                href="/products"
                className="px-5 py-2.5 bg-[#141414] hover:bg-[#282828] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Browse Collections
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-md overflow-hidden shadow-2xl border border-[#E5DFD5]">
            <Image
              src="/images/charcoal_louvers_texture_1791063103204.jpg"
              alt="Gordon Charcoal Wall Louver Macro Texture"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-[#F5F2EC]">
              <span className="text-[11px] font-mono text-[#B08D57] uppercase tracking-wider block mb-0.5">
                Precision Quality
              </span>
              <p className="text-sm font-semibold">
                High-density polymer core with zero volatile organic off-gassing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Gordon Apart (Values) */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
              Our Principles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1C1C]">
              What Makes the Gordon Range Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <span className="text-2xl font-bold font-serif-display text-[#B08D57]">01</span>
              <h3 className="text-base font-bold text-[#1C1C1C]">Direct Container Imports</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                We eliminate multi-tier distributor markups, passing wholesale trade pricing directly to Delhi NCR architects and contractors.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <span className="text-2xl font-bold font-serif-display text-[#B08D57]">02</span>
              <h3 className="text-base font-bold text-[#1C1C1C]">Shade Calibration Rigor</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                Color consistency across production runs ensures that extension orders match existing walls without optical variation.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <span className="text-2xl font-bold font-serif-display text-[#B08D57]">03</span>
              <h3 className="text-base font-bold text-[#1C1C1C]">Delhi Central Warehouse</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                Our inventory in Wazirpur Industrial Area guarantees immediate site dispatches across Delhi NCR without shipping lead times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom & Warehouse Location with Embedded Map */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
                Visit & Inspect Finishes
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1C1C]">
                Wazirpur Warehouse & Showroom
              </h2>
              <p className="text-xs sm:text-sm text-[#595754] mt-2 leading-relaxed">
                Architects, interior designers, and homeowners are welcome to inspect full 9.5 ft sheets, louver cross-sections, and live illumination displays at our central facility in New West Delhi.
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#444] border-y border-[#E5DFD5] py-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Address:</span>
                  <p className="text-[#595754]">{COMPANY_INFO.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Operating Hours:</span>
                  <p className="text-[#595754]">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1C1C]">Trade Desk Hotline:</span>
                  <p className="text-[#595754]">{COMPANY_INFO.phoneDisplay}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_INFO.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#141414] hover:bg-[#282828] text-[#F5F2EC] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B08D57]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={COMPANY_INFO.getWhatsAppLink("Hi Gordon, I'd like to schedule a visit to the Wazirpur showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold rounded-sm border border-[#25D366]/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Showroom Visit</span>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 bg-white p-2 rounded-md border border-[#E5DFD5] shadow-md overflow-hidden">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-sm overflow-hidden">
              <iframe
                title="Gordon Interior Warehouse Wazirpur Delhi Location Map"
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
      </section>
    </div>
  );
}
