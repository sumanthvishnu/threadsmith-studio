import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, Mail, Truck } from 'lucide-react';

interface OrderSuccessProps {
  orderId: string;
  onContinueShopping: () => void;
}

export function OrderSuccess({ orderId, onContinueShopping }: OrderSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="text-center">
          <CardContent className="pt-12 pb-12 px-8">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>

            {/* Order ID */}
            <p className="text-gray-600 mb-2">
              Thank you for your purchase. Your order has been received.
            </p>
            <p className="text-lg font-mono bg-gray-100 inline-block px-4 py-2 rounded-lg mb-8">
              Order #{orderId}
            </p>

            {/* What's Next */}
            <div className="text-left bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order Confirmation</p>
                    <p className="text-sm text-gray-600">
                      You'll receive an email confirmation with your order details shortly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order Processing</p>
                    <p className="text-sm text-gray-600">
                      Your items will be printed and quality-checked within 2-3 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shipping</p>
                    <p className="text-sm text-gray-600">
                      You'll receive a tracking number once your order ships. 
                      Delivery typically takes 5-10 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Note */}
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-violet-800">
                <strong>Fully Automated:</strong> Your order has been automatically sent to our 
                print partner. They will handle printing, packaging, and shipping directly to you. 
                No manual intervention required!
              </p>
            </div>

            {/* CTA */}
            <Button
              onClick={onContinueShopping}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
              size="lg"
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
