import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, BellRing, Loader2, ShieldCheck } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import type { WaitlistEntry } from '@/types';
import { formatINR } from '@/data/products';

interface CheckoutProps {
  onBack: () => void;
  onOrderComplete: (reference: string) => void;
}

/**
 * Pre-launch waitlist form. There is deliberately no payment step here:
 * Threadsmith is not taking money until the first drop is real. Submitting
 * saves interest locally and hands the user a reference code.
 */
export function Checkout({ onBack, onOrderComplete }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [entry, setEntry] = useState<WaitlistEntry>({
    name: '',
    email: '',
    phone: '',
    city: '',
    pinCode: '',
  });

  const handleInputChange = (field: keyof WaitlistEntry, value: string) => {
    setEntry((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Local reference only. No payment, fulfillment, or email service runs.
    const reference = `TS-WL-${Date.now().toString(36).toUpperCase()}`;

    try {
      const existing = JSON.parse(localStorage.getItem('threadsmith-waitlist') || '[]');
      existing.push({ reference, entry, items, createdAt: new Date().toISOString() });
      localStorage.setItem('threadsmith-waitlist', JSON.stringify(existing));
    } catch {
      // localStorage unavailable (private mode etc.); the reference still shows.
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    clearCart();
    setIsSubmitting(false);
    onOrderComplete(reference);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to cart
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-sm flex items-center justify-center">
                      1
                    </span>
                    Join the waitlist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Threadsmith is pre-launch. Leave your details and we will
                    email you when the first drop opens.
                  </p>

                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={entry.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.in"
                      value={entry.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (India)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      pattern="(\+91[\s-]?)?[6-9][0-9]{9}"
                      title="10-digit Indian mobile number, optionally starting with +91"
                      value={entry.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Chennai"
                        value={entry.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="pinCode">PIN code</Label>
                      <Input
                        id="pinCode"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        placeholder="600001"
                        value={entry.pinCode}
                        onChange={(e) => handleInputChange('pinCode', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-sm flex items-center justify-center">
                      2
                    </span>
                    No payment today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <ShieldCheck className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      We are not collecting payments, cards, or UPI details at
                      this stage. When the drop opens you will get a secure
                      payment link by email, and only then.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Saving your spot...
                  </>
                ) : (
                  <>
                    <BellRing className="w-5 h-5 mr-2" />
                    Notify me at launch
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column - Selection Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Your selection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-950 flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-500">
                          {item.color} / {item.size}
                        </p>
                        <p className="text-xs text-gray-400">{item.product.decoration}</p>
                      </div>
                      <p className="font-medium text-sm">
                        {formatINR(item.product.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated total</span>
                    <span>{formatINR(totalPrice)}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Final prices and shipping will be confirmed before the drop
                    opens. Prices shown are targets, inclusive-taxes details to
                    follow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
