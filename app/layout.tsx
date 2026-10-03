import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import QuoteModal from '@/components/QuoteModal';
import SampleKitModal from '@/components/SampleKitModal';
import CatalogueModal from '@/components/CatalogueModal';
import LightboxModal from '@/components/LightboxModal';
import JsonLd from '@/components/JsonLd';
import { UIProvider } from '@/components/UIContext';
import { COMPANY_INFO } from '@/lib/data';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://gordoninterior.in'),
  title: {
    default: 'GORDON – Architectural Wall Solutions | Charcoal Louvers & PVC UV Panels Delhi NCR',
    template: '%s | GORDON Architectural Wall Solutions',
  },
  description: 'Supplier and importer of premium interior décor materials, charcoal louvers, PVC UV marble panels, and architectural wall solutions based in Wazirpur, Delhi NCR.',
  keywords: [
    'charcoal louvers Delhi',
    'PVC UV panels Delhi',
    'wall panels supplier Delhi NCR',
    'interior decor materials importer Delhi',
    'fluted wall panels Gurgaon',
    'architectural wall solutions Noida',
    'Gordon interior Delhi',
  ],
  authors: [{ name: 'GORDON Interior Materials' }],
  creator: 'GORDON Interior',
  publisher: 'GORDON Interior Materials',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gordoninterior.in',
    title: 'GORDON – Walls with Character | Architectural Wall Solutions Delhi',
    description: 'Supplier and importer of premium interior décor materials specializing in architectural charcoal louvers and PVC UV panels in Delhi NCR.',
    siteName: 'GORDON Architectural Wall Solutions',
    images: [
      {
        url: '/images/hero_wall_panels_interior_1791063088970.jpg',
        width: 1200,
        height: 675,
        alt: 'Gordon Interior Luxury Architectural Wall Panels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GORDON – Walls with Character | Architectural Wall Solutions Delhi',
    description: 'Supplier and importer of premium interior décor materials, charcoal louvers, and PVC UV panels in Delhi NCR.',
    images: ['/images/hero_wall_panels_interior_1791063088970.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#FBF9F5] text-[#1C1C1C] antialiased flex flex-col selection:bg-[#B08D57] selection:text-[#141414]">
        <JsonLd type="LocalBusiness" />
        <UIProvider>
          <Header />
          <main className="flex-1 pt-18 sm:pt-20">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
          <QuoteModal />
          <SampleKitModal />
          <CatalogueModal />
          <LightboxModal />
        </UIProvider>
      </body>
    </html>
  );
}
