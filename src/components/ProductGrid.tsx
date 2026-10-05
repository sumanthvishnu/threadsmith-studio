import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The First Drop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three tees in black. Oversized, heavy, built around cloth and
            decoration quality. Final artwork and photography are still in
            development, so what you see here are honest placeholders, not
            borrowed pictures.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
