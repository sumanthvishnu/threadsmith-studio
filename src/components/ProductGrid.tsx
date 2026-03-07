import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-designed apparel for every passion. From developers to gamers, pet lovers to fitness enthusiasts — 
            find your perfect design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
