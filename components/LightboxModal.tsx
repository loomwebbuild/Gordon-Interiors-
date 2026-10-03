'use client';

import React from 'react';
import Image from 'next/image';
import { X, MapPin, Layers, MessageSquare, ArrowRight } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { COMPANY_INFO } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function LightboxModal() {
  const { lightboxOpen, activeProject, closeLightbox, openQuoteModal, openSampleModal } = useUI();

  if (!lightboxOpen || !activeProject) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#161616] border border-[#2D2D2D] rounded-md shadow-2xl overflow-hidden text-[#E5E5E5] my-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLightbox}
          className="absolute top-4 right-4 z-10 p-2 bg-[#121212]/80 hover:bg-[#121212] text-[#F5F2EC] rounded-full border border-[#333] transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Zone */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-[#0E0E0E]">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#E5E5E5]">
              <span className="bg-[#121212]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#333]">
                {activeProject.category.toUpperCase()} PROJECT
              </span>
              <span className="bg-[#121212]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#333]">
                {activeProject.areaSqFt}
              </span>
            </div>
          </div>

          {/* Details Zone */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-[#B08D57] uppercase tracking-widest font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeProject.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2EC] font-serif-display leading-snug">
                {activeProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A8A399] leading-relaxed">
                {activeProject.description}
              </p>

              {/* Materials Used */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F2EC] mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Materials Specified:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.materialsUsed.map((mat) => (
                    <span
                      key={mat}
                      className="text-xs bg-[#222222] text-[#D8D4CC] px-2.5 py-1 rounded-sm border border-[#333]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.architectNote && (
                <div className="p-3 bg-[#1A1A1A] border-l-2 border-[#B08D57] text-xs text-[#BDB8AE] italic">
                  &ldquo;{activeProject.architectNote}&rdquo;
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#262626] space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  closeLightbox();
                  openQuoteModal({ product: activeProject.materialsUsed[0] || 'Charcoal Louvers' });
                }}
                className="w-full py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Quote for This Material</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    closeLightbox();
                    openSampleModal({ finishName: activeProject.materialsUsed[0] });
                  }}
                  className="w-1/2 py-2 bg-[#222222] hover:bg-[#2A2A2A] text-xs text-[#F5F2EC] rounded-sm transition-colors border border-[#333]"
                >
                  Request Sample
                </button>

                <a
                  href={COMPANY_INFO.getWhatsAppLink(`Hi Gordon, I'm interested in the materials used in ${activeProject.title} (${activeProject.materialsUsed.join(', ')}). Could you share pricing?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'lightbox_modal', label: activeProject.title })}
                  className="w-1/2 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold rounded-sm transition-colors border border-[#25D366]/30 flex items-center justify-center gap-1.5"
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
