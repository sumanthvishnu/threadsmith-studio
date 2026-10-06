import type { Product } from '@/types';

/**
 * Threadsmith · Drop 01 (not open yet)
 *
 * The first drop's three designs, shown as concept images while the real
 * samples are being made. Browse-only: no prices, no orders, no payments.
 * Every piece is a black oversized drop-shoulder tee on heavy combed
 * cotton, with a frayed canvas patch and red thread somewhere on it.
 */
export const products: Product[] = [
  {
    id: 'drop-01-smoke',
    name: 'Smoke',
    tagline: 'holding onto smoke and calling it a memory',
    description:
      'Two frayed cream canvas patches. Reaching hands in line art, with a red braided cord stitched between the wrists.',
    images: ['/drop-01/smoke.jpg', '/drop-01/smoke-patch.jpg'],
    category: 'Drop 01',
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'Frayed canvas patches, line art, red braided cord',
    fit: 'Black · Oversized, drop-shoulder, unisex',
  },
  {
    id: 'drop-01-panther',
    name: 'Panther',
    tagline: 'quiet feet / sharp teeth',
    description:
      'A frayed patch with a walking panther in line art. Raised red embroidered slashes cut across the patch and onto the tee.',
    images: ['/drop-01/panther.jpg', '/drop-01/panther-patch.jpg'],
    category: 'Drop 01',
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'Frayed canvas patch, line art, raised red embroidery',
    fit: 'Black · Oversized, drop-shoulder, unisex',
  },
  {
    id: 'drop-01-david',
    name: 'David',
    tagline: 'perfection is a flaw',
    description:
      'A frayed patch with a classical bust in line art. A dense raised red embroidered bar sits over the eyes.',
    images: ['/drop-01/david.jpg', '/drop-01/david-patch.jpg'],
    category: 'Drop 01',
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'Frayed canvas patch, line art, dense red embroidery',
    fit: 'Black · Oversized, drop-shoulder, unisex',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

/** Shared honesty lines, used on cards and the product page */
export const DROP_EDITION = 'Limited edition. 50 numbered pieces per design.';
export const CONCEPT_IMAGE_CAPTION =
  'Concept images. Real photos coming with the samples.';
