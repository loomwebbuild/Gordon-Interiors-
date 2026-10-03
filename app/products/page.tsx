'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Sparkles, CheckCircle2, ShieldCheck, Download, MessageSquare } from 'lucide-react';
import { COLLECTIONS_DATA, COMPANY_INFO } from '@/lib/data';
import MaterialCalculator from '@/components/MaterialCalculator';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'louvers' | 'uv-panels' | 'decor'>('all');
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  const filteredCollections = COLLECTIONS_DATA.filter((col) => {
    if (activeFilter === 'all') return true;
    return col.category === activeFilter;
  });

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="Product"
        data={{
          name: 'GORDON Architectural Wall Collections',
          description: 'Charcoal louvers, PVC UV marble sheets, and architectural decor trims for Delhi NCR.',
        }}
      />

      {/* Header Banner */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 sm:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              <span>Product Catalogue</span>
              <span aria-hidden="true">·</span>
              <span>Delhi NCR Stock</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC]">
              Architectural Wall Materials
            </h1>
            <p className="text-sm sm:text-base text-[#A8A399] leading-relaxed">
              Precision-extruded polymer fluted louvers, high-gloss UV cured marble sheets, and refined bronze transition profiles. Imported directly and stocked in our Wazirpur warehouse for rapid site delivery.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { source: 'products_header' });
                  openSampleModal();
                }}
                className="px-4 py-2 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Request Material Samples
              </button>
              <button
                type="button"
                onClick={() => {
                  trackEvent('catalogue_download', { source: 'products_header' });
                  openCatalogueModal();
                }}
                className="px-4 py-2 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#333] transition-colors"
              >
                Download Technical Spec Sheets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Interactive Segmented Filter Controls (allowed functional buttons) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE5DB] rounded-sm">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              All Categories ({COLLECTIONS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('louvers')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap ${
                activeFilter === 'louvers'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              Charcoal Louvers
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('uv-panels')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap ${
                activeFilter === 'uv-panels'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              PVC UV Panels
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('decor')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap ${
                activeFilter === 'decor'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              Architectural Décor
            </button>
          </div>

          <div className="text-xs text-[#595754]">
            Showing <span className="font-bold text-[#141414] tabular-nums">{filteredCollections.length}</span> primary material lines
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((col) => (
            <div
              key={col.id}
              className="bg-white rounded-md border border-[#E5DFD5] shadow-sm hover:shadow-xl hover:border-[#B08D57] transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
                  <Image
                    src={col.thumbnailImage}
                    alt={col.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#141414]/80 backdrop-blur-sm text-[#F5F2EC] px-2.5 py-1 rounded text-[11px] font-mono border border-[#333]">
                    {col.category.toUpperCase()}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1C1C] font-serif-display group-hover:text-[#8A6B3D] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-xs text-[#595754] mt-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  {/* Quick Specs List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F0ECE4] text-xs text-[#595754]">
                    <div className="flex justify-between">
                      <span className="text-[#8E8A83]">Dimensions:</span>
                      <span className="font-medium text-[#1C1C1C]">{col.dimensions.split('/')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8E8A83]">Composition:</span>
                      <span className="font-medium text-[#1C1C1C] truncate max-w-[180px]">{col.materialComposition.split('(')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8E8A83]">Available Shades:</span>
                      <span className="font-bold text-[#B08D57]">{col.finishes.length} Finishes</span>
                    </div>
                  </div>

                  {/* Swatch Previews */}
                  <div className="pt-2">
                    <span className="text-[11px] text-[#8E8A83] block mb-1.5">Color Palette:</span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {col.finishes.slice(0, 5).map((f) => (
                        <span
                          key={f.id}
                          title={f.name}
                          className="w-5 h-5 rounded-full border border-black/15 shadow-sm"
                          style={{ backgroundColor: f.colorHex }}
                        />
                      ))}
                      {col.finishes.length > 5 && (
                        <span className="text-[11px] text-[#8E8A83] pl-1 font-mono">
                          +{col.finishes.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#F0ECE4] mt-4 space-y-2">
                <div className="flex items-center gap-2 pt-4">
                  <Link
                    href={`/products/${col.slug}`}
                    className="flex-1 py-2.5 bg-[#141414] hover:bg-[#B08D57] hover:text-[#141414] text-[#F5F2EC] text-xs font-semibold text-center rounded-sm transition-colors"
                  >
                    View Collection & Shades
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('quote_submit', { product: col.shortTitle, source: 'products_card' });
                      openQuoteModal({ product: col.shortTitle });
                    }}
                    className="px-4 py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Quote
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-[#8E8A83] pt-1">
                  <button
                    type="button"
                    onClick={() => openSampleModal({ finishName: col.shortTitle })}
                    className="text-[#8A6B3D] hover:underline"
                  >
                    + Request Sample Box
                  </button>
                  <a
                    href={COMPANY_INFO.getWhatsAppLink(`Hi Gordon, I'd like a price list for ${col.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Material Calculator Widget */}
        <div className="mt-16">
          <MaterialCalculator
            defaultProduct="charcoal-louvers"
            title="Instant Material Takeoff & Panel Estimator"
            subtitle="Calculate exact quantity requirements, cutting wastage allowances, and adhesive needs for your wall area."
          />
        </div>

        {/* Material Comparison Strip */}
        <div className="mt-20 p-8 bg-white border border-[#E5DFD5] rounded-md shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-bold text-[#1C1C1C] font-serif-display">
              Why Gordon Wall Materials Outperform Traditional Finishes
            </h3>
            <p className="text-xs text-[#595754] mt-1">
              Engineered specifically for Delhi NCR&apos;s extreme temperature swings, humidity, and site speed requirements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E5DFD5] text-[#8E8A83] uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">Material Parameter</th>
                  <th className="py-3 px-4 font-bold text-[#B08D57]">Gordon Charcoal & UV Panels</th>
                  <th className="py-3 px-4 font-semibold">Natural Timber / MDF Slatting</th>
                  <th className="py-3 px-4 font-semibold">Real Marble Slabs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0ECE4] text-[#444]">
                <tr>
                  <td className="py-3 px-4 font-medium text-[#1C1C1C]">Water & Seepage Resistance</td>
                  <td className="py-3 px-4 font-bold text-[#208035]">100% Waterproof (Zero swelling)</td>
                  <td className="py-3 px-4 text-[#C23B22]">Prone to moisture warping & rot</td>
                  <td className="py-3 px-4 text-[#555]">Porous; requires chemical sealing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-[#1C1C1C]">Termite & Borer Defense</td>
                  <td className="py-3 px-4 font-bold text-[#208035]">100% Termite & Borer Proof</td>
                  <td className="py-3 px-4 text-[#C23B22]">High vulnerability in Delhi NCR</td>
                  <td className="py-3 px-4 text-[#208035]">Immune</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-[#1C1C1C]">Installation Velocity</td>
                  <td className="py-3 px-4 font-bold text-[#B08D57]">1–2 Days (Clean Dry Joint)</td>
                  <td className="py-3 px-4 text-[#555]">7–14 Days (Carpentry & Polish)</td>
                  <td className="py-3 px-4 text-[#555]">10–20 Days (Wet mortar & grinding)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-[#1C1C1C]">Maintenance & Cleaning</td>
                  <td className="py-3 px-4 font-bold text-[#B08D57]">Wipe with damp cloth</td>
                  <td className="py-3 px-4 text-[#555]">Requires periodic re-polishing</td>
                  <td className="py-3 px-4 text-[#555]">Prone to staining (turmeric, wine)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
