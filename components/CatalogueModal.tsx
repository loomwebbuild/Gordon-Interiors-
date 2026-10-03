'use client';

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';

export default function CatalogueModal() {
  const { catalogueModalOpen, closeCatalogueModal } = useUI();
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'lookbook' | 'tech-specs' | 'trade-boq'>('lookbook');

  if (!catalogueModalOpen) return null;

  const handleDownload = (type: string) => {
    trackEvent('catalogue_download', { label: type, source: 'catalogue_modal' });
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-[#2E2E2E] rounded-md shadow-2xl overflow-hidden text-[#E5E5E5] my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2A2A2A] bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#B08D57]" />
            <h3 className="text-base font-semibold text-[#F5F2EC]">
              GORDON Architectural Lookbook & Technical Spec Sheets
            </h3>
          </div>
          <button
            type="button"
            onClick={closeCatalogueModal}
            className="text-[#8E8A83] hover:text-white p-1 rounded-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Tabs */}
          <div className="flex border-b border-[#2B2B2B]">
            <button
              type="button"
              onClick={() => setActiveTab('lookbook')}
              className={`pb-3 px-4 text-xs font-medium tracking-wide uppercase transition-colors ${
                activeTab === 'lookbook'
                  ? 'text-[#B08D57] border-b-2 border-[#B08D57]'
                  : 'text-[#8E8A83] hover:text-white'
              }`}
            >
              2026 Architectural Lookbook
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tech-specs')}
              className={`pb-3 px-4 text-xs font-medium tracking-wide uppercase transition-colors ${
                activeTab === 'tech-specs'
                  ? 'text-[#B08D57] border-b-2 border-[#B08D57]'
                  : 'text-[#8E8A83] hover:text-white'
              }`}
            >
              Technical Data & CAD Drawings
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('trade-boq')}
              className={`pb-3 px-4 text-xs font-medium tracking-wide uppercase transition-colors ${
                activeTab === 'trade-boq'
                  ? 'text-[#B08D57] border-b-2 border-[#B08D57]'
                  : 'text-[#8E8A83] hover:text-white'
              }`}
            >
              Trade BOQ Guide
            </button>
          </div>

          {activeTab === 'lookbook' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#202020] border border-[#2E2E2E] rounded-sm space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F2EC]">
                      GORDON Master Wall Collection Catalogue (PDF)
                    </h4>
                    <p className="text-xs text-[#A8A399] mt-1">
                      Includes 24+ full-page high-resolution interior installations, shade codes, dimensional cross-sections, and trim reveal options.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#B08D57] bg-[#B08D57]/10 px-2 py-1 rounded">
                    18.4 MB · PDF
                  </span>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#2A2A2A] text-xs text-[#8E8A83]">
                  <span>Updated October 2026 Edition</span>
                  <button
                    type="button"
                    onClick={() => handleDownload('Master Catalogue PDF')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#B08D57] hover:bg-[#C5A069] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech-specs' && (
            <div className="space-y-3">
              <div className="p-4 bg-[#202020] border border-[#2E2E2E] rounded-sm space-y-2">
                <h4 className="text-sm font-semibold text-[#F5F2EC]">
                  Charcoal Louver CAD Profiles & Interlocking Detail
                </h4>
                <p className="text-xs text-[#A8A399]">
                  Architectural cross-section DXF/DWG vector lines and tongue-and-groove tolerance sheets for AutoCAD & SketchUp models.
                </p>
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleDownload('CAD Profiles')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2A2A2A] hover:bg-[#333] text-xs text-[#F5F2EC] rounded-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>Download CAD ZIP</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-[#202020] border border-[#2E2E2E] rounded-sm space-y-2">
                <h4 className="text-sm font-semibold text-[#F5F2EC]">
                  PVC UV Marble Sheet Chemical & Fire Resistance Test Certificates
                </h4>
                <p className="text-xs text-[#A8A399]">
                  B1 Class flame retardancy reports, VOC test reports, and UV scratch testing compliance certificates.
                </p>
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleDownload('Certificates PDF')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2A2A2A] hover:bg-[#333] text-xs text-[#F5F2EC] rounded-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>Download Test Reports</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trade-boq' && (
            <div className="space-y-3 text-xs text-[#A8A399]">
              <p>
                For project quantity estimators and contractors: our Excel BOQ template computes net panels required, wastage allowance (standard 5–7%), adhesive tubes, and perimeter trim counts for fast client tendering.
              </p>
              <div className="p-4 bg-[#202020] border border-[#2E2E2E] rounded-sm flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F2EC]">Gordon Wall Estimation Spreadsheet (.xlsx)</div>
                  <div className="text-[11px] text-[#8E8A83]">Includes automated sq.ft to panel count & trim calculator</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownload('BOQ Calculator XLSX')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#B08D57] text-[#141414] font-bold text-xs uppercase tracking-wider rounded-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .xlsx</span>
                </button>
              </div>
            </div>
          )}

          {downloaded && (
            <div className="p-3 bg-[#1C2E20] border border-[#2A5230] text-[#7BD488] rounded-sm text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Spec sheet opened/download initiated. For printed physical lookbooks in Delhi NCR, please request a sample box!</span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between text-xs text-[#8E8A83] border-t border-[#262626]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
              Authentic Gordon Interior Technical Specifications
            </span>
            <button
              type="button"
              onClick={closeCatalogueModal}
              className="px-4 py-1.5 bg-[#262626] hover:bg-[#333] text-[#E0DDD5] rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
