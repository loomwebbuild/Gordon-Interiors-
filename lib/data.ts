export interface ProductFinish {
  id: string;
  name: string;
  code: string;
  description: string;
  colorHex: string;
  secondaryHex?: string;
  textureType: 'fluted' | 'marble' | 'woodgrain' | 'metallic' | 'matte';
  image: string;
  popular?: boolean;
}

export interface ProductCollection {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'louvers' | 'uv-panels' | 'decor';
  description: string;
  longDescription: string;
  heroImage: string;
  thumbnailImage: string;
  specifications: {
    label: string;
    value: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  applications: string[];
  finishes: ProductFinish[];
  dimensions: string;
  materialComposition: string;
  thickness: string;
  warranty: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'hospitality';
  location: string;
  materialsUsed: string[];
  areaSqFt: string;
  image: string;
  description: string;
  architectNote?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  firm: string;
  location: string;
  quote: string;
  projectType: string;
  rating: number;
}

export const COMPANY_INFO = {
  brandName: 'GORDON',
  subBrand: 'INTERIOR',
  legalName: 'Gordon Interior Materials',
  tagline: 'Walls with Character.',
  subTagline: 'Importer & Supplier of Premium Architectural Wall Solutions in Delhi NCR',
  phone: '+91 7582-808-808',
  phoneRaw: '+917582808808',
  phoneDisplay: '+91 7582-808-808',
  whatsappUrl: 'https://wa.me/917582808808',
  whatsappPrefillText: "Hi Gordon, I'd like to enquire about your wall panels.",
  getWhatsAppLink: (customText?: string) => {
    const text = customText || "Hi Gordon, I'd like to enquire about your wall panels.";
    return `https://wa.me/917582808808?text=${encodeURIComponent(text)}`;
  },
  address: {
    street: 'A-95/3, Block A, Wazirpur Industrial Area',
    locality: 'New West, Delhi',
    postalCode: '110052',
    city: 'Delhi',
    state: 'Delhi',
    country: 'India',
    full: 'A-95/3, Block A, Wazirpur Industrial Area, New West, Delhi, 110052',
    googleMapsLink: 'https://maps.google.com/?q=A-95/3+Block+A+Wazirpur+Industrial+Area+Delhi+110052',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.749925232988!2d77.1654876!3d28.6946059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023a9d949cf9%3A0x6b77df07a01a357f!2sWazirpur%20Industrial%20Area%2C%20Ashok%20Vihar%2C%20Delhi%2C%20110052!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  socials: {
    instagram: 'https://www.instagram.com/gordon.interior/',
    facebook: 'https://www.facebook.com/gordon.interior/',
  },
  email: 'info@gordoninterior.in',
  workingHours: 'Monday – Saturday: 10:00 AM – 7:30 PM (Sunday by appointment)',
  warehouseLocation: 'Wazirpur Industrial Area, New West Delhi',
  serviceAreas: ['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida', 'Delhi NCR & Pan-North India'],
};

export const COLLECTIONS_DATA: ProductCollection[] = [
  {
    id: 'charcoal-louvers',
    slug: 'charcoal-louvers',
    title: 'Charcoal Louver Panels',
    shortTitle: 'Charcoal Louvers',
    subtitle: 'Precision-extruded architectural fluted panels offering deep tactile shadows and acoustic enrichment.',
    category: 'louvers',
    description: 'High-density polymer charcoal wall louvers designed for TV backdrop units, living room feature walls, executive suites, and luxury retail partitions.',
    longDescription: 'Engineered with high-density charcoal polymer technology, Gordon Charcoal Louvers deliver clean vertical lines, superior dimensional stability, and complete resistance to moisture, termites, and warping. The tongue-and-groove interlocking profile enables seamless, joint-free runs for any wall length.',
    heroImage: '/images/charcoal_louvers_texture_1791063103204.jpg',
    thumbnailImage: '/images/charcoal_louvers_texture_1791063103204.jpg',
    dimensions: '122mm (W) × 12mm (D) × 2900mm (L) / 9.5 ft Height',
    materialComposition: 'High-Density Virgin Charcoal Polymer (Eco-grade, Zero Formaldehyde)',
    thickness: '12mm fluted profile (custom 18mm & 24mm available)',
    warranty: '10 Years Structural Guarantee against termite & water damage',
    specifications: [
      { label: 'Standard Length', value: '2900 mm (approx. 9.5 ft - single floor-to-ceiling piece)' },
      { label: 'Effective Width', value: '120 mm per interlocking panel' },
      { label: 'Profile Depth', value: '12 mm / 18 mm deep shadow flutes' },
      { label: 'Water Resistance', value: '100% Waterproof (zero swelling under ambient moisture)' },
      { label: 'Termite & Borer', value: '100% Termite Proof & Borer Free' },
      { label: 'Fire Rating', value: 'B1 Flame-Retardant Self-Extinguishing Grade' },
      { label: 'Joint System', value: 'Precision Interlocking Tongue & Groove' },
      { label: 'Maintenance', value: 'Wipe-clean surface; zero polish or maintenance needed' },
    ],
    features: [
      {
        title: 'Architectural Fluting',
        description: 'Crisp vertical geometry creates rich shadowplay and optical height in residential and commercial spaces.',
      },
      {
        title: '100% Waterproof & Termite Proof',
        description: 'Impervious to Delhi NCR humidity and seepage issues, unlike natural MDF or raw timber slats.',
      },
      {
        title: 'Seamless Interlocking',
        description: 'Micro-beveled edge joints click together cleanly without visible fasteners or uneven spacing.',
      },
      {
        title: 'Zero Chemical Off-Gassing',
        description: 'Zero VOC and formaldehyde-free formulation safe for luxury bedrooms, nurseries, and executive cabins.',
      },
    ],
    applications: [
      'Living Room TV Media Feature Walls',
      'Master Bedroom Headboard Backdrops',
      'Corporate Reception & Boardroom Walls',
      'Luxury Retail Boutique Partitions',
      'Lift Lobby & Corridor Accent Cladding',
      'Staircase Double-Height Feature Walls',
    ],
    finishes: [
      {
        id: 'cl-nero-matte',
        name: 'Nero Charcoal Matte',
        code: 'GD-CL-01',
        description: 'Deep ultra-matte graphite black with fine architectural texture.',
        colorHex: '#181818',
        secondaryHex: '#0D0D0D',
        textureType: 'fluted',
        image: '/images/charcoal_louvers_texture_1791063103204.jpg',
        popular: true,
      },
      {
        id: 'cl-smoked-oak',
        name: 'Smoked European Oak',
        code: 'GD-CL-02',
        description: 'Rich natural warm oak grain with darkened recessed flutes.',
        colorHex: '#5C4033',
        secondaryHex: '#3E2A20',
        textureType: 'woodgrain',
        image: '/images/hero_wall_panels_interior_1791063088970.jpg',
        popular: true,
      },
      {
        id: 'cl-vintage-walnut',
        name: 'Vintage American Walnut',
        code: 'GD-CL-03',
        description: 'Sophisticated deep chocolate grain with tactile timber feel.',
        colorHex: '#3D2817',
        secondaryHex: '#25170B',
        textureType: 'woodgrain',
        image: '/images/charcoal_louvers_texture_1791063103204.jpg',
        popular: true,
      },
      {
        id: 'cl-cashmere-greige',
        name: 'Cashmere Greige',
        code: 'GD-CL-04',
        description: 'Warm modern off-white/greige for bright, airy contemporary interiors.',
        colorHex: '#C5BEB3',
        secondaryHex: '#A39C90',
        textureType: 'matte',
        image: '/images/architectural_decor_fluted_1791063125747.jpg',
      },
      {
        id: 'cl-bronze-metallic',
        name: 'Brushed Bronze Metallic',
        code: 'GD-CL-05',
        description: 'Subtle metallic bronze sheen catching ambient illumination.',
        colorHex: '#B08D57',
        secondaryHex: '#6E5530',
        textureType: 'metallic',
        image: '/images/charcoal_louvers_texture_1791063103204.jpg',
        popular: true,
      },
      {
        id: 'cl-graphite-slate',
        name: 'Graphite Stone Slate',
        code: 'GD-CL-06',
        description: 'Mid-tone industrial charcoal with tactile micro-stippling.',
        colorHex: '#2D3136',
        secondaryHex: '#1B1E22',
        textureType: 'fluted',
        image: '/images/project_delhi_penthouse_1791063137554.jpg',
      },
    ],
    faqs: [
      {
        question: 'What is the base material of Gordon Charcoal Louvers?',
        answer: 'Gordon Charcoal Louvers are engineered from high-density virgin charcoal polymer composites with specialized UV and scratch-resistant coatings. They are completely free from hollow fillers, ensuring solid core density and long-term dimensional stability.',
      },
      {
        question: 'How are the louvers installed on walls?',
        answer: 'They can be installed directly over plastered masonry, plywood grid, or existing wall surfaces using high-strength polyurethane adhesive and concealed starter clips / brad nails. The tongue-and-groove joint conceals all mechanical fasteners.',
      },
      {
        question: 'Can these panels be used in bathrooms or moist areas?',
        answer: 'Yes. Being 100% waterproof and non-porous, they are ideal for vanity backsplashes, powder rooms, and dining zones where humidity or water splashes are common (avoid direct high-pressure continuous shower streams).',
      },
      {
        question: 'Are sample pieces available for interior designers and architects in Delhi NCR?',
        answer: 'Yes! We provide complimentary architect sample folders and full-length swatch kits delivered across Delhi, Gurgaon, Noida, and Faridabad within 24–48 hours.',
      },
    ],
  },
  {
    id: 'pvc-uv-panels',
    slug: 'pvc-uv-panels',
    title: 'PVC UV Marble & Stone Panels',
    shortTitle: 'PVC UV Panels',
    subtitle: 'High-gloss and soft-honed architectural sheets replicating rare Italian marble without the weight or maintenance.',
    category: 'uv-panels',
    description: 'Ultra-durable, lightweight 8×4 ft architectural sheets finished with multi-layer UV hardcoat protection for opulent seamless walls.',
    longDescription: 'Gordon PVC UV Panels bring the drama of Italian Calacatta, Statuario, and Nero Marquina marble into contemporary spaces at a fraction of natural stone weight and installation time. Coated with diamond-hard UV curing layers, they resist scratches, stains, chemicals, and water while maintaining a mirror-like sheen.',
    heroImage: '/images/pvc_uv_marble_panel_1791063115471.jpg',
    thumbnailImage: '/images/pvc_uv_marble_panel_1791063115471.jpg',
    dimensions: '1220mm × 2440mm (8 ft × 4 ft) / Custom 9 ft available on project orders',
    materialComposition: 'Multi-layer PVC core with HD Stone Print Film + Cured UV Topcoat',
    thickness: '3.0 mm / 3.8 mm high-density core',
    warranty: '10 Years Surface Integrity Guarantee',
    specifications: [
      { label: 'Standard Sheet Size', value: '1220 mm × 2440 mm (4 ft × 8 ft standard)' },
      { label: 'Thickness', value: '3.0 mm / 3.8 mm heavy-duty commercial grade' },
      { label: 'Surface Finish', value: '98%+ High Gloss UV Cured / Matte Honed available' },
      { label: 'Water & Moisture', value: '100% Waterproof & zero absorption' },
      { label: 'Stain Resistance', value: 'Resistant to oils, coffee, ink, turmeric & household acids' },
      { label: 'Weight per Sheet', value: 'Approx. 16–18 kg (easy manual handling & lifting)' },
      { label: 'Matching Trims', value: 'T-profiles, L-corners, and edge trims in Gold & Bronze' },
    ],
    features: [
      {
        title: 'Diamond UV Hardcoat',
        description: 'Multi-pass UV curing produces deep optical gloss with extreme resistance to abrasions and household detergents.',
      },
      {
        title: 'Bookmatched Veining',
        description: 'Continuously aligned marble patterns available for monumental seamless feature walls and lobbies.',
      },
      {
        title: 'Rapid Dry Installation',
        description: 'Direct adhesive bonding over existing tiles, drywall, or plaster with zero wet curing delays or rubble.',
      },
      {
        title: 'Cost & Weight Efficiency',
        description: 'Delivers the aesthetic prestige of imported Italian marble without structural reinforcement or heavy cranes.',
      },
    ],
    applications: [
      'Luxury Foyer & Entryway Feature Walls',
      'Modern Kitchen Backsplashes (Heat-zoned)',
      'Hotel Corridor & Elevator Cladding',
      'Powder Rooms & Vanity Feature Walls',
      'Commercial Reception Counters & Backdrops',
      'Showroom & Retail Storefront Interiors',
    ],
    finishes: [
      {
        id: 'uv-calacatta-gold',
        name: 'Calacatta Gold Royale',
        code: 'GD-UV-101',
        description: 'Warm cream base with dramatic gold and graphite veining in high-gloss UV.',
        colorHex: '#F3EFEA',
        secondaryHex: '#C5A059',
        textureType: 'marble',
        image: '/images/pvc_uv_marble_panel_1791063115471.jpg',
        popular: true,
      },
      {
        id: 'uv-nero-marquina',
        name: 'Imperial Nero Marquina',
        code: 'GD-UV-102',
        description: 'Deep obsidian black with crisp, lightning-white dynamic veins.',
        colorHex: '#141414',
        secondaryHex: '#E5E5E5',
        textureType: 'marble',
        image: '/images/pvc_uv_marble_panel_1791063115471.jpg',
        popular: true,
      },
      {
        id: 'uv-grigio-orobico',
        name: 'Grigio Orobico Graphite',
        code: 'GD-UV-103',
        description: 'Sophisticated smoky grey Italian marble with layered movement.',
        colorHex: '#4A4C50',
        secondaryHex: '#8C8E94',
        textureType: 'marble',
        image: '/images/project_delhi_penthouse_1791063137554.jpg',
      },
      {
        id: 'uv-travertine-mist',
        name: 'Travertine Mist Matte',
        code: 'GD-UV-104',
        description: 'Tactile, low-sheen warm porous limestone finish for organic luxury.',
        colorHex: '#DCD4C4',
        secondaryHex: '#B5AA96',
        textureType: 'matte',
        image: '/images/charcoal_louvers_texture_1791063103204.jpg',
        popular: true,
      },
      {
        id: 'uv-statuario-white',
        name: 'Statuario Pure White',
        code: 'GD-UV-105',
        description: 'Crisp crystalline white ground with delicate silver feather veins.',
        colorHex: '#FBFBFC',
        secondaryHex: '#B0B4BC',
        textureType: 'marble',
        image: '/images/pvc_uv_marble_panel_1791063115471.jpg',
      },
    ],
    faqs: [
      {
        question: 'How do PVC UV Panels compare to natural Italian marble slabs?',
        answer: 'Gordon PVC UV panels achieve the same high-gloss depth and pattern fidelity as natural marble at approximately 70% lower material and installation cost, with zero porosity, zero sealing requirements, and effortless cleaning.',
      },
      {
        question: 'Can they be applied over old bathroom or kitchen tiles?',
        answer: 'Yes. They are commonly bonded directly over existing sound tiles with hybrid polymer adhesives, saving time and eliminating the mess of chipping old tiles.',
      },
      {
        question: 'What sizes are kept in stock at the Wazirpur warehouse?',
        answer: 'We stock standard 8 ft × 4 ft (2440 × 1220 mm) sheets across all popular shades for immediate pickup and Delhi NCR same-day/next-day dispatch.',
      },
    ],
  },
  {
    id: 'architectural-decor',
    slug: 'architectural-decor',
    title: 'Architectural Décor & Metal Trims',
    shortTitle: 'Architectural Décor',
    subtitle: 'Curated wall elements, acoustic fluted modules, and brushed bronze profiles engineered for bespoke interior architecture.',
    category: 'decor',
    description: 'Precision accessories and transition trims designed to frame, illuminate, and complete luxury panel installations seamlessly.',
    longDescription: 'Every great architectural finish relies on flawless edge transitions and reveal details. Gordon Architectural Décor includes high-grade aluminum and SS transition trims in brushed bronze, matte black, and champagne gold, alongside modular 3D relief panels for bespoke hospitality and residential commissions.',
    heroImage: '/images/architectural_decor_fluted_1791063125747.jpg',
    thumbnailImage: '/images/architectural_decor_fluted_1791063125747.jpg',
    dimensions: 'Trims: 2900mm (L) × various widths (10mm, 20mm, 30mm)',
    materialComposition: 'Architectural Grade Anodized Aluminum / Stainless Steel Alloy / Acoustic Core',
    thickness: '1.2 mm – 2.0 mm wall thickness',
    warranty: '10 Years Anodizing & Surface Guarantee',
    specifications: [
      { label: 'Available Profiles', value: 'T-Profile, U-Channel, External L-Angle, LED Shadowline Diffuser' },
      { label: 'Standard Length', value: '2900 mm & 3050 mm continuous extrusions' },
      { label: 'Anodized Finishes', value: 'Brushed Bronze, Matte Black, Champagne Gold, Gunmetal Grey' },
      { label: 'Lighting Integration', value: 'Dedicated channel for direct/indirect 8mm-12mm LED strips' },
      { label: 'Application', value: 'Seamless border between louvers, stone sheets, and painted drywall' },
    ],
    features: [
      {
        title: 'Precision Shadowlines',
        description: 'Creates razor-sharp architectural recesses between panel segments or ceiling transitions.',
      },
      {
        title: 'LED Lighting Ready',
        description: 'Integrated diffuser channels allow concealed ambient backlighting with no visible LED hot-spots.',
      },
      {
        title: 'PVD Coated Stainless Steel',
        description: 'Scratch-resistant metallic finishes that never tarnish or corrode under cleaning chemicals.',
      },
      {
        title: 'Effortless Corner Alignment',
        description: 'Pre-machined corner connectors guarantee 90-degree miters with zero field filing.',
      },
    ],
    applications: [
      'Panel Perimeter & Ceiling Border Accents',
      'Backlit TV Console Niches',
      'Door Casing & Jamb Transitions',
      'Baseboard & Skirting Shadowlines',
      'Vertical Inlay Accents in Louver Walls',
    ],
    finishes: [
      {
        id: 'trim-brushed-bronze',
        name: 'Brushed Architectural Bronze',
        code: 'GD-TR-201',
        description: 'Rich satin bronze with micro-brushed texture.',
        colorHex: '#B08D57',
        textureType: 'metallic',
        image: '/images/architectural_decor_fluted_1791063125747.jpg',
        popular: true,
      },
      {
        id: 'trim-matte-black',
        name: 'Matte Obsidian Black',
        code: 'GD-TR-202',
        description: 'Deep anodized black for sharp shadow reveals.',
        colorHex: '#121212',
        textureType: 'metallic',
        image: '/images/charcoal_louvers_texture_1791063103204.jpg',
        popular: true,
      },
      {
        id: 'trim-champagne-gold',
        name: 'Champagne Gold PVD',
        code: 'GD-TR-203',
        description: 'Refined subtle gold with soft metallic luster.',
        colorHex: '#D4AF37',
        textureType: 'metallic',
        image: '/images/pvc_uv_marble_panel_1791063115471.jpg',
        popular: true,
      },
    ],
    faqs: [
      {
        question: 'Are metal trims required for installing Gordon wall panels?',
        answer: 'While Gordon Charcoal Louvers interlock seamlessly without trims on flat runs, our architectural trims provide pristine finishing for exposed outer corners, ceiling shadowlines, and backlit niches.',
      },
      {
        question: 'Can LED light strips be integrated directly into the profiles?',
        answer: 'Yes, our LED shadowline profile includes a snap-in milky diffuser that houses standard COB and SMD LED strips for streak-free architectural glow.',
      },
    ],
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Direct Importer & Stockist',
    description: 'Direct container imports ensuring consistent batch quality and elimination of middleman markups.',
    icon: 'PackageCheck',
  },
  {
    title: 'Delhi NCR Ready Stock',
    description: 'High-volume central warehouse in Wazirpur Industrial Area for immediate same-day/next-day site delivery.',
    icon: 'Truck',
  },
  {
    title: 'Trade Pricing for Specifiers',
    description: 'Tiered wholesale pricing, project bill-of-quantities support, and complimentary sample kits for architects.',
    icon: 'Layers',
  },
  {
    title: 'Precision Shade Consistency',
    description: 'Rigorous color-calibrated production runs ensuring zero shade variation across multi-room projects.',
    icon: 'Palette',
  },
];

export const WHY_GORDON = [
  {
    step: '01',
    title: 'Architectural-Grade Density',
    description: 'Unlike flimsy generic wall slats, Gordon panels are engineered with high-density polymer matrices that resist impact, warping, and seasonal expansion in Delhi weather.',
  },
  {
    step: '02',
    title: 'Fast & Clean Dry Installation',
    description: 'Precision tongue-and-groove profiles install up to 4× faster than traditional timber fluting or wet marble work, with no dust, polish, or curing wait times.',
  },
  {
    step: '03',
    title: 'Zero Maintenance & 100% Moisture Proof',
    description: 'Impervious to seepage, termites, and household stains. Wipe clean with a damp microfiber cloth for decades of pristine visual character.',
  },
  {
    step: '04',
    title: 'Designer-First Shade Palette',
    description: 'Curated specifically to complement modern Indian luxury residences and commercial interiors, from matte charcoals to warm European oaks and Italian stone.',
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Browse & Select Finish',
    description: 'Explore our curated collections online or visit our Wazirpur showroom to feel textures.',
  },
  {
    num: '02',
    title: 'Request Sample Folder',
    description: 'We dispatch physical material sample boxes directly to your studio or site in Delhi NCR.',
  },
  {
    num: '03',
    title: 'Trade Quote & BOQ',
    description: 'Share your wall dimensions or CAD drawings for instant quantity takeoff and wholesale trade pricing.',
  },
  {
    num: '04',
    title: 'Rapid Delhi NCR Delivery',
    description: 'Direct logistics dispatch from our Wazirpur warehouse straight to your project site.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Golf Course Road Executive Residence',
    category: 'residential',
    location: 'Gurgaon, Haryana',
    materialsUsed: ['Charcoal Louvers in Nero Matte', 'Brushed Bronze Shadowline Trims'],
    areaSqFt: '450 sq.ft',
    image: '/images/hero_wall_panels_interior_1791063088970.jpg',
    description: 'Full-height acoustic feature wall behind 85" OLED media center with integrated concealed wiring and warm perimeter LED lighting.',
    architectNote: 'Selected for zero-reflection matte black finish and crisp vertical shadowplay.',
  },
  {
    id: 'proj-2',
    title: 'Vasant Vihar Luxury Penthouse',
    category: 'residential',
    location: 'South Delhi',
    materialsUsed: ['PVC UV Panels in Calacatta Gold', 'Charcoal Louvers in Smoked Oak'],
    areaSqFt: '720 sq.ft',
    image: '/images/project_delhi_penthouse_1791063137554.jpg',
    description: 'Bookmatched Calacatta marble wall panels paired with warm fluted woodgrain louvers for the primary entrance foyer and formal living.',
    architectNote: 'Achieved authentic Italian stone grandeur with rapid 2-day installation.',
  },
  {
    id: 'proj-3',
    title: 'Connaught Place Law Chambers',
    category: 'commercial',
    location: 'Central Delhi',
    materialsUsed: ['Charcoal Louvers in Vintage Walnut', 'Matte Black Aluminum Reveal Trims'],
    areaSqFt: '980 sq.ft',
    image: '/images/charcoal_louvers_texture_1791063103204.jpg',
    description: 'Executive conference room and senior partner cabins lined with sound-dampening fluted wall cladding.',
    architectNote: 'Significantly enhanced speech clarity while lending timeless authority to the chambers.',
  },
  {
    id: 'proj-4',
    title: 'Greater Kailash Duplex Master Suite',
    category: 'residential',
    location: 'South Delhi',
    materialsUsed: ['Architectural Fluted Panels', 'Cashmere Greige Fluted Slat Accents'],
    areaSqFt: '380 sq.ft',
    image: '/images/architectural_decor_fluted_1791063125747.jpg',
    description: 'Bedhead accent wall with asymmetric vertical louvers and integrated bedside bronze sconces.',
    architectNote: 'Warm greige palette reflects soft natural morning light without harsh glare.',
  },
  {
    id: 'proj-5',
    title: 'Aerocity Boutique Hospitality Suite',
    category: 'hospitality',
    location: 'Aerocity, New Delhi',
    materialsUsed: ['PVC UV Panels in Nero Marquina', 'Brushed Bronze Trim Accents'],
    areaSqFt: '620 sq.ft',
    image: '/images/pvc_uv_marble_panel_1791063115471.jpg',
    description: 'Lobby cocktail bar backdrop and VIP lounge focal wall featuring high-gloss black marble sheeting.',
    architectNote: 'High-traffic commercial resistance with instant wipe-clean maintenance.',
  },
  {
    id: 'proj-6',
    title: 'Noida Sector 62 Tech Headquarters',
    category: 'commercial',
    location: 'Noida, NCR',
    materialsUsed: ['Charcoal Louvers in Graphite Slate', 'LED Shadowline Profiles'],
    areaSqFt: '1,400 sq.ft',
    image: '/images/hero_wall_panels_interior_1791063088970.jpg',
    description: 'Double-height town hall stage backdrop and client experience center with dynamic vertical rhythmic slats.',
    architectNote: 'Delivered in continuous 9.5 ft single pieces for seamless floor-to-ceiling installation.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Ar. Rohit Malhotra [PLACEHOLDER - Design Partner]',
    role: 'Principal Architect',
    firm: 'Malhotra & Associates Architects',
    location: 'South Delhi',
    quote: 'As an architect specifying for high-end residential clients in Delhi, shade consistency and on-site delivery reliability are paramount. Gordon provides imported material quality that matches international standards, with ready stock in Wazirpur.',
    projectType: 'Luxury Residential',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Neha Singhania [PLACEHOLDER - Interior Designer]',
    role: 'Lead Interior Designer',
    firm: 'Studio Atelier NCR',
    location: 'Gurgaon',
    quote: 'The Charcoal Louvers series solved our long-standing problem of MDF warping due to Delhi weather. The interlocking is razor-sharp and the sample kit made client approvals effortless.',
    projectType: 'Penthouse & Commercial',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Vikas Bansal [PLACEHOLDER - Turnkey Contractor]',
    role: 'Managing Director',
    firm: 'Apex Interior Infrastructure',
    location: 'Noida & Delhi NCR',
    quote: 'We have executed over 8,000 sq.ft with Gordon PVC UV Panels and Louvers across corporate projects. Fast dry installation, zero site dust, and direct trade pricing make them our preferred supplier.',
    projectType: 'Corporate & Hospitality',
    rating: 5,
  },
];

export const GENERAL_FAQS = [
  {
    question: 'Are you a design studio or a materials supplier/importer?',
    answer: 'GORDON is a direct importer, stockist, and B2B/B2C supplier of premium architectural wall panels, louvers, and surface materials. We do not do turnkey interior design services; instead, we supply high-grade materials to architects, interior designers, contractors, and homeowners.',
  },
  {
    question: 'Where is your warehouse and showroom located in Delhi?',
    answer: 'Our central warehouse and showroom are located at A-95/3, Block A, Wazirpur Industrial Area, New West, Delhi, 110052. Architects and clients are welcome to inspect full-size sheets and textures.',
  },
  {
    question: 'What is the delivery timeline for Delhi NCR and surrounding regions?',
    answer: 'For in-stock shades and profiles, same-day pickup from Wazirpur or 24-hour site delivery is available across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Bulk outstation consignments across North India dispatch within 48 hours.',
  },
  {
    question: 'How do interior designers and architects register for trade pricing?',
    answer: 'Design professionals can request a dedicated Trade Account on our "For Professionals" page or via WhatsApp. You will receive wholesale price lists, CAD specs, and a physical sample presentation box.',
  },
  {
    question: 'Can you assist with installation contractors?',
    answer: 'While our panels are designed for standard carpentry and drywall installers, we maintain an authorized network of vetted panel installation specialists across Delhi NCR available for project execution.',
  },
];
