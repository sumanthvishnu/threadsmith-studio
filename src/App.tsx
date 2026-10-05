import { useState } from 'react';
import { CartProvider } from '@/hooks/useCart';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { CartDrawer } from '@/components/CartDrawer';
import { Checkout } from '@/components/Checkout';
import { WaitlistConfirmation } from '@/components/WaitlistConfirmation';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

type Page = 'home' | 'products' | 'about' | 'checkout' | 'success';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [waitlistReference, setWaitlistReference] = useState<string>('');

  const handleNavigate = (page: 'home' | 'products' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleShopNow = () => {
    setCurrentPage('products');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCurrentPage('checkout');
    window.scrollTo(0, 0);
  };

  const handleWaitlistComplete = (reference: string) => {
    setWaitlistReference(reference);
    setCurrentPage('success');
    window.scrollTo(0, 0);
  };

  const handleContinueShopping = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onShopNow={handleShopNow} onAbout={() => handleNavigate('about')} />
            <ProductGrid />
          </>
        );
      case 'products':
        return <ProductGrid />;
      case 'about':
        return <About />;
      case 'checkout':
        return (
          <Checkout
            onBack={() => setCurrentPage('home')}
            onOrderComplete={handleWaitlistComplete}
          />
        );
      case 'success':
        return (
          <WaitlistConfirmation
            reference={waitlistReference}
            onContinueShopping={handleContinueShopping}
          />
        );
      default:
        return (
          <>
            <Hero onShopNow={handleShopNow} onAbout={() => handleNavigate('about')} />
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header
          onCartClick={() => setCartOpen(true)}
          onNavigate={handleNavigate}
          currentPage={currentPage}
        />

        <main className="flex-1">
          {renderContent()}
        </main>

        {currentPage !== 'checkout' && currentPage !== 'success' && <Footer />}

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
