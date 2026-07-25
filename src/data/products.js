// Mock catalog data.
// Replace this file (or the fetch calls that use it) with real API/database
// calls once the backend is ready. Shape of each product is kept deliberately
// simple and flat so it maps easily onto a typical products table.

export const categories = [
  { slug: 'all', name: 'Everything' },
  { slug: 'audio', name: 'Audio' },
  { slug: 'home', name: 'Home & Living' },
  { slug: 'apparel', name: 'Apparel' },
  { slug: 'accessories', name: 'Accessories' },
  { slug: 'outdoors', name: 'Outdoors' },
]

export const products = [
  {
    id: 'ws-001',
    name: 'Ridgeline Canvas Backpack',
    category: 'accessories',
    price: 89.0,
    compareAt: 118.0,
    rating: 4.7,
    reviews: 214,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    description:
      'Waxed canvas and full-grain leather trim, built for daily carry and weekend trips alike. Padded 15" laptop sleeve, brass hardware that ages with you.',
    colors: ['Moss', 'Charcoal', 'Sand'],
  },
  {
    id: 'ws-002',
    name: 'Aerial Wireless Headphones',
    category: 'audio',
    price: 149.0,
    compareAt: 199.0,
    rating: 4.8,
    reviews: 532,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description:
      '40-hour battery, active noise cancellation, and a fold-flat hinge for the bag. Tuned for warmth, not just loudness.',
    colors: ['Black', 'Cream'],
  },
  {
    id: 'ws-003',
    name: 'Kiln Ceramic Pour-Over Set',
    category: 'home',
    price: 64.0,
    compareAt: null,
    rating: 4.9,
    reviews: 98,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    description:
      'Hand-glazed stoneware dripper, server, and two cups. Each piece is kiln-fired individually, so no two sets are identical.',
    colors: ['Oat', 'Slate'],
  },
  {
    id: 'ws-004',
    name: 'Overland Merino Crewneck',
    category: 'apparel',
    price: 74.0,
    compareAt: 94.0,
    rating: 4.6,
    reviews: 341,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    description:
      '17.5 micron merino, regulates temperature in heat or cold, and resists odor after long wear. Ribbed collar and cuffs.',
    colors: ['Forest', 'Stone', 'Ink'],
  },
  {
    id: 'ws-005',
    name: 'Basecamp Enamel Mug Set',
    category: 'outdoors',
    price: 28.0,
    compareAt: null,
    rating: 4.7,
    reviews: 156,
    tag: null,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    description:
      'Set of four camp-ready enamel mugs, chip-resistant rims, and a stackable base for a tight pack.',
    colors: ['Cream', 'Forest'],
  },
  {
    id: 'ws-006',
    name: 'Analog Field Watch',
    category: 'accessories',
    price: 165.0,
    compareAt: 210.0,
    rating: 4.8,
    reviews: 407,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    description:
      'Sapphire crystal, 100m water resistance, and a hand-stitched leather strap. Automatic movement, visible through the case back.',
    colors: ['Tan Strap', 'Black Strap'],
  },
  {
    id: 'ws-007',
    name: 'Driftwood Table Lamp',
    category: 'home',
    price: 96.0,
    compareAt: null,
    rating: 4.5,
    reviews: 62,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    description:
      'Solid ash base with a hand-sewn linen shade. Warm 2700K bulb included, three-way dimmer switch built into the cord.',
    colors: ['Natural', 'Walnut'],
  },
  {
    id: 'ws-008',
    name: 'Trailhead Rain Shell',
    category: 'outdoors',
    price: 118.0,
    compareAt: 145.0,
    rating: 4.6,
    reviews: 289,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    description:
      'Fully seam-taped, 3-layer waterproof shell that still packs into its own chest pocket. Pit zips for when the trail gets steep.',
    colors: ['Moss', 'Charcoal', 'Rust'],
  },
  {
    id: 'ws-009',
    name: 'Portside Wool Scarf',
    category: 'apparel',
    price: 42.0,
    compareAt: null,
    rating: 4.9,
    reviews: 121,
    tag: null,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
    description:
      'Lambswool, woven in a small mill on the coast. Wide enough to double-wrap, long enough to not need to.',
    colors: ['Rust', 'Oat', 'Navy'],
  },
  {
    id: 'ws-010',
    name: 'Compact Turntable',
    category: 'audio',
    price: 229.0,
    compareAt: 279.0,
    rating: 4.7,
    reviews: 175,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80',
    description:
      'Belt-driven, built-in preamp, and Bluetooth output for speakers without a cable. Solid walnut plinth.',
    colors: ['Walnut'],
  },
  {
    id: 'ws-011',
    name: 'Harbor Linen Bedding Set',
    category: 'home',
    price: 138.0,
    compareAt: null,
    rating: 4.8,
    reviews: 203,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    description:
      'Stonewashed French linen, gets softer with every wash. Duvet cover, fitted sheet, and two pillowcases.',
    colors: ['Fog', 'Clay', 'Sage'],
  },
  {
    id: 'ws-012',
    name: 'Foldaway Camp Chair',
    category: 'outdoors',
    price: 58.0,
    compareAt: 72.0,
    rating: 4.4,
    reviews: 94,
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?w=800&q=80',
    description:
      'Powder-coated steel frame folds down to the size of a tent pole bag. Rated to 300 lbs, machine-washable cover.',
    colors: ['Forest', 'Charcoal'],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelated(product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count)
}
