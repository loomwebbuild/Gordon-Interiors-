'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MessageSquare,
  PackageCheck,
  Truck,
  Layers,
  Palette,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Download,
  ChevronRight,
  MapPin,
  Star,
  Quote as QuoteIcon
} from 'lucide-react';
import { COMPANY_INFO, COLLECTIONS_DATA, WHY_GORDON, PROCESS_STEPS, PROJECTS_DATA, TESTIMONIALS_DATA } from '@/lib/data';
import SwatchPicker from '@/components/SwatchPicker';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';

export default function HomePage() {
  const { openQuoteModal, openSampleModal, openCatalogueModal, openLightbox } = useUI();

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-[94vh] bg-[#121212] flex items-center justify-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_wall_panels_interior_1791063088970.jpg"
            alt="Gordon Luxury Architectural Wall Panels Delhi NCR"
            fill
            priority
            className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-[#121212]/40" />
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 space-y-7">
          {/* Quiet unboxed kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#B08D57] bg-[#1C1C1C]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B08D57]/30 shadow-sm">
            <span>Delhi NCR</span>
            <span aria-hidden="true">·</span>
            <span>Direct Material Importer & Supplier</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#F5F2EC] font-serif-display tracking-tight leading-[1.08] max-w-4xl mx-auto text-balance">
            Walls with Character.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-[#D8D4CC] max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Direct importer and stockist of premium charcoal louvers, PVC UV marble sheets, and architectural wall systems. Supplying interior designers, architects, and luxury spaces across Delhi NCR.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B08D57] hover:bg-[#C5A069] active:bg-[#967442] text-[#141414] font-bold text-xs uppercase tracking-[0.18em] rounded-sm transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={COMPANY_INFO.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'hero_primary_cta' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1E1E1E]/90 hover:bg-[#282828] text-[#F5F2EC] border border-[#3E3E3E] font-semibold text-xs uppercase tracking-[0.15em] rounded-sm transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A8A399]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
              Ready Stock in Wazirpur Warehouse
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
              Complimentary Architect Sample Kits
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
              Same-Day Dispatch Delhi NCR
            </span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-[#181818] border-y border-[#262626] py-8 text-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-start gap-3.5 p-2">
              <div className="p-2.5 bg-[#222222] text-[#B08D57] rounded-sm shrink-0 border border-[#333]">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#F5F2EC]">Imported Materials</h3>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  High-density polymer formulations with precision tongue & groove joints.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-2">
              <div className="p-2.5 bg-[#222222] text-[#B08D57] rounded-sm shrink-0 border border-[#333]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#F5F2EC]">Trade Pricing</h3>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Direct wholesale slab rates & project BOQ takeoff for architects and contractors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-2">
              <div className="p-2.5 bg-[#222222] text-[#B08D57] rounded-sm shrink-0 border border-[#333]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#F5F2EC]">Delhi NCR Supply</h3>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Rapid logistics across South Delhi, Gurgaon, Noida, Faridabad & Ghaziabad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-2">
              <div className="p-2.5 bg-[#222222] text-[#B08D57] rounded-sm shrink-0 border border-[#333]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#F5F2EC]">Calibrated Shades</h3>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Zero batch shade variance across large multi-room residential and retail installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS (3 CARDS) */}
      <section className="py-20 sm:py-28 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-2">
                Curated Materials
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
                Featured Architectural Collections
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#8A6B3D] hover:text-[#1C1C1C] transition-colors pb-1 border-b border-[#B08D57]"
            >
              <span>View Full Range</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COLLECTIONS_DATA.map((col) => (
              <div
                key={col.id}
                className="group relative bg-[#181818] rounded-md overflow-hidden border border-[#2B2B2B] shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                  <Image
                    src={col.thumbnailImage}
                    alt={col.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#F5F2EC] bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-[#333]">
                      {col.dimensions.split('/')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F2EC] font-serif-display group-hover:text-[#B08D57] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-xs text-[#A8A399] mt-2 leading-relaxed line-clamp-2">
                      {col.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#262626]">
                    <div className="flex items-center justify-between text-xs text-[#8E8A83]">
                      <span>{col.finishes.length} Curated Finishes</span>
                      <span className="text-[#B08D57] font-medium">{col.warranty.split(' ')[0]} {col.warranty.split(' ')[1]} Warranty</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/products/${col.slug}`}
                        className="flex-1 py-2.5 bg-[#252525] hover:bg-[#B08D57] hover:text-[#141414] text-[#F5F2EC] text-xs font-semibold text-center rounded-sm transition-colors"
                      >
                        View Collection
                      </Link>
                      <button
                        type="button"
                        onClick={() => openQuoteModal({ product: col.shortTitle })}
                        className="px-3.5 py-2.5 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] text-xs font-bold rounded-sm transition-colors uppercase tracking-wider"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHOOSE YOUR SHADE (INTERACTIVE SWATCH SELECTOR) */}
      <section className="py-20 bg-[#121212] border-y border-[#262626] text-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-2">
              Tactile Customization
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F2EC] font-serif-display">
              Choose Your Finish & Texture
            </h2>
            <p className="text-sm text-[#A8A399] mt-3">
              Explore how our matte charcoals, warm oaks, and metallic profiles react to architectural light before specifying for your site.
            </p>
          </div>

          <SwatchPicker collectionId="charcoal-louvers" showTitle={false} />
        </div>
      </section>

      {/* 5. WHY GORDON (4 BENEFIT BLOCKS) */}
      <section className="py-20 sm:py-28 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-2">
              The Gordon Standard
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] font-serif-display">
              Engineered for Designers & Builders
            </h2>
            <p className="text-sm text-[#595754] mt-3">
              Why leading architects and interior studios across Delhi NCR specify Gordon materials over standard timber fluting and natural stone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_GORDON.map((benefit) => (
              <div
                key={benefit.step}
                className="p-8 bg-white border border-[#E5DFD5] rounded-sm shadow-sm hover:border-[#B08D57] hover:shadow-md transition-all space-y-4"
              >
                <span className="text-3xl font-bold font-serif-display text-[#B08D57]/70 block">
                  {benefit.step}
                </span>
                <h3 className="text-lg font-bold text-[#1C1C1C] leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#595754] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS GALLERY (6 TILES MASONRY GRID) */}
      <section className="py-20 sm:py-28 bg-[#161616] text-[#E5E5E5] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-2">
                Delhi NCR Installations
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F2EC] font-serif-display">
                Featured Space Transformations
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.slice(0, 6).map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  trackEvent('project_view', { label: project.title });
                  openLightbox(project);
                }}
                className="group relative bg-[#1F1F1F] rounded-sm overflow-hidden border border-[#2E2E2E] cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F5F2EC] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#444]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-[11px] text-[#B08D57] font-medium mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#F5F2EC] font-serif-display group-hover:text-[#B08D57] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1A1A1A] border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#8E8A83]">
                  <span className="truncate max-w-[200px]">{project.materialsUsed[0]}</span>
                  <span className="text-[#B08D57] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS STRIP (4 STEPS) */}
      <section className="py-16 bg-[#FBF9F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-1">
              Seamless Workflow
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-display">
              From Concept to Delhi Site Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.num} className="relative p-6 bg-white border border-[#E5DFD5] rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-serif-display text-[#B08D57]">
                    {step.num}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#C5BEB3]" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-[#1C1C1C]">{step.title}</h3>
                <p className="text-xs text-[#595754] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER / GRID */}
      <section className="py-20 sm:py-24 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">
              Trade Endorsements
            </p>
            <h2 className="text-3xl font-bold text-[#1C1C1C] font-serif-display">
              Trusted by Delhi NCR Design Studios
            </h2>
            <p className="text-xs text-[#8E8A83] mt-2">
              Verified feedback from architects, interior consultants, and turnkey commercial contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-8 bg-white border border-[#E5DFD5] rounded-sm shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#B08D57]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#444] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE4]">
                  <h4 className="text-xs font-bold text-[#1C1C1C]">{t.author}</h4>
                  <p className="text-[11px] text-[#777]">{t.role} · {t.firm}</p>
                  <p className="text-[10px] text-[#B08D57] font-medium mt-0.5">{t.location} ({t.projectType})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="relative py-20 bg-[#141414] text-[#F5F2EC] border-t border-[#262626] overflow-hidden">
        <div className="absolute inset-0 bg-slat-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57] font-semibold">
            Ready to Transform Your Project?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EC] font-serif-display max-w-2xl mx-auto leading-tight">
            Planning a space? Let&apos;s find the right finish.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A399] max-w-xl mx-auto leading-relaxed">
            Get trade pricing, compute exact panel requirements for your wall, or request an architect sample box delivered across Delhi NCR.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                trackEvent('quote_submit', { source: 'final_cta_band' });
                openQuoteModal();
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-[0.18em] rounded-sm transition-all shadow-lg"
            >
              Get a Material Quote
            </button>

            <a
              href={COMPANY_INFO.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'final_cta_band' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-[0.15em] rounded-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                trackEvent('sample_request', { source: 'final_cta_band' });
                openSampleModal();
              }}
              className="w-full sm:w-auto px-6 py-4 bg-[#222] hover:bg-[#2A2A2A] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#333] transition-colors"
            >
              Request Sample Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
