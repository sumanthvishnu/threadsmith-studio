import { Button } from '@/components/ui/button';
import { ArrowRight, Shirt, Layers, PenTool } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onAbout: () => void;
}

export function Hero({ onShopNow, onAbout }: HeroProps) {
  const features = [
    { icon: Shirt, text: 'Oversized drop-shoulder fit' },
    { icon: Layers, text: '240 to 300 GSM heavy cotton' },
    { icon: PenTool, text: 'Print and embroidery' },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-24 lg:py-36">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium mb-8">
            <span>Chennai, India · First drop in development</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Heavy tees. No noise.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Threadsmith is a premium oversized streetwear label from Chennai.
            Dense combed cotton, drop-shoulder fits, wash-fast prints and real
            embroidery. We are building the first drop now, and we would rather
            show you honest placeholders than pretend otherwise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-neutral-950 hover:bg-neutral-200 px-8"
              onClick={onShopNow}
            >
              See the first drop
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-700 text-neutral-200 hover:bg-neutral-900 hover:text-white"
              onClick={onAbout}
            >
              Our story
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-neutral-400">
                <feature.icon className="w-5 h-5 text-neutral-300" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
