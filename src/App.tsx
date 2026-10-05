import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetail } from '@/components/ProductDetail';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { getProductById } from '@/data/products';

type Page = 'home' | 'products' | 'about' | 'product';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleViewProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero
              onShopNow={() => handleNavigate('products')}
              onAbout={() => handleNavigate('about')}
            />
            <ProductGrid onViewProduct={handleViewProduct} />
          </>
        );
      case 'products':
        return <ProductGrid onViewProduct={handleViewProduct} />;
      case 'product': {
        const product = selectedProductId
          ? getProductById(selectedProductId)
          : undefined;
        return product ? (
          <ProductDetail
            product={product}
            onBack={() => handleNavigate('products')}
          />
        ) : (
          <ProductGrid onViewProduct={handleViewProduct} />
        );
      }
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero
              onShopNow={() => handleNavigate('products')}
              onAbout={() => handleNavigate('about')}
            />
            <ProductGrid onViewProduct={handleViewProduct} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        onNavigate={handleNavigate}
        currentPage={currentPage === 'product' ? 'products' : currentPage}
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <Toaster />
    </div>
  );
}

export default App;
