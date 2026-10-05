import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, BellRing, Mail, Lock } from 'lucide-react';

interface WaitlistConfirmationProps {
  reference: string;
  onContinueShopping: () => void;
}

export function WaitlistConfirmation({ reference, onContinueShopping }: WaitlistConfirmationProps) {
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
              You are on the list
            </h1>

            <p className="text-gray-600 mb-2">
              Your waitlist spot is saved. Keep this reference for your records.
            </p>
            <p className="text-lg font-mono bg-gray-100 inline-block px-4 py-2 rounded-lg mb-8">
              {reference}
            </p>

            {/* What's Next */}
            <div className="text-left bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BellRing className="w-5 h-5 text-neutral-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">First access</p>
                    <p className="text-sm text-gray-600">
                      When the first drop opens, waitlist members hear before
                      anyone else.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-neutral-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">One honest email</p>
                    <p className="text-sm text-gray-600">
                      We will email you when the tees are real, photographed,
                      and ready. No weekly spam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-neutral-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">No payment taken</p>
                    <p className="text-sm text-gray-600">
                      You have not been charged anything. Payment only happens
                      later, through a secure link, if you choose to buy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={onContinueShopping}
              className="bg-neutral-900 hover:bg-neutral-800"
              size="lg"
            >
              Back to home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
