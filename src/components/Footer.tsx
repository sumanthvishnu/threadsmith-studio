interface FooterProps {
  onNavigate: (page: 'home' | 'products' | 'about') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-neutral-950 text-sm font-bold tracking-tight">TS</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Threadsmith</span>
            </div>
            <p className="text-neutral-500 max-w-sm">
              Premium oversized streetwear from Chennai, India. Heavy cotton,
              wash-fast prints, real embroidery. First drop in development.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  Shop the First Drop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Note */}
          <div>
            <h4 className="text-white font-semibold mb-4">Honest status</h4>
            <p className="text-sm text-neutral-500">
              Threadsmith is pre-launch. Product images on this site are
              placeholders, and payments are not live yet.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 Threadsmith. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
