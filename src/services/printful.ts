import type { CartItem, CustomerInfo, PrintfulOrderPayload } from '@/types';

/**
 * Printful API Integration Service
 * 
 * This service handles automated order fulfillment through Printful's API.
 * When a customer places an order, it automatically creates an order in Printful
 * which then handles printing, packaging, and shipping.
 * 
 * To enable full automation:
 * 1. Sign up at https://www.printful.com/
 * 2. Get your API key from Printful Dashboard > Stores > API
 * 3. Add products to your Printful store and note their variant IDs
 * 4. Replace 'YOUR_PRINTFUL_API_KEY' with your actual key
 * 5. Update the sync_variant_id mappings below with your actual Printful variant IDs
 */

const PRINTFUL_API_URL = 'https://api.printful.com';
const PRINTFUL_API_KEY = 'YOUR_PRINTFUL_API_KEY'; // Replace with your actual API key

// Map our product IDs to Printful sync variant IDs
// You'll need to set up products in Printful and get their variant IDs
const PRODUCT_VARIANT_MAP: Record<string, number> = {
  'code-coffee-repeat': 12345, // Replace with actual Printful variant ID
  'neural-network': 12346,
  'bug-feature': 12347,
  'rocket-code': 12348,
  'binary-heart': 12349,
  'hello-world': 12350,
  'java-script': 12351,
  'localhost': 12352,
};

/**
 * Create a new order in Printful
 * This is called automatically after successful payment
 */
export async function createPrintfulOrder(
  items: CartItem[],
  customer: CustomerInfo
): Promise<{ success: boolean; orderId?: string; error?: string }> {
  try {
    // Build Printful order payload
    const payload: PrintfulOrderPayload = {
      recipient: {
        name: `${customer.firstName} ${customer.lastName}`,
        address1: customer.address,
        city: customer.city,
        state_code: customer.state,
        country_code: customer.country,
        zip: customer.zipCode,
        email: customer.email,
      },
      items: items.map((item) => ({
        sync_variant_id: PRODUCT_VARIANT_MAP[item.product.id] || 12345,
        quantity: item.quantity,
      })),
    };

    // For demo/development - simulate API call
    if (PRINTFUL_API_KEY === 'YOUR_PRINTFUL_API_KEY') {
      console.log('Printful API Key not configured. Simulating order creation...');
      console.log('Order payload:', payload);
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      return {
        success: true,
        orderId: `PF-${Date.now()}`,
      };
    }

    // Real API call (when API key is configured)
    const response = await fetch(`${PRINTFUL_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PRINTFUL_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.result || 'Failed to create Printful order');
    }

    const data = await response.json();
    
    return {
      success: true,
      orderId: data.result.id.toString(),
    };
  } catch (error) {
    console.error('Printful order creation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get order status from Printful
 * Useful for tracking updates
 */
export async function getOrderStatus(orderId: string): Promise<{
  status: string;
  trackingNumber?: string;
  trackingUrl?: string;
}> {
  try {
    if (PRINTFUL_API_KEY === 'YOUR_PRINTFUL_API_KEY') {
      return { status: 'pending' };
    }

    const response = await fetch(`${PRINTFUL_API_URL}/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${PRINTFUL_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch order status');
    }

    const data = await response.json();
    const order = data.result;

    return {
      status: order.status,
      trackingNumber: order.shipping?.tracking_number,
      trackingUrl: order.shipping?.tracking_url,
    };
  } catch (error) {
    console.error('Failed to get order status:', error);
    return { status: 'unknown' };
  }
}

/**
 * Calculate shipping rates
 * Can be used to show shipping costs at checkout
 */
export async function calculateShipping(
  items: CartItem[],
  customer: CustomerInfo
): Promise<{ standard: number; express: number }> {
  try {
    if (PRINTFUL_API_KEY === 'YOUR_PRINTFUL_API_KEY') {
      // Return default shipping rates for demo
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      return {
        standard: itemCount > 0 ? 5.99 : 0,
        express: itemCount > 0 ? 14.99 : 0,
      };
    }

    const payload = {
      recipient: {
        country_code: customer.country,
        state_code: customer.state,
        city: customer.city,
        zip: customer.zipCode,
      },
      items: items.map((item) => ({
        sync_variant_id: PRODUCT_VARIANT_MAP[item.product.id],
        quantity: item.quantity,
      })),
    };

    const response = await fetch(`${PRINTFUL_API_URL}/shipping/rates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PRINTFUL_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to calculate shipping');
    }

    const data = await response.json();
    const rates = data.result;

    return {
      standard: rates.find((r: any) => r.id === 'STANDARD')?.rate || 5.99,
      express: rates.find((r: any) => r.id === 'EXPRESS')?.rate || 14.99,
    };
  } catch (error) {
    console.error('Shipping calculation failed:', error);
    return { standard: 5.99, express: 14.99 };
  }
}

/**
 * Setup Instructions:
 * 
 * 1. Create Printful Account:
 *    - Go to https://www.printful.com/ and sign up
 *    - Complete store setup
 * 
 * 2. Add Products:
 *    - In Printful Dashboard, go to 'Product Push'
 *    - Select products (t-shirts, hoodies, etc.)
 *    - Upload your designs
 *    - Note the sync_variant_id for each product
 * 
 * 3. Get API Key:
 *    - Go to Stores > [Your Store] > API
 *    - Generate API key
 *    - Copy the key
 * 
 * 4. Configure Integration:
 *    - Replace 'YOUR_PRINTFUL_API_KEY' above with your actual key
 *    - Update PRODUCT_VARIANT_MAP with your actual variant IDs
 * 
 * 5. Webhook Setup (Optional but recommended):
 *    - In Printful, go to API > Webhooks
 *    - Add webhook URL: https://yourdomain.com/api/webhooks/printful
 *    - This enables real-time order status updates
 * 
 * 6. Test Order:
 *    - Place a test order on your site
 *    - Verify it appears in Printful dashboard
 *    - Check that all details are correct
 */
