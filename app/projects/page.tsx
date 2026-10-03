'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight, Layers, MessageSquare, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA, COMPANY_INFO, ProjectItem } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';
import JsonLd from '@/components/JsonLd';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'hospitality'>('all');
  const { openLightbox, openQuoteModal, openSampleModal } = useUI();

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <JsonLd
        type="LocalBusiness"
        data={{
          name: 'GORDON Projects Portfolio – Delhi NCR',
          description: 'Architectural wall installations across residential, commercial, and hospitality projects in Delhi NCR.',
        }}
      />

      {/* Hero */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 sm:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              <span>Delhi NCR Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Project Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC]">
              Spaces Defined by Texture
            </h1>
            <p className="text-sm sm:text-base text-[#A8A399] leading-relaxed">
              Explore residential penthouses, executive corporate suites, and boutique hospitality spaces executed with Gordon Charcoal Louvers and PVC UV Panels across Delhi, Gurgaon, and Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Interactive Filter Tabs (functional segmented control) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE5DB] rounded-sm">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${
                filter === 'all'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              All Spaces ({PROJECTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${
                filter === 'residential'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${
                filter === 'commercial'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              Commercial & Offices
            </button>
            <button
              type="button"
              onClick={() => setFilter('hospitality')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${
                filter === 'hospitality'
                  ? 'bg-[#141414] text-[#F5F2EC] shadow-sm'
                  : 'text-[#595754] hover:text-[#141414]'
              }`}
            >
              Hospitality & Retail
            </button>
          </div>

          <p className="text-xs text-[#595754]">
            Click any project tile to inspect materials and high-resolution details.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                trackEvent('project_view', { label: project.title });
                openLightbox(project);
              }}
              className="group bg-white rounded-md border border-[#E5DFD5] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B08D57] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F5F2EC] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#444]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-[#F5F2EC]">
                    <div className="flex items-center gap-1 text-[11px] text-[#B08D57] font-semibold mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif-display group-hover:text-[#B08D57] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-[#595754] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-2 border-t border-[#F0ECE4]">
                    <span className="text-[11px] text-[#8E8A83] block mb-1">Materials Specified:</span>
                    <div className="flex flex-wrap gap-1">
                      {project.materialsUsed.map((mat) => (
                        <span
                          key={mat}
                          className="text-[11px] bg-[#F5F2EC] text-[#1C1C1C] px-2 py-0.5 rounded border border-[#E5DFD5]"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-t border-[#F0ECE4] flex items-center justify-between text-xs font-semibold text-[#8A6B3D]">
                <span>Inspect Project & Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#141414] text-[#F5F2EC] py-16 text-center border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-display text-[#F5F2EC]">
            Working on an Architectural Project in Delhi NCR?
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A399]">
            Submit your floor plan or wall schedule. Our material specialists provide direct trade takeoff and finish samples.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
            >
              Get Project Takeoff & Quote
            </button>
            <button
              type="button"
              onClick={() => openSampleModal()}
              className="px-6 py-3 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#3A3A3A] transition-colors"
            >
              Request Sample Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
