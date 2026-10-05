import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onViewProduct: (id: string) => void;
}

export function ProductGrid({ onViewProduct }: ProductGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Drop 01
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three designs on black oversized heavy tees. Frayed canvas
            patches, line art, red thread on every piece. What you see are
            concept images, real photos land with the samples.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={onViewProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
