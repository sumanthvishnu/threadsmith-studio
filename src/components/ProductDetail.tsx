import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { CONCEPT_IMAGE_CAPTION, DROP_EDITION } from '@/data/products';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

/**
 * Browse-only product page. Main image plus a patch close-up, the design
 * story, and an honest status note. No price, no cart, no checkout.
 */
export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button variant="ghost" className="mb-8 -ml-3" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to the drop
        </Button>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Images: main + patch close-up */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-950 mb-3">
              <img
                src={product.images[activeImage]}
                alt={
                  activeImage === 0
                    ? product.name
                    : `${product.name} patch close-up`
                }
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/90">
                Drop not open yet
              </Badge>
            </div>
            <div className="flex gap-3 mb-2">
              {product.images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === index
                      ? 'border-neutral-900'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  aria-label={
                    index === 0 ? 'Main image' : 'Patch close-up'
                  }
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic">
              {CONCEPT_IMAGE_CAPTION}
            </p>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-lg italic text-gray-500 mb-6">
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>{product.fit}</p>
              <p>{product.gsm}</p>
              <p>{product.decoration}</p>
              <p className="text-gray-900 font-medium">{DROP_EDITION}</p>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md px-4 py-3 text-center">
              <p className="text-sm text-gray-500">
                Drop not open yet. No orders, no payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
