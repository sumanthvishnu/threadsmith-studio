import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types';
import { CONCEPT_IMAGE_CAPTION, DROP_EDITION } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
}

/**
 * Browse-only product card. The drop is not open, so there is no price,
 * no cart, and no call to action beyond looking at the design.
 *
 * The card is a real anchor so it is keyboard-focusable and works with
 * assistive tech. Navigation is handled in-app (no router), so the click
 * default is prevented and routed through onView.
 */
export function ProductCard({ product, onView }: ProductCardProps) {
  return (
    <a
      href={`#${product.id}`}
      onClick={(event) => {
        event.preventDefault();
        onView(product.id);
      }}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-950">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/90">
          Drop not open yet
        </Badge>
      </div>

      <CardContent className="p-5">
        <p className="text-[11px] text-gray-400 italic mb-3">
          {CONCEPT_IMAGE_CAPTION}
        </p>

        {/* Name & tagline */}
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm italic text-gray-500 mb-3">
          &ldquo;{product.tagline}&rdquo;
        </p>

        {/* Fabric & decoration specs */}
        <div className="text-xs text-gray-600 space-y-1 mb-3">
          <p>{product.fit}</p>
          <p>{product.gsm}</p>
          <p>{product.decoration}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
          {product.description}
        </p>

        <p className="text-xs text-gray-500">{DROP_EDITION}</p>
      </CardContent>
      </Card>
    </a>
  );
}
