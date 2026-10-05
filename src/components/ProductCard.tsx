import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types';
import { formatINR } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

/**
 * Browse-only product card. The drop is not open, so there is no cart,
 * no size picker state, and no call to action beyond honest information.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/90">
          {product.status === 'concept' ? 'Concept sample' : 'In development'}
        </Badge>
      </div>

      <CardContent className="p-5">
        {/* Title & Price */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
          <span className="font-bold text-gray-900">{formatINR(product.price)}</span>
        </div>
        <p className="text-xs text-gray-400 mb-3">Target price</p>

        {/* Fabric & decoration specs */}
        <div className="text-xs text-gray-600 space-y-1 mb-3">
          <p>{product.fit}</p>
          <p>{product.gsm}</p>
          <p>{product.decoration}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{product.description}</p>

        {/* Static variant info */}
        <p className="text-xs text-gray-500 mb-4">
          {product.colors.join(', ')} · Sizes {product.sizes.join(' / ')}
        </p>

        {/* Honest status note */}
        <div className="border border-dashed border-gray-300 rounded-md px-3 py-2 text-center">
          <p className="text-xs text-gray-500">Drop not open yet. No orders.</p>
        </div>
      </CardContent>
    </Card>
  );
}
