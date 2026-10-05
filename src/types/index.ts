export interface Product {
  id: string;
  name: string;
  description: string;
  /** Price in INR (whole rupees) */
  price: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  /** Fabric weight story, e.g. "~260 GSM combed cotton (target)" */
  gsm: string;
  /** Decoration type, e.g. "High-density graphic print" */
  decoration: string;
  /** Fit description, e.g. "Oversized, drop-shoulder, unisex" */
  fit: string;
  /** Where this product honestly stands today */
  status: 'in-development' | 'concept';
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

/**
 * Pre-launch waitlist entry. No payment, address, or order data is
 * collected until the store actually goes live.
 */
export interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  city: string;
  pinCode: string;
}

export interface WaitlistConfirmation {
  reference: string;
  entry: WaitlistEntry;
  items: CartItem[];
  createdAt: string;
}
