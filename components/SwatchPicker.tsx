'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COLLECTIONS_DATA, ProductFinish } from '@/lib/data';
import { Check, Sparkles, Layers, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import { COMPANY_INFO } from '@/lib/data';

interface SwatchPickerProps {
  collectionId?: string;
  showTitle?: boolean;
}

export default function SwatchPicker({ collectionId = 'charcoal-louvers', showTitle = true }: SwatchPickerProps) {
  const { openQuoteModal, openSampleModal } = useUI();
  const collection = COLLECTIONS_DATA.find((c) => c.id === collectionId) || COLLECTIONS_DATA[0];
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish>(collection.finishes[0]);

  const handleFinishChange = (finish: ProductFinish) => {
    setSelectedFinish(finish);
    trackEvent('swatch_select', {
      product: collection.shortTitle,
      label: finish.name,
    });
  };

  return (
    <div className="w-full">
      {showTitle && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-2">
            Material Customization
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
            Choose Your Shade & Texture
          </h2>
          <p className="text-sm text-[#595754] mt-3">
            Interact with our calibrated shade palette. Select a swatch to preview surface depth, timber grain, and architectural reflections.
          </p>
        </div>
      )}

      {/* Main Interactive Stage */}
      <div className="bg-[#141414] rounded-md border border-[#2B2B2B] shadow-2xl overflow-hidden text-[#F5F2EC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Preview Left */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-[#0E0E0E] flex items-center justify-center overflow-hidden">
            {/* Background Texture Image with Tint overlay */}
            <div className="absolute inset-0 transition-opacity duration-500">
              <Image
                src={selectedFinish.image}
                alt={selectedFinish.name}
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-40 transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: selectedFinish.colorHex }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating Live Spec Badge on Image */}
            <div className="absolute top-5 left-5 z-10 bg-[#121212]/90 backdrop-blur-md border border-[#333] px-3.5 py-1.5 rounded text-xs flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-inner"
                style={{ backgroundColor: selectedFinish.colorHex }}
              />
              <span className="font-mono text-[#F5F2EC] font-medium">{selectedFinish.code}</span>
              <span className="text-[#8E8A83]">·</span>
              <span className="text-[#B08D57] capitalize">{selectedFinish.textureType}</span>
            </div>

            {/* Bottom Live Description */}
            <div className="absolute bottom-5 left-5 right-5 z-10 p-4 bg-[#141414]/90 backdrop-blur-md border border-[#2E2E2E] rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F5F2EC] font-serif-display">
                    {selectedFinish.name}
                  </h4>
                  <p className="text-xs text-[#A8A399] mt-0.5">{selectedFinish.description}</p>
                </div>
                {selectedFinish.popular && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B08D57] bg-[#B08D57]/15 px-2.5 py-1 rounded border border-[#B08D57]/30 self-start sm:self-center">
                    <Sparkles className="w-3 h-3" /> Popular in Delhi NCR
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Controls Right */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#181818] border-t lg:border-t-0 lg:border-l border-[#262626]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
                  Select Finish ({collection.finishes.length} Shades)
                </span>
                <span className="text-[11px] text-[#8E8A83]">9.5 ft Full Height Stock</span>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {collection.finishes.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => handleFinishChange(finish)}
                      className={`group relative p-2.5 rounded-sm text-left transition-all border ${
                        isSelected
                          ? 'bg-[#222222] border-[#B08D57] shadow-lg ring-1 ring-[#B08D57]'
                          : 'bg-[#1C1C1C] border-[#2A2A2A] hover:border-[#444] hover:bg-[#202020]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-6 h-6 rounded-sm border border-white/20 shadow-inner flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: finish.colorHex,
                            backgroundImage: finish.secondaryHex
                              ? `linear-gradient(135deg, ${finish.colorHex} 50%, ${finish.secondaryHex} 50%)`
                              : undefined,
                          }}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                        </div>
                        <span className="text-[10px] font-mono text-[#8E8A83] group-hover:text-[#AAA]">
                          {finish.code}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-[#F5F2EC] truncate">
                        {finish.name}
                      </div>
                      <div className="text-[10px] text-[#8E8A83] capitalize mt-0.5">
                        {finish.textureType}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Technical Specifications Summary */}
              <div className="mt-6 pt-5 border-t border-[#262626] space-y-2 text-xs">
                <div className="text-xs font-semibold text-[#F5F2EC] flex items-center gap-1.5 mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Profile & Material Dimensions</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[#A8A399]">
                  <div className="p-2 bg-[#141414] border border-[#222] rounded-sm">
                    <span className="text-[10px] uppercase text-[#777] block">Length</span>
                    <span className="text-xs text-[#F5F2EC] font-medium">2900mm (~9.5 ft)</span>
                  </div>
                  <div className="p-2 bg-[#141414] border border-[#222] rounded-sm">
                    <span className="text-[10px] uppercase text-[#777] block">Effective Width</span>
                    <span className="text-xs text-[#F5F2EC] font-medium">120mm Interlocking</span>
                  </div>
                  <div className="p-2 bg-[#141414] border border-[#222] rounded-sm">
                    <span className="text-[10px] uppercase text-[#777] block">Core Density</span>
                    <span className="text-xs text-[#F5F2EC] font-medium">High Virgin Polymer</span>
                  </div>
                  <div className="p-2 bg-[#141414] border border-[#222] rounded-sm">
                    <span className="text-[10px] uppercase text-[#777] block">Warranty</span>
                    <span className="text-xs text-[#F5F2EC] font-medium">10 Years Termite/Water</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-4 border-t border-[#262626] space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  trackEvent('quote_submit', {
                    product: `${collection.shortTitle} - ${selectedFinish.name}`,
                    source: 'swatch_picker_quote',
                  });
                  openQuoteModal({
                    product: collection.shortTitle,
                    shade: selectedFinish.name,
                  });
                }}
                className="w-full py-3 bg-[#B08D57] hover:bg-[#C5A069] active:bg-[#967442] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get Quote for {selectedFinish.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('sample_request', {
                      product: selectedFinish.name,
                      source: 'swatch_picker_sample',
                    });
                    openSampleModal({ finishName: `${collection.shortTitle} (${selectedFinish.name})` });
                  }}
                  className="py-2.5 px-3 bg-[#222222] hover:bg-[#2A2A2A] text-xs text-[#F5F2EC] font-medium rounded-sm border border-[#333] transition-colors text-center"
                >
                  Order Swatch Sample
                </button>

                <a
                  href={COMPANY_INFO.getWhatsAppLink(`Hi Gordon, I am interested in the ${collection.shortTitle} in "${selectedFinish.name}" (${selectedFinish.code}). Could you share Delhi NCR pricing and stock availability?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'swatch_picker_whatsapp', label: selectedFinish.name })}
                  className="py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold rounded-sm border border-[#25D366]/30 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
