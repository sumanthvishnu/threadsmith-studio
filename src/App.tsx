import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

type Page = 'home' | 'products' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
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
            <ProductGrid />
          </>
        );
      case 'products':
        return <ProductGrid />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero
              onShopNow={() => handleNavigate('products')}
              onAbout={() => handleNavigate('about')}
            />
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <Toaster />
    </div>
  );
}

export default App;
