import type { CartItem, CustomerInfo } from '@/types';

/**
 * Stripe Payment Integration Service
 * 
 * This service handles payment processing through Stripe.
 * When a customer completes checkout, it creates a payment intent
 * and processes the payment securely.
 * 
 * To enable real payments:
 * 1. Sign up at https://stripe.com/
 * 2. Get your publishable and secret keys from Dashboard
 * 3. Replace 'YOUR_STRIPE_SECRET_KEY' with your actual secret key
 * 4. Set up Stripe Elements on the frontend for secure card input
 * 5. Configure webhook endpoint for payment confirmations
 */

const STRIPE_SECRET_KEY = 'YOUR_STRIPE_SECRET_KEY'; // Replace with your actual secret key
const STRIPE_API_URL = 'https://api.stripe.com/v1';

interface PaymentIntent {
  id: string;
  client_secret: string;
  amount: number;
  currency: string;
  status: string;
}

/**
 * Create a payment intent
 * This is called when customer proceeds to checkout
 */
export async function createPaymentIntent(
  items: CartItem[],
  customer: CustomerInfo
): Promise<{ success: boolean; clientSecret?: string; paymentIntentId?: string; error?: string }> {
  try {
    const amount = Math.round(
      items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 100
    ); // Convert to cents

    // For demo/development - simulate payment intent creation
    if (STRIPE_SECRET_KEY === 'YOUR_STRIPE_SECRET_KEY') {
      console.log('Stripe API Key not configured. Simulating payment intent...');
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const mockClientSecret = `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 16)}`;
      
      return {
        success: true,
        clientSecret: mockClientSecret,
        paymentIntentId: `pi_${Date.now()}`,
      };
    }

    // Real API call (when API key is configured)
    const params = new URLSearchParams({
      amount: amount.toString(),
      currency: 'usd',
      'automatic_payment_methods[enabled]': 'true',
      'metadata[customer_email]': customer.email,
      'metadata[customer_name]': `${customer.firstName} ${customer.lastName}`,
    });

    const response = await fetch(`${STRIPE_API_URL}/payment_intents`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to create payment intent');
    }

    const data: PaymentIntent = await response.json();

    return {
      success: true,
      clientSecret: data.client_secret,
      paymentIntentId: data.id,
    };
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Confirm payment status
 * Called after payment is completed on frontend
 */
export async function confirmPayment(paymentIntentId: string): Promise<{
  success: boolean;
  status?: string;
  error?: string;
}> {
  try {
    if (STRIPE_SECRET_KEY === 'YOUR_STRIPE_SECRET_KEY') {
      return { success: true, status: 'succeeded' };
    }

    const response = await fetch(`${STRIPE_API_URL}/payment_intents/${paymentIntentId}`, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to confirm payment');
    }

    const data = await response.json();

    return {
      success: data.status === 'succeeded',
      status: data.status,
    };
  } catch (error) {
    console.error('Payment confirmation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create a customer in Stripe
 * Useful for saving payment methods and order history
 */
export async function createStripeCustomer(
  customer: CustomerInfo
): Promise<{ success: boolean; customerId?: string; error?: string }> {
  try {
    if (STRIPE_SECRET_KEY === 'YOUR_STRIPE_SECRET_KEY') {
      return { success: true, customerId: `cus_${Date.now()}` };
    }

    const params = new URLSearchParams({
      email: customer.email,
      name: `${customer.firstName} ${customer.lastName}`,
      'address[line1]': customer.address,
      'address[city]': customer.city,
      'address[state]': customer.state,
      'address[postal_code]': customer.zipCode,
      'address[country]': customer.country,
    });

    const response = await fetch(`${STRIPE_API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to create customer');
    }

    const data = await response.json();

    return {
      success: true,
      customerId: data.id,
    };
  } catch (error) {
    console.error('Customer creation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Setup Instructions:
 * 
 * 1. Create Stripe Account:
 *    - Go to https://stripe.com/ and sign up
 *    - Complete account verification
 * 
 * 2. Get API Keys:
 *    - Go to Dashboard > Developers > API keys
 *    - Copy Publishable key (for frontend)
 *    - Copy Secret key (for backend)
 * 
 * 3. Configure Integration:
 *    - Replace 'YOUR_STRIPE_SECRET_KEY' above with your actual secret key
 *    - Install Stripe.js on frontend: npm install @stripe/stripe-js @stripe/react-stripe-js
 * 
 * 4. Add Payment Form:
 *    - Use Stripe Elements for secure card input
 *    - Example implementation in Checkout component
 * 
 * 5. Webhook Setup (Required for production):
 *    - Go to Dashboard > Developers > Webhooks
 *    - Add endpoint: https://yourdomain.com/api/webhooks/stripe
 *    - Select events: payment_intent.succeeded, payment_intent.payment_failed
 *    - This ensures orders are created even if customer closes browser
 * 
 * 6. Test Payments:
 *    - Use Stripe test card numbers:
 *      - Success: 4242 4242 4242 4242
 *      - Decline: 4000 0000 0000 0002
 *    - Any future date, any 3-digit CVC, any ZIP
 * 
 * 7. Go Live:
 *    - Switch to live API keys
 *    - Enable live mode in Stripe Dashboard
 *    - Update webhook endpoint to production URL
 */
