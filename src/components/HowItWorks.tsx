import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ShoppingCart, Printer, Truck, CreditCard, Zap } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Sparkles,
      title: 'AI Creates Designs',
      description: 'Our AI generates unique, trendy designs specifically crafted for tech enthusiasts and developers.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: ShoppingCart,
      title: 'You Place an Order',
      description: 'Browse our collection, select your size and color, and add items to your cart.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CreditCard,
      title: 'Payment Processed',
      description: 'Secure payment processing through Stripe. Your transaction is fully encrypted.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Printer,
      title: 'Automatic Fulfillment',
      description: 'Order is instantly sent to our print partner who handles printing and quality control.',
      color: 'from-rose-500 to-orange-500',
    },
    {
      icon: Truck,
      title: 'Direct Shipping',
      description: 'Your order is shipped directly from the printer to your doorstep worldwide.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Zap,
      title: 'You Earn Passively',
      description: 'The entire process is automated. You collect profits without any manual work.',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  const benefits = [
    {
      title: 'Zero Inventory',
      description: 'Products are printed only when ordered. No upfront costs, no storage needed.',
    },
    {
      title: 'Global Shipping',
      description: 'Our print partners have facilities worldwide for fast, affordable delivery.',
    },
    {
      title: 'Premium Quality',
      description: 'High-quality garments and professional DTG printing for vibrant, lasting designs.',
    },
    {
      title: '24/7 Automation',
      description: 'Orders process automatically around the clock, even while you sleep.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our designs are created using AI technology, then curated and refined by our team. 
            This means you get unique, on-trend designs you won't find anywhere else.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Automation Flow
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why This Business Model?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technology Stack
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React', desc: 'Frontend' },
                { name: 'Stripe', desc: 'Payments' },
                { name: 'Printful', desc: 'Fulfillment' },
                { name: 'AI', desc: 'Designs' },
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">{tech.name}</p>
                  <p className="text-sm text-gray-500">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Passive Income Journey?
          </h2>
          <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
            This entire store is already set up and ready to accept orders. 
            Every sale is automatically fulfilled. Your only job is to drive traffic.
          </p>
        </div>
      </section>
    </div>
  );
}
