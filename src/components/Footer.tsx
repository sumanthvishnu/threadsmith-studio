import { Sparkles, Mail, Twitter, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Threadsmith Studio</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Premium AI-designed apparel for developers and tech enthusiasts. 
              Fully automated print-on-demand business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-violet-400 transition-colors">Shop All</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">New Arrivals</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">Best Sellers</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">About Us</button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-violet-400 transition-colors">Contact Us</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">Shipping Info</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">Returns</button>
              </li>
              <li>
                <button className="hover:text-violet-400 transition-colors">Size Guide</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Threadsmith Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <span>support@threadsmith.studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
