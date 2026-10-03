'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useUI } from '@/components/UIContext';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useUI();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/products',
      hasDropdown: true,
      subLinks: [
        { name: 'All Products Overview', href: '/products' },
        { name: 'Charcoal Louvers', href: '/products/charcoal-louvers', tag: 'Acoustic & Fluted' },
        { name: 'PVC UV Panels', href: '/products/pvc-uv-panels', tag: 'High-Gloss Marble' },
        { name: 'Architectural Décor & Trims', href: '/products/architectural-decor', tag: 'Bronze & LED' },
      ],
    },
    { name: 'Projects', href: '/projects' },
    { name: 'For Professionals', href: '/for-professionals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141414]/95 backdrop-blur-md py-3.5 border-b border-[#2E2E2E] shadow-xl'
            : 'bg-[#141414]/80 backdrop-blur-sm py-5 border-b border-[#262626]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <Link
              href="/"
              onClick={closeMenus}
              className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] rounded-sm"
            >
              <div className="flex items-baseline tracking-[0.25em] text-xl sm:text-2xl font-bold text-[#F5F2EC] group-hover:text-[#B08D57] transition-colors">
                GORDON
              </div>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#B08D57] font-medium -mt-0.5">
                INTERIOR
              </span>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenus}
                        className={`flex items-center gap-1 py-1 transition-colors ${
                          isActive
                            ? 'text-[#B08D57] border-b border-[#B08D57]'
                            : 'text-[#E0DDD5] hover:text-white'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </Link>

                      {/* Dropdown Menu */}
                      {productsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-[#1A1A1A] border border-[#2D2D2D] shadow-2xl p-2 rounded-sm z-50">
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeMenus}
                              className="flex flex-col p-2.5 rounded-sm hover:bg-[#252525] transition-colors group"
                            >
                              <span className="text-sm text-[#F5F2EC] group-hover:text-[#B08D57] font-medium">
                                {sub.name}
                              </span>
                              {sub.tag && (
                                <span className="text-[11px] text-[#8E8A83] group-hover:text-[#B5B0A6]">
                                  {sub.tag}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className={`py-1 transition-colors ${
                      isActive
                        ? 'text-[#B08D57] border-b border-[#B08D57]'
                        : 'text-[#E0DDD5] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent('quote_submit', { source: 'header_button' });
                  openQuoteModal();
                }}
                className="px-5 py-2.5 bg-[#B08D57] text-[#141414] font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#C5A069] active:bg-[#967442] transition-colors shadow-sm whitespace-nowrap"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-3 py-1.5 bg-[#B08D57] text-[#141414] font-semibold text-xs uppercase tracking-wider rounded-sm"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F5F2EC] hover:text-[#B08D57] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-[#141414] border-t border-[#262626] overflow-y-auto p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mb-2">Navigation</p>
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-[#222222] pb-3">
                <Link
                  href={link.href}
                  onClick={closeMenus}
                  className="text-lg font-medium text-[#F5F2EC] hover:text-[#B08D57] block"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMenus}
                        className="text-sm text-[#A8A399] hover:text-white block py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#262626] space-y-3">
            <div className="text-xs text-[#8E8A83]">Delhi NCR Supply & Central Warehouse:</div>
            <p className="text-xs text-[#C5BEB3]">{COMPANY_INFO.address.full}</p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={() => trackEvent('call_click', { source: 'mobile_drawer' })}
                className="flex items-center justify-center gap-2 p-3 bg-[#1F1F1F] border border-[#333] text-[#F5F2EC] rounded-sm text-sm"
              >
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span>Call Us</span>
              </a>
              <a
                href={COMPANY_INFO.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'mobile_drawer' })}
                className="flex items-center justify-center gap-2 p-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-sm text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                closeMenus();
                openQuoteModal();
              }}
              className="w-full py-3 bg-[#B08D57] text-[#141414] font-bold text-center text-sm uppercase tracking-wider rounded-sm mt-3"
            >
              Request Trade Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
