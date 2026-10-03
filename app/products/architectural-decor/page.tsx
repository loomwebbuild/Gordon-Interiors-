'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Layers,
  Download
} from 'lucide-react';
import { COLLECTIONS_DATA, COMPANY_INFO } from '@/lib/data';
import MaterialCalculator from '@/components/MaterialCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function ArchitecturalDecorPage() {
  const collection = COLLECTIONS_DATA.find((c) => c.id === 'architectural-decor')!;
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Product"
        data={{
          name: 'Gordon Architectural Decor & Metal Trims',
          description: collection.longDescription,
          category: 'Architectural Profiles & Trims',
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#141414] text-[#F5F2EC] py-20 sm:py-28 overflow-hidden border-b border-[#2A2A2A]">
        <div className="absolute inset-0 z-0">
          <Image
            src={collection.heroImage}
            alt="Gordon Architectural Decor & Metal Trims"
            fill
            priority
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57] bg-[#222]/80 backdrop-blur-sm px-3 py-1 rounded">
              <span>Collection 03</span>
              <span aria-hidden="true">·</span>
              <span>Architectural Trims & Accents</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif-display text-[#F5F2EC] leading-tight">
              Architectural Décor & Metal Profiles
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#C5BEB3] leading-relaxed">
              Curated finishing elements engineered for architects and interior designers. Anodized brushed bronze, matte black, and champagne gold profiles with integrated LED shadowline channels.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[#E5E5E5] pt-2">
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Finishes: </span>
                <span className="font-semibold text-[#B08D57]">Brushed Bronze, Matte Black, PVD Gold</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Lighting: </span>
                <span className="font-semibold text-[#B08D57]">Integrated LED Diffuser Channels</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Length: </span>
                <span className="font-semibold text-[#B08D57]">2900mm / 3050mm Continuous</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent('quote_submit', { product: 'Architectural Decor', source: 'decor_hero' });
                  openQuoteModal({ product: 'Architectural Décor' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Get Trim Pricing & CAD
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { product: 'Metal Trims', source: 'decor_hero' });
                  openSampleModal({ finishName: 'Architectural Metal Trims' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors"
              >
                Request Profile Sample Kit
              </button>

              <a
                href={COMPANY_INFO.getWhatsAppLink("Hi Gordon, I'd like info on Architectural Trims and LED profiles.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#25D366] hover:underline py-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Finishes & Profiles Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
            Precision Accents
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
            Metallic Transitions & Reveal Profiles
          </h2>
          <p className="text-sm text-[#595754] mt-2">
            Eliminate awkward caulking joints and uneven edges. Create razor-sharp architectural recesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collection.finishes.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-[#E5DFD5] rounded-md overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B08D57] transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-sm border border-black/10 shadow-sm"
                    style={{ backgroundColor: f.colorHex }}
                  />
                  <span className="text-xs font-mono text-[#8E8A83] bg-[#F5F2EC] px-2.5 py-1 rounded">
                    {f.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1C1C1C] font-serif-display">
                    {f.name}
                  </h3>
                  <p className="text-xs text-[#595754] mt-1.5 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#F0ECE4] text-xs text-[#595754]">
                  <div className="flex justify-between">
                    <span className="text-[#8E8A83]">Extrusion:</span>
                    <span className="font-medium text-[#1C1C1C]">6063-T5 Alloy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E8A83]">Lengths:</span>
                    <span className="font-medium text-[#1C1C1C]">2900mm / 3050mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E8A83]">Surface Treatment:</span>
                    <span className="font-medium text-[#B08D57]">15µm Anodizing</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F0ECE4]">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ product: `Trim - ${f.name}` })}
                  className="w-full py-2.5 bg-[#141414] hover:bg-[#B08D57] hover:text-[#141414] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors mt-4"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications & Lighting Channel Details */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                <Lightbulb className="w-4 h-4" />
                <span>Integrated Lighting</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1C1C]">
                LED Shadowline & Diffuser Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
                Engineered to house continuous COB and SMD LED strips up to 12mm wide. The snap-in polycarbonate milky diffuser creates uninterrupted indirect ambient glow along the perimeter of TV consoles, ceiling drops, and bedhead niches with zero visible LED pixelation.
              </p>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => openCatalogueModal()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141414] text-[#F5F2EC] text-xs font-bold uppercase tracking-wider rounded-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Download Profile Dimension Sheet</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md border border-[#E5DFD5] shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-[#1C1C1C]">Available Profile Geometries</h4>
              <div className="space-y-2 text-xs text-[#595754]">
                <div className="p-3 bg-[#FAF8F5] rounded border border-[#F0ECE4]">
                  <span className="font-bold text-[#1C1C1C]">T-Profile (10mm, 15mm, 20mm):</span>
                  <p className="mt-0.5">Flush transition between adjacent panels or floor-to-wall expansion gaps.</p>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded border border-[#F0ECE4]">
                  <span className="font-bold text-[#1C1C1C]">U-Channel Outer Reveal (12mm):</span>
                  <p className="mt-0.5">Frames perimeter borders against painted drywall or ceiling drops.</p>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded border border-[#F0ECE4]">
                  <span className="font-bold text-[#1C1C1C]">External 90° Corner Angle:</span>
                  <p className="mt-0.5">Protects vulnerable corner joints in high-traffic commercial hallways.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Material & Trim Estimator */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MaterialCalculator
          defaultProduct="architectural-decor"
          title="Architectural Trim & Reveal Length Calculator"
          subtitle="Calculate perimeter linear footage, metallic profile requirements, and corner transitions for your wall layouts."
        />
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={collection.faqs} title="Architectural Décor FAQs" />
      </section>
    </div>
  );
}
