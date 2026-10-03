'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, ArrowUpRight, Download, FileText } from 'lucide-react';
import { COMPANY_INFO, COLLECTIONS_DATA } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const { openQuoteModal, openSampleModal, openCatalogueModal } = useUI();

  return (
    <footer className="bg-[#121212] text-[#A8A399] border-t border-[#242424] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#222222]">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-baseline tracking-[0.25em] text-2xl font-bold text-[#F5F2EC]">
                GORDON
              </div>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#B08D57] font-medium block">
                INTERIOR
              </span>
            </Link>

            <p className="text-sm text-[#C5BEB3] max-w-md leading-relaxed">
              Direct supplier and importer of premium architectural wall solutions, charcoal fluted louvers, and PVC UV marble panels based in Delhi. Supplying interior designers, architects, and quality-conscious projects across Delhi NCR.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', { source: 'footer_cta' });
                  openSampleModal();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1E1E1E] hover:bg-[#282828] border border-[#333333] text-xs text-[#F5F2EC] rounded-sm transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Request Sample Box</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('catalogue_download', { source: 'footer_cta' });
                  openCatalogueModal();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1E1E1E] hover:bg-[#282828] border border-[#333333] text-xs text-[#F5F2EC] rounded-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Download Spec Sheets</span>
              </button>
            </div>
          </div>

          {/* Col 3: Architectural Collections */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EC]">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {COLLECTIONS_DATA.map((col) => (
                <li key={col.slug}>
                  <Link
                    href={`/products/${col.slug}`}
                    className="hover:text-[#B08D57] transition-colors flex items-center justify-between group"
                  >
                    <span>{col.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B08D57]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#B08D57] hover:underline pt-1 inline-block"
                >
                  All Products Catalogue →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Trade */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EC]">
              Trade & Info
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/for-professionals" className="hover:text-[#B08D57] transition-colors">
                  For Architects & Designers
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#B08D57] transition-colors">
                  Featured Delhi NCR Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B08D57] transition-colors">
                  About Gordon Interior
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B08D57] transition-colors">
                  Showroom Location & Contact
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="text-left hover:text-[#B08D57] transition-colors"
                >
                  Request Trade Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Delhi Location & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EC]">
              Delhi Showroom
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span className="text-[#C5BEB3]">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  onClick={() => trackEvent('call_click', { source: 'footer_phone' })}
                  className="text-[#F5F2EC] hover:text-[#B08D57] transition-colors font-medium"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY_INFO.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'footer_whatsapp' })}
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp Instant Enquiry
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#1F1F1F] hover:bg-[#B08D57] hover:text-[#141414] text-[#C5BEB3] rounded-sm transition-all"
                  aria-label="Gordon Interior on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#1F1F1F] hover:bg-[#B08D57] hover:text-[#141414] text-[#C5BEB3] rounded-sm transition-all"
                  aria-label="Gordon Interior on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: SEO text & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A766F]">
          <p>
            © {new Date().getFullYear()} GORDON (Gordon Interior). All rights reserved. Importer & Supplier of Charcoal Louvers & PVC UV Panels in Delhi NCR.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[#8E8A83]">
            <span>Delhi</span>
            <span>·</span>
            <span>Gurgaon</span>
            <span>·</span>
            <span>Noida</span>
            <span>·</span>
            <span>Faridabad</span>
            <span>·</span>
            <span>Ghaziabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
