'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Droplet,
  Flame,
  Layers,
  Download
} from 'lucide-react';
import { COLLECTIONS_DATA, COMPANY_INFO, ProductFinish } from '@/lib/data';
import MaterialCalculator from '@/components/MaterialCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function PvcUvPanelsPage() {
  const collection = COLLECTIONS_DATA.find((c) => c.id === 'pvc-uv-panels')!;
  const [activeFinish, setActiveFinish] = useState<ProductFinish>(collection.finishes[0]);
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Product"
        data={{
          name: 'Gordon PVC UV Marble Wall Sheets',
          description: collection.longDescription,
          category: 'Architectural Stone Cladding Sheets',
          material: 'High-Density PVC with UV Cured Hardcoat',
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#141414] text-[#F5F2EC] py-20 sm:py-28 overflow-hidden border-b border-[#2A2A2A]">
        <div className="absolute inset-0 z-0">
          <Image
            src={collection.heroImage}
            alt="Gordon PVC UV Marble Panels Delhi"
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
              <span>Collection 02</span>
              <span aria-hidden="true">·</span>
              <span>High-Gloss UV Stone Sheets</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif-display text-[#F5F2EC] leading-tight">
              PVC UV Marble Panels
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#C5BEB3] leading-relaxed">
              Mirror-sheen Italian marble aesthetics without the weight, porous fragility, or prohibitive maintenance of natural stone. Standard 8×4 ft architectural sheets coated with diamond-cured UV protection.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[#E5E5E5] pt-2">
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Sheet Size: </span>
                <span className="font-semibold text-[#B08D57]">1220 × 2440 mm (8×4 ft)</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Surface: </span>
                <span className="font-semibold text-[#B08D57]">98%+ High Gloss Diamond UV</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Durability: </span>
                <span className="font-semibold text-[#B08D57]">100% Waterproof & Fire-Retardant</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent('quote_submit', { product: 'PVC UV Panels', source: 'uv_hero' });
                  openQuoteModal({ product: 'PVC UV Panels' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Get Sheet Pricing / BOQ
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { product: 'PVC UV Panels', source: 'uv_hero' });
                  openSampleModal({ finishName: 'PVC UV Marble Sheets' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors"
              >
                Order Free Marble Swatches
              </button>

              <a
                href={COMPANY_INFO.getWhatsAppLink("Hi Gordon, I'd like to check stock of 8x4 PVC UV marble sheets.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#25D366] hover:underline py-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marble & Stone Finish Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
            Pattern Library
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
            Italian Marble & Stone Finishes
          </h2>
          <p className="text-sm text-[#595754] mt-2">
            High-definition photographic stone films sealed beneath multi-pass UV layers for true optical depth.
          </p>
        </div>

        {/* Selected View Card */}
        <div className="bg-[#141414] rounded-md border border-[#2B2B2B] shadow-2xl overflow-hidden mb-10 text-[#F5F2EC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[440px] bg-[#0E0E0E]">
              <Image
                src={activeFinish.image}
                alt={activeFinish.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="bg-[#141414]/90 px-3 py-1.5 rounded border border-[#333] font-mono text-[#B08D57]">
                  {activeFinish.code}
                </span>
                <span className="bg-[#141414]/90 px-3 py-1.5 rounded border border-[#333] text-[#F5F2EC]">
                  Standard 8 ft × 4 ft Sheet
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#181818]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">
                  Active Selection
                </span>
                <h3 className="text-2xl font-bold font-serif-display text-[#F5F2EC]">
                  {activeFinish.name}
                </h3>
                <p className="text-xs text-[#A8A399] mt-2 leading-relaxed">
                  {activeFinish.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#2A2A2A] space-y-2 text-xs">
                  <div className="flex justify-between text-[#8E8A83]">
                    <span>Finish Type:</span>
                    <span className="text-[#F5F2EC] font-medium capitalize">{activeFinish.textureType} UV Hardcoat</span>
                  </div>
                  <div className="flex justify-between text-[#8E8A83]">
                    <span>Weight per Sheet:</span>
                    <span className="text-[#F5F2EC] font-medium">~17 kg (lightweight handling)</span>
                  </div>
                  <div className="flex justify-between text-[#8E8A83]">
                    <span>Stain Immunity:</span>
                    <span className="text-[#25D366] font-medium">Turmeric, Oil & Acid Proof</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#2A2A2A]">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ product: `PVC UV - ${activeFinish.name}` })}
                  className="w-full py-3 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  Get Quote for {activeFinish.name}
                </button>
                <button
                  type="button"
                  onClick={() => openSampleModal({ finishName: activeFinish.name })}
                  className="w-full py-2.5 bg-[#222] hover:bg-[#2A2A2A] text-xs text-[#F5F2EC] font-medium rounded-sm border border-[#333] transition-colors"
                >
                  Request Physical Swatch Piece
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {collection.finishes.map((f) => {
            const isSelected = activeFinish.id === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFinish(f)}
                className={`p-3 rounded text-left transition-all border ${
                  isSelected
                    ? 'bg-white border-[#B08D57] shadow-md ring-2 ring-[#B08D57]/40'
                    : 'bg-[#F5F2EC] border-[#E5DFD5] hover:border-[#BBB]'
                }`}
              >
                <div
                  className="w-full h-12 rounded-sm border border-black/10 mb-2 shadow-inner"
                  style={{
                    backgroundColor: f.colorHex,
                    backgroundImage: f.secondaryHex
                      ? `linear-gradient(135deg, ${f.colorHex} 60%, ${f.secondaryHex} 60%)`
                      : undefined,
                  }}
                />
                <div className="text-xs font-bold text-[#1C1C1C] truncate">{f.name}</div>
                <div className="text-[10px] text-[#777] font-mono">{f.code}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Material Calculator Widget */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MaterialCalculator
          defaultProduct="pvc-uv-panels"
          title="PVC UV Sheet Quantity & Wastage Calculator"
          subtitle="Calculate exact 8×4 ft sheet requirements, MS polymer adhesive tubes, and joint profiles for your wall elevations."
        />
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">100% Waterproof</h3>
              <p className="text-xs text-[#595754]">
                Zero moisture absorption. Perfect for powder room feature walls, dining areas, and wet vanity zones.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">B1 Fire Retardant</h3>
              <p className="text-xs text-[#595754]">
                Self-extinguishing polymer formulation compliant with high-density commercial and hotel fire safety codes.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Anti-Scratch UV Coat</h3>
              <p className="text-xs text-[#595754]">
                Multi-pass UV curing delivers diamond surface hardness resistant to pet claws, luggage, and keys.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Direct Tile Bonding</h3>
              <p className="text-xs text-[#595754]">
                Can be adhered directly over old tiles or bare plaster using MS polymer adhesives without demolition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white border border-[#E5DFD5] rounded-md overflow-hidden shadow-sm">
          <div className="p-5 bg-[#141414] text-[#F5F2EC]">
            <h3 className="text-base font-bold font-serif-display">
              Technical Specifications – PVC UV Sheet 8×4 ft
            </h3>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <tbody className="divide-y divide-[#F0ECE4]">
              {collection.specifications.map((spec, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                  <td className="py-3 px-4 font-semibold text-[#1C1C1C] w-1/3 border-r border-[#E5DFD5]">
                    {spec.label}
                  </td>
                  <td className="py-3 px-4 text-[#595754] font-medium">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={collection.faqs} title="PVC UV Panels FAQs" />
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 border-t border-[#282828] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-3xl font-bold font-serif-display text-[#F5F2EC]">
            Compute Your PVC UV Sheet Requirement
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A399]">
            Tell us your wall width and height in feet. Our team calculates sheet counts and matching bronze trims for your site.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal({ product: 'PVC UV Panels' })}
              className="px-6 py-3 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm"
            >
              Get Sheet Count & Quote
            </button>
            <button
              type="button"
              onClick={() => openSampleModal({ finishName: 'PVC UV Marble Range' })}
              className="px-6 py-3 bg-[#222] hover:bg-[#333] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#333]"
            >
              Request Free Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
