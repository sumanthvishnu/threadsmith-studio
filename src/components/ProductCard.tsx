import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Check } from 'lucide-react';
import type { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { formatINR } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]); // Default to M
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>

        {/* Size Selection */}
        <div className="mb-3">
          <label className="text-xs font-medium text-gray-500 mb-2 block">Size</label>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-8 h-8 px-2 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === size
                    ? 'bg-neutral-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <label className="text-xs font-medium text-gray-500 mb-2 block">Colour</label>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedColor === color
                    ? 'bg-neutral-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className={`w-full transition-all duration-300 ${
            addedToCart
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-neutral-900 hover:bg-neutral-800'
          }`}
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to waitlist cart
            </>
          )}
        </Button>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Not on sale yet. Adding builds your waitlist selection.
        </p>
      </CardContent>
    </Card>
  );
}
