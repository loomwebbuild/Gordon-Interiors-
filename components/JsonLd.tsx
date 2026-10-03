import React from 'react';
import { COMPANY_INFO } from '@/lib/data';

interface JsonLdProps {
  type?: 'LocalBusiness' | 'Product' | 'FAQPage' | 'Organization';
  data?: Record<string, unknown>;
}

export default function JsonLd({ type = 'LocalBusiness', data }: JsonLdProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === 'LocalBusiness' || type === 'Organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'HomeGoodsStore',
      '@id': 'https://gordoninterior.in/#organization',
      name: 'GORDON – Architectural Wall Solutions',
      legalName: COMPANY_INFO.legalName,
      description: 'Supplier and importer of premium interior décor materials, charcoal louvers, PVC UV panels, and architectural wall solutions based in Delhi, India.',
      url: 'https://gordoninterior.in',
      telephone: COMPANY_INFO.phone,
      priceRange: '₹₹₹',
      image: 'https://gordoninterior.in/images/hero_wall_panels_interior_1791063088970.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.street,
        addressLocality: 'New West, Delhi',
        postalCode: COMPANY_INFO.address.postalCode,
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6946059',
        longitude: '77.1654876',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:30',
        },
      ],
      sameAs: [
        COMPANY_INFO.socials.instagram,
        COMPANY_INFO.socials.facebook,
      ],
      areaServed: [
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Ghaziabad' },
      ],
      ...data,
    };
  } else if (type === 'Product') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      brand: {
        '@type': 'Brand',
        name: 'GORDON',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      ...data,
    };
  } else if (type === 'FAQPage') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
