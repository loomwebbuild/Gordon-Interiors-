'use client';

import React from 'react';
import { Phone, MessageSquare, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';

export default function MobileStickyBar() {
  const { openQuoteModal } = useUI();

  return (
    <aside
      aria-label="Quick Actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141414] border-t border-[#2A2A2A] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] px-2 py-2"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          onClick={() => trackEvent('call_click', { source: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#1F1F1F] active:bg-[#2A2A2A] text-[#F5F2EC] rounded-sm min-h-[48px] transition-colors border border-[#333]"
        >
          <Phone className="w-4 h-4 text-[#B08D57] mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={COMPANY_INFO.getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366]/15 active:bg-[#25D366]/25 text-[#25D366] rounded-sm min-h-[48px] transition-colors border border-[#25D366]/40"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        {/* Get Quote Action */}
        <button
          type="button"
          onClick={() => {
            trackEvent('quote_submit', { source: 'mobile_sticky_bar' });
            openQuoteModal();
          }}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#B08D57] active:bg-[#967442] text-[#141414] rounded-sm min-h-[48px] font-bold transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4 text-[#141414] mb-0.5" />
          <span className="text-[11px] uppercase tracking-wider font-bold">Get Quote</span>
        </button>
      </div>
    </aside>
  );
}
