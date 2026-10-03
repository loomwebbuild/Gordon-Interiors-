'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Wrench,
  Sparkles,
  Download,
  Building,
  Home,
  Tv,
  Store
} from 'lucide-react';
import { COLLECTIONS_DATA, COMPANY_INFO } from '@/lib/data';
import SwatchPicker from '@/components/SwatchPicker';
import MaterialCalculator from '@/components/MaterialCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function CharcoalLouversPage() {
  const collection = COLLECTIONS_DATA.find((c) => c.id === 'charcoal-louvers')!;
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Product"
        data={{
          name: 'Gordon Charcoal Louver Wall Panels',
          description: collection.longDescription,
          category: 'Decorative Wall Panels',
          material: 'High-Density Virgin Charcoal Polymer',
        }}
      />

      {/* Collection Hero */}
      <section className="relative bg-[#141414] text-[#F5F2EC] py-20 sm:py-28 overflow-hidden border-b border-[#2A2A2A]">
        <div className="absolute inset-0 z-0">
          <Image
            src={collection.heroImage}
            alt="Gordon Charcoal Louvers Architectural Feature Wall"
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
              <span>Collection 01</span>
              <span aria-hidden="true">·</span>
              <span>Acoustic Fluted Louvers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif-display text-[#F5F2EC] leading-tight">
              Charcoal Louvers Series
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#C5BEB3] leading-relaxed">
              Precision-extruded architectural fluted panels adding deep vertical shadowplay, refined texture, and acoustic warmth to luxury TV media walls, bedroom suites, and executive corporate interiors across Delhi NCR.
            </p>

            {/* Micro specs strip */}
            <div className="flex flex-wrap gap-4 text-xs text-[#E5E5E5] pt-2">
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Length: </span>
                <span className="font-semibold text-[#B08D57]">2900mm (~9.5 ft Full Height)</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Joint: </span>
                <span className="font-semibold text-[#B08D57]">Seamless Tongue & Groove</span>
              </div>
              <div className="bg-[#1F1F1F] border border-[#333] px-3 py-1.5 rounded-sm">
                <span className="text-[#888]">Protection: </span>
                <span className="font-semibold text-[#B08D57]">100% Moisture & Termite Proof</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent('quote_submit', { product: 'Charcoal Louvers', source: 'collection_hero' });
                  openQuoteModal({ product: 'Charcoal Louvers' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Get Trade Quotation
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { product: 'Charcoal Louvers', source: 'collection_hero' });
                  openSampleModal({ finishName: 'Charcoal Louvers Swatch Folder' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors"
              >
                Order Free Swatch Folder
              </button>

              <a
                href={COMPANY_INFO.getWhatsAppLink("Hi Gordon, I'd like to check stock and prices for Charcoal Louvers.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'collection_hero' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#25D366] hover:underline py-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Swatch & Shade Selector */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SwatchPicker collectionId="charcoal-louvers" showTitle={true} />
      </section>

      {/* Interactive Material & Panel Calculator */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MaterialCalculator
          defaultProduct="charcoal-louvers"
          title="Charcoal Louver Wall Takeoff Calculator"
          subtitle="Enter your wall height and width to compute exact 9.5 ft louver panel quantities, cutting buffer, and adhesive tubes."
        />
      </section>

      {/* Applications & Use-Cases */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
              Versatile Architectural Form
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
              Where Charcoal Louvers Excel
            </h2>
            <p className="text-sm text-[#595754] mt-2">
              Transforming plain drywall and masonry into rich architectural statements across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">TV & Media Backdrops</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                Creates an anti-glare matte backdrop behind large screens with concealed wire management channels.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Bedhead & Master Suites</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                Adds acoustic dampening and warm vertical geometry behind custom upholstered headboards.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Corporate Boardrooms</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                Elevates executive offices, reception backdrops, and acoustic video conference chambers.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
              <div className="p-2.5 bg-[#141414] text-[#B08D57] rounded-sm w-fit">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Luxury Retail Boutiques</h3>
              <p className="text-xs text-[#595754] leading-relaxed">
                High-traffic scratch resistance for fashion showroom perimeter walls and fitting room zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
              Engineered Composition
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-display">
              Technical Data & Dimensions
            </h2>
            <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
              Gordon Charcoal Louvers are produced via continuous high-pressure co-extrusion. Every piece is precision checked for straightness, tongue-and-groove tolerance, and scratch resistance.
            </p>

            <div className="p-4 bg-[#141414] text-[#F5F2EC] rounded-sm space-y-2 text-xs">
              <div className="font-semibold text-[#B08D57]">Installation Guideline:</div>
              <p className="text-[#A8A399]">
                Direct adhesive fixing with polymer hybrid silicone (Bostik / Soudal) + secret nail fastening in the female groove lip. No visible screws or plugs.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                trackEvent('catalogue_download', { product: 'Charcoal Louvers Specs' });
                openCatalogueModal();
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A6B3D] hover:text-[#141414] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Architectural CAD Drawings (.DWG/.PDF)</span>
            </button>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#E5DFD5] rounded-md overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-[#F0ECE4]">
                {collection.specifications.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-[#1C1C1C] w-1/3 border-r border-[#E5DFD5]">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-[#595754] font-medium">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Step by Step */}
      <section className="py-16 bg-[#181818] text-[#F5F2EC] border-y border-[#282828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
              Contractor Friendly
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2EC] font-serif-display">
              4-Step Rapid Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#202020] border border-[#2D2D2D] rounded-sm space-y-2">
              <span className="text-xs font-mono text-[#B08D57] block">STEP 01</span>
              <h3 className="text-sm font-bold text-[#F5F2EC]">Wall Preparation</h3>
              <p className="text-xs text-[#A8A399]">Ensure wall surface is smooth, clean, and dry. Mark laser plumb line for initial starter panel.</p>
            </div>

            <div className="p-6 bg-[#202020] border border-[#2D2D2D] rounded-sm space-y-2">
              <span className="text-xs font-mono text-[#B08D57] block">STEP 02</span>
              <h3 className="text-sm font-bold text-[#F5F2EC]">Adhesive Application</h3>
              <p className="text-xs text-[#A8A399]">Apply zigzag lines of high-grab MS polymer adhesive along the rear rib channels of the panel.</p>
            </div>

            <div className="p-6 bg-[#202020] border border-[#2D2D2D] rounded-sm space-y-2">
              <span className="text-xs font-mono text-[#B08D57] block">STEP 03</span>
              <h3 className="text-sm font-bold text-[#F5F2EC]">Interlock & Secure</h3>
              <p className="text-xs text-[#A8A399]">Slide tongue into the adjacent groove. Secure concealed lip with pneumatic brad pin nails.</p>
            </div>

            <div className="p-6 bg-[#202020] border border-[#2D2D2D] rounded-sm space-y-2">
              <span className="text-xs font-mono text-[#B08D57] block">STEP 04</span>
              <h3 className="text-sm font-bold text-[#F5F2EC]">Trim & Illuminate</h3>
              <p className="text-xs text-[#A8A399]">Cap exposed outer edges or top ceiling joints with matching Gordon brushed bronze shadowline trims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={collection.faqs} title="Charcoal Louvers FAQs" />
      </section>

      {/* Bottom Sticky Action Banner */}
      <section className="bg-[#B08D57] text-[#141414] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-display">
              Ready to specify Charcoal Louvers for your space?
            </h3>
            <p className="text-xs sm:text-sm font-medium mt-1 text-[#222]">
              Order an architect sample box or get an immediate wholesale quote based on your wall sq.ft.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openQuoteModal({ product: 'Charcoal Louvers' })}
              className="px-6 py-3 bg-[#141414] hover:bg-[#222] text-[#F5F2EC] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-colors"
            >
              Get Price Quote
            </button>
            <button
              type="button"
              onClick={() => openSampleModal({ finishName: 'Charcoal Louvers Series' })}
              className="px-6 py-3 bg-white hover:bg-[#FAF8F5] text-[#141414] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-colors"
            >
              Request Free Sample Box
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
