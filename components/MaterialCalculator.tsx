'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, Layers, Sparkles, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useUI } from '@/components/UIContext';
import { COMPANY_INFO } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

interface MaterialCalculatorProps {
  defaultProduct?: 'charcoal-louvers' | 'pvc-uv-panels' | 'architectural-decor';
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function MaterialCalculator({
  defaultProduct = 'charcoal-louvers',
  title = 'Interactive Material & Panel Calculator',
  subtitle = 'Input your wall dimensions to calculate exact panel counts, sheet requirements, and recommended wastage for your project.',
  className = '',
}: MaterialCalculatorProps) {
  const { openQuoteModal, openSampleModal } = useUI();

  const [productType, setProductType] = useState<'charcoal-louvers' | 'pvc-uv-panels' | 'architectural-decor'>(defaultProduct);
  const [unit, setUnit] = useState<'feet' | 'inches' | 'meters'>('feet');
  const [width, setWidth] = useState<string>('12');
  const [height, setHeight] = useState<string>('9.5');
  const [wallCount, setWallCount] = useState<number>(1);
  const [wastagePercent, setWastagePercent] = useState<number>(7); // 7% standard cutting allowance

  // Convert inputs to feet for standard calculation
  const getDimensionsInFeet = () => {
    const rawW = parseFloat(width) || 0;
    const rawH = parseFloat(height) || 0;

    if (unit === 'inches') {
      return { w: rawW / 12, h: rawH / 12 };
    }
    if (unit === 'meters') {
      return { w: rawW * 3.28084, h: rawH * 3.28084 };
    }
    return { w: rawW, h: rawH };
  };

  const { w: widthInFeet, h: heightInFeet } = getDimensionsInFeet();
  const singleWallAreaSqFt = widthInFeet * heightInFeet;
  const totalAreaSqFt = singleWallAreaSqFt * wallCount;

  // Calculation parameters:
  // 1. Charcoal Louvers: 120mm (0.3937 ft) effective width, 2900mm (9.51 ft) length -> 1 panel covers approx 0.3937 ft of wall width at full height
  // Or by area: approx 3.75 sq.ft per 9.5ft panel.
  // 2. PVC UV Panels: 8 ft x 4 ft (32 sq.ft) per sheet.
  // 3. Architectural Decor: approx 4.5 sq.ft per profile module.

  let baseCount = 0;
  let unitName = 'Panels (9.5 ft pcs)';
  let coverageNote = '';

  if (productType === 'charcoal-louvers') {
    // If wall height is <= 9.5 ft, panels run floor to ceiling without horizontal seams!
    // Number of vertical runs = ceil(total width in feet / (120mm in feet = 0.3937 ft))
    const verticalRuns = Math.ceil((widthInFeet * wallCount) / 0.3937);
    if (heightInFeet <= 9.6) {
      baseCount = Math.max(1, verticalRuns);
      coverageNote = 'Single full-height pieces (zero horizontal joints)';
    } else {
      // Need stacked pieces if height > 9.5 ft
      const heightMultiplier = Math.ceil(heightInFeet / 9.5);
      baseCount = Math.max(1, verticalRuns * heightMultiplier);
      coverageNote = `Requires stacked height (${heightMultiplier} tiers)`;
    }
    unitName = 'Fluted Louver Panels (9.5 ft)';
  } else if (productType === 'pvc-uv-panels') {
    // 8x4 ft sheet = 32 sq.ft
    baseCount = Math.max(1, Math.ceil(totalAreaSqFt / 32));
    unitName = 'UV Marble Sheets (8×4 ft)';
    coverageNote = 'Standard 1220 × 2440 mm high-gloss sheets';
  } else {
    baseCount = Math.max(1, Math.ceil(totalAreaSqFt / 4.5));
    unitName = 'Architectural Slat Modules';
    coverageNote = 'Modular 3D acoustic decor elements';
  }

  // Recommended count including cutting & miter wastage
  const recommendedCount = Math.ceil(baseCount * (1 + wastagePercent / 100));

  // Adhesive tubes estimation (approx 1 tube per 25-30 sq.ft of paneling)
  const adhesiveTubes = Math.max(1, Math.ceil(totalAreaSqFt / 28));

  // Perimeter trims (Top + Bottom + 2x Sides) in linear feet
  const perimeterLinearFeet = Math.round((2 * widthInFeet + 2 * heightInFeet) * wallCount);
  const trimPieces = Math.ceil(perimeterLinearFeet / 9.5);

  const getProductName = () => {
    if (productType === 'charcoal-louvers') return 'Charcoal Louvers';
    if (productType === 'pvc-uv-panels') return 'PVC UV Marble Panels';
    return 'Architectural Décor';
  };

  const handlePresetChange = (presetW: string, presetH: string) => {
    setWidth(presetW);
    setHeight(presetH);
    setUnit('feet');
  };

  const getWhatsAppEstimateText = () => {
    return `Hi Gordon, I calculated wall material requirements on your website:\n• Product: ${getProductName()}\n• Wall Dimensions: ${width} × ${height} ${unit} (${wallCount} wall${wallCount > 1 ? 's' : ''})\n• Total Area: ${totalAreaSqFt.toFixed(1)} sq.ft\n• Estimated Material: ${recommendedCount} ${unitName} (incl. ${wastagePercent}% wastage)\n• Est. Adhesive: ${adhesiveTubes} tubes\n• Est. Trims: ~${trimPieces} pcs (${perimeterLinearFeet} linear ft)\n\nCould you please share the trade price for this quantity and dispatch to Delhi NCR?`;
  };

  return (
    <div className={`w-full bg-[#181818] border border-[#2E2E2E] rounded-md shadow-2xl overflow-hidden text-[#E5E5E5] ${className}`}>
      {/* Header */}
      <div className="p-6 sm:p-8 bg-[#141414] border-b border-[#2A2A2A] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
            <Calculator className="w-4 h-4" />
            <span>Quantity Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-[#F5F2EC]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A399] max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Material Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#202020] border border-[#333] rounded-sm self-start md:self-auto">
          <button
            type="button"
            onClick={() => setProductType('charcoal-louvers')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
              productType === 'charcoal-louvers'
                ? 'bg-[#B08D57] text-[#141414] shadow-sm'
                : 'text-[#A8A399] hover:text-white'
            }`}
          >
            Charcoal Louvers
          </button>
          <button
            type="button"
            onClick={() => setProductType('pvc-uv-panels')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
              productType === 'pvc-uv-panels'
                ? 'bg-[#B08D57] text-[#141414] shadow-sm'
                : 'text-[#A8A399] hover:text-white'
            }`}
          >
            PVC UV Sheets
          </button>
          <button
            type="button"
            onClick={() => setProductType('architectural-decor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
              productType === 'architectural-decor'
                ? 'bg-[#B08D57] text-[#141414] shadow-sm'
                : 'text-[#A8A399] hover:text-white'
            }`}
          >
            Décor & Trims
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Input Controls Left */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 bg-[#1A1A1A] border-b lg:border-b-0 lg:border-r border-[#2A2A2A]">
          {/* Quick Preset Buttons */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#C5BEB3]">Popular Room Presets:</span>
              <div className="flex items-center gap-1 text-[11px] bg-[#222] px-2 py-0.5 rounded border border-[#333]">
                <span className="text-[#888]">Unit:</span>
                <button
                  type="button"
                  onClick={() => setUnit('feet')}
                  className={`px-1.5 py-0.5 rounded ${unit === 'feet' ? 'bg-[#B08D57] text-black font-bold' : 'text-[#BBB]'}`}
                >
                  Feet
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('inches')}
                  className={`px-1.5 py-0.5 rounded ${unit === 'inches' ? 'bg-[#B08D57] text-black font-bold' : 'text-[#BBB]'}`}
                >
                  Inches
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('meters')}
                  className={`px-1.5 py-0.5 rounded ${unit === 'meters' ? 'bg-[#B08D57] text-black font-bold' : 'text-[#BBB]'}`}
                >
                  Meters
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => handlePresetChange('12', '9.5')}
                className="px-2.5 py-1 bg-[#242424] hover:bg-[#303030] border border-[#333] rounded-sm text-[#E0DDD5] transition-colors"
              >
                TV Wall (12×9.5 ft)
              </button>
              <button
                type="button"
                onClick={() => handlePresetChange('10', '9.5')}
                className="px-2.5 py-1 bg-[#242424] hover:bg-[#303030] border border-[#333] rounded-sm text-[#E0DDD5] transition-colors"
              >
                Bedhead Wall (10×9.5 ft)
              </button>
              <button
                type="button"
                onClick={() => handlePresetChange('16', '10')}
                className="px-2.5 py-1 bg-[#242424] hover:bg-[#303030] border border-[#333] rounded-sm text-[#E0DDD5] transition-colors"
              >
                Foyer / Lobby (16×10 ft)
              </button>
              <button
                type="button"
                onClick={() => handlePresetChange('24', '10')}
                className="px-2.5 py-1 bg-[#242424] hover:bg-[#303030] border border-[#333] rounded-sm text-[#E0DDD5] transition-colors"
              >
                Office Suite (24×10 ft)
              </button>
            </div>
          </div>

          {/* Dimension Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#C5BEB3] mb-1.5">
                Wall Width ({unit}) *
              </label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="500"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full bg-[#222222] border border-[#3A3A3A] rounded-sm px-3.5 py-2.5 text-base font-medium text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none tabular-nums"
                placeholder="e.g. 12"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#C5BEB3] mb-1.5">
                Wall Height ({unit}) *
              </label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="100"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-[#222222] border border-[#3A3A3A] rounded-sm px-3.5 py-2.5 text-base font-medium text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none tabular-nums"
                placeholder="e.g. 9.5"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#C5BEB3] mb-1.5">
                Number of Identical Walls
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setWallCount(num)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                      wallCount === num
                        ? 'bg-[#B08D57] text-[#141414] border-[#B08D57]'
                        : 'bg-[#222] text-[#CCC] border-[#333] hover:bg-[#2A2A2A]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#C5BEB3] mb-1.5">
                Cutting & Wastage Buffer
              </label>
              <select
                value={wastagePercent}
                onChange={(e) => setWastagePercent(parseInt(e.target.value, 10))}
                className="w-full bg-[#222222] border border-[#3A3A3A] rounded-sm px-3 py-2 text-xs text-[#F5F2EC] focus:border-[#B08D57] focus:outline-none"
              >
                <option value={5}>5% (Simple straight runs)</option>
                <option value={7}>7% (Standard architectural recommendation)</option>
                <option value={10}>10% (Walls with TV niches, electrical cutouts)</option>
                <option value={15}>15% (Complex 45° angle miters / columns)</option>
              </select>
            </div>
          </div>

          {/* Micro spec note */}
          <div className="p-3.5 bg-[#141414] border border-[#262626] rounded-sm text-xs space-y-1 text-[#8E8A83]">
            <div className="text-[#B08D57] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Gordon Dimension Standard:</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#A8A399]">
              {productType === 'charcoal-louvers' && 'Charcoal Louvers are supplied in full 2900mm (~9.5 ft) lengths. For standard 9.5 ft ceiling heights, each 120mm interlocking piece installs in one piece without unsightly horizontal cross-joints.'}
              {productType === 'pvc-uv-panels' && 'PVC UV Panels are supplied in standard 1220 × 2440 mm (8 ft × 4 ft) architectural sheets with matching metallic H/T joint profiles.'}
              {productType === 'architectural-decor' && 'Architectural profiles and trims are extruded in 2900mm continuous lengths for razor-sharp floor-to-ceiling transitions.'}
            </p>
          </div>
        </div>

        {/* Real-time Calculation Result Right */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#181818]">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
              <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
                Estimated Material Takeoff
              </span>
              <span className="text-xs font-mono text-[#8E8A83]">
                Area: <strong className="text-[#F5F2EC] tabular-nums">{totalAreaSqFt.toFixed(1)} sq.ft</strong>
              </span>
            </div>

            {/* Primary Count Hero Box */}
            <div className="p-5 bg-[#202020] border-2 border-[#B08D57]/40 rounded-sm space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#A8A399]">
                Recommended Order Quantity:
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-bold font-serif-display text-[#F5F2EC] tabular-nums">
                  {recommendedCount}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#B08D57]">
                  {unitName}
                </span>
              </div>
              <p className="text-xs text-[#8E8A83]">
                Includes base requirement ({baseCount} pcs) + {wastagePercent}% cutting buffer ({recommendedCount - baseCount} safety pcs).
              </p>
            </div>

            {/* Supplementary Accessories Breakdown */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-[#141414] border border-[#282828] rounded-sm">
                <span className="text-[10px] uppercase text-[#777] block mb-1">MS Polymer Adhesive</span>
                <span className="text-base font-bold text-[#F5F2EC] tabular-nums">{adhesiveTubes} Tubes</span>
                <span className="text-[10px] text-[#888] block mt-0.5">~1 tube / 28 sq.ft</span>
              </div>

              <div className="p-3.5 bg-[#141414] border border-[#282828] rounded-sm">
                <span className="text-[10px] uppercase text-[#777] block mb-1">Perimeter Trims / Reveals</span>
                <span className="text-base font-bold text-[#F5F2EC] tabular-nums">{trimPieces} Pcs</span>
                <span className="text-[10px] text-[#888] block mt-0.5">~{perimeterLinearFeet} linear ft run</span>
              </div>
            </div>

            <div className="text-[11px] text-[#8E8A83] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Ready stock available in Wazirpur warehouse for same-day Delhi NCR dispatch.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#2A2A2A] space-y-2.5">
            <button
              type="button"
              onClick={() => {
                trackEvent('quote_submit', {
                  product: `${getProductName()} (${totalAreaSqFt.toFixed(0)} sq.ft)`,
                  value: totalAreaSqFt.toFixed(0),
                  source: 'material_calculator_quote',
                });
                openQuoteModal({
                  product: getProductName(),
                  area: totalAreaSqFt.toFixed(0),
                });
              }}
              className="w-full py-3.5 bg-[#B08D57] hover:bg-[#C5A069] active:bg-[#967442] text-[#141414] font-bold text-xs uppercase tracking-[0.16em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Wholesale Quote for {recommendedCount} {unitName.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.getWhatsAppLink(getWhatsAppEstimateText())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'material_calculator_whatsapp', value: totalAreaSqFt.toFixed(0) })}
                className="py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold rounded-sm border border-[#25D366]/30 transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send to WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  trackEvent('sample_request', {
                    product: getProductName(),
                    source: 'material_calculator_sample',
                  });
                  openSampleModal({ finishName: getProductName() });
                }}
                className="py-2.5 px-3 bg-[#222] hover:bg-[#2C2C2C] text-xs text-[#F5F2EC] font-medium rounded-sm border border-[#333] transition-colors text-center"
              >
                Request Sample Box
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
