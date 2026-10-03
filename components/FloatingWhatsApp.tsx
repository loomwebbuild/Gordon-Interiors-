'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end">
      {/* Speech Bubble / Prompt */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 mb-3 bg-[#1C1C1C] text-[#F5F2EC] px-3.5 py-2 rounded-md shadow-2xl border border-[#333333] text-xs animate-bounce animate-duration-1000">
          <span>Need samples or shade prices? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-[#888] hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={COMPANY_INFO.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { source: 'floating_widget' })}
        className="group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with Gordon Interior on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
