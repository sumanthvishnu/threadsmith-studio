import type { Product } from '@/types';

/**
 * Threadsmith · First Drop (in development)
 *
 * Honest placeholders for the real line: black oversized heavy tees,
 * print and embroidery. Final artwork and product photography are still
 * being developed, so images are marked placeholders on purpose.
 * Prices are targets in INR and stay under the ₹2,500 lane.
 */
export const products: Product[] = [
  {
    id: 'ts-01-heavy-graphic',
    name: 'TS-01 Heavy Graphic Tee',
    description:
      'Our lead graphic tee. Black, oversized, drop-shoulder, built on heavy combed cotton with a wash-fast high-density print. Final artwork is in development.',
    price: 1899,
    image: '/placeholders/ts-01.svg',
    category: 'First Drop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'High-density graphic print',
    fit: 'Oversized, drop-shoulder, unisex',
    status: 'in-development',
  },
  {
    id: 'ts-02-chest-embroidery',
    name: 'TS-02 Chest Embroidery Tee',
    description:
      'The quiet one. Black oversized heavy tee with a single small embroidery on the chest. One mark, done properly, on cloth that holds its shape.',
    price: 1699,
    image: '/placeholders/ts-02.svg',
    category: 'First Drop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'Small chest embroidery',
    fit: 'Oversized, drop-shoulder, unisex',
    status: 'in-development',
  },
  {
    id: 'ts-03-print-embroidery',
    name: 'TS-03 Print + Embroidery Tee',
    description:
      'Concept sample. A black oversized heavy tee combining a graphic print with embroidery in one piece. Shown here to share the direction, not as a finished product.',
    price: 2199,
    image: '/placeholders/ts-03.svg',
    category: 'Concept',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    gsm: '~260 GSM combed cotton (target)',
    decoration: 'Graphic print + embroidery',
    fit: 'Oversized, drop-shoulder, unisex',
    status: 'concept',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

/** Format a whole-rupee INR price, e.g. 1899 -> "₹1,899" */
export const formatINR = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
