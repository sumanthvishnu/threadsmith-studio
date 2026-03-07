import type { CartItem, CustomerInfo } from '@/types';

/**
 * Email Service for Automated Order Notifications
 * 
 * This service handles sending automated emails for:
 * - Order confirmation to customer
 * - Order notification to store owner
 * - Shipping confirmation with tracking
 * 
 * To enable email automation:
 * 1. Sign up for an email service (SendGrid, Mailgun, AWS SES, or Resend)
 * 2. Get your API key
 * 3. Replace 'YOUR_EMAIL_API_KEY' with your actual key
 * 4. Configure sender email address
 * 5. Set up email templates
 */

// Email service configuration
const EMAIL_API_KEY = 'YOUR_EMAIL_API_KEY'; // Replace with your actual API key
const EMAIL_SERVICE = 'sendgrid'; // Options: 'sendgrid', 'mailgun', 'resend', 'aws-ses'
const FROM_EMAIL = 'orders@threadsmith.studio';
const FROM_NAME = 'Threadsmith Studio';
const STORE_OWNER_EMAIL = 'owner@threadsmith.studio'; // Replace with your email

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send order confirmation email to customer
 */
export async function sendOrderConfirmation(
  orderId: string,
  customer: CustomerInfo,
  items: CartItem[],
  total: number
): Promise<{ success: boolean; error?: string }> {
  const itemList = items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <img src="${item.product.image}" alt="${item.product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${item.product.name}</strong><br>
          <span style="color: #666; font-size: 12px;">${item.color} / ${item.size}</span>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${(item.product.price * item.quantity).toFixed(2)}</td>
      </tr>
    `
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; padding: 20px 0; border-bottom: 3px solid #7c3aed;">
        <h1 style="color: #7c3aed; margin: 0;">Threadsmith Studio</h1>
      </div>
      
      <div style="padding: 30px 0;">
        <h2 style="color: #333; margin-bottom: 10px;">Thank you for your order!</h2>
        <p style="color: #666; margin-bottom: 20px;">We're excited to get your new gear printed and shipped to you.</p>
        
        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Order Number:</strong> #${orderId}</p>
          <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <h3 style="color: #333; margin-bottom: 15px;">Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #f3f4f6;">
              <th style="padding: 10px; text-align: left;">Product</th>
              <th style="padding: 10px; text-align: left;">Details</th>
              <th style="padding: 10px; text-align: center;">Qty</th>
              <th style="padding: 10px; text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemList}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Total:</strong></td>
              <td style="padding: 10px; text-align: right;"><strong style="color: #7c3aed; font-size: 18px;">$${total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
        
        <h3 style="color: #333; margin-bottom: 15px;">Shipping Address</h3>
        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 5px 0;">${customer.firstName} ${customer.lastName}</p>
          <p style="margin: 5px 0;">${customer.address}</p>
          <p style="margin: 5px 0;">${customer.city}, ${customer.state} ${customer.zipCode}</p>
          <p style="margin: 5px 0;">${customer.country}</p>
        </div>
        
        <div style="background: #ede9fe; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h4 style="color: #7c3aed; margin: 0 0 10px 0;">What's Next?</h4>
          <ul style="margin: 0; padding-left: 20px; color: #666;">
            <li>Your order will be sent to our print partner within 24 hours</li>
            <li>Printing and quality check takes 2-3 business days</li>
            <li>You'll receive a tracking number once shipped</li>
            <li>Estimated delivery: 5-10 business days</li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          If you have any questions, reply to this email or contact us at support@aidesigns.studio
        </p>
      </div>
      
      <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee; color: #999; font-size: 12px;">
        <p>© 2024 Threadsmith Studio. All rights reserved.</p>
        <p>This is an automated email. Please do not reply directly to this message.</p>
      </div>
    </body>
    </html>
  `;

  const text = `
Thank you for your order from Threadsmith Studio!

Order Number: #${orderId}
Order Date: ${new Date().toLocaleDateString()}

Order Total: $${total.toFixed(2)}

Your order is being processed and will be sent to our print partner within 24 hours.
You'll receive a tracking number once your order ships.

If you have any questions, contact us at support@aidesigns.studio
  `;

  return sendEmail({
    to: customer.email,
    subject: `Order Confirmation #${orderId} - Threadsmith Studio`,
    html,
    text,
  });
}

/**
 * Send order notification to store owner
 */
export async function sendOwnerNotification(
  orderId: string,
  customer: CustomerInfo,
  items: CartItem[],
  total: number
): Promise<{ success: boolean; error?: string }> {
  const itemList = items
    .map(
      (item) => `
      - ${item.product.name} (${item.color} / ${item.size}) x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}
    `
    )
    .join('\n');

  const html = `
    <h2>New Order Received!</h2>
    <p><strong>Order ID:</strong> #${orderId}</p>
    <p><strong>Customer:</strong> ${customer.firstName} ${customer.lastName} (${customer.email})</p>
    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    
    <h3>Items:</h3>
    <pre>${itemList}</pre>
    
    <h3>Shipping Address:</h3>
    <p>
      ${customer.firstName} ${customer.lastName}<br>
      ${customer.address}<br>
      ${customer.city}, ${customer.state} ${customer.zipCode}<br>
      ${customer.country}
    </p>
    
    <p><em>This order has been automatically sent to Printful for fulfillment.</em></p>
  `;

  return sendEmail({
    to: STORE_OWNER_EMAIL,
    subject: `New Order #${orderId} - $${total.toFixed(2)}`,
    html,
  });
}

/**
 * Send shipping confirmation with tracking
 */
export async function sendShippingConfirmation(
  orderId: string,
  customerEmail: string,
  trackingNumber: string,
  trackingUrl: string
): Promise<{ success: boolean; error?: string }> {
  const html = `
    <h2>Your Order Has Shipped!</h2>
    <p>Great news! Your order #${orderId} is on its way.</p>
    
    <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
    <p><a href="${trackingUrl}" style="display: inline-block; background: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Track Your Package</a></p>
    
    <p>Estimated delivery: 5-10 business days</p>
    
    <p>Thank you for shopping with Threadsmith Studio!</p>
  `;

  return sendEmail({
    to: customerEmail,
    subject: `Your Order #${orderId} Has Shipped!`,
    html,
  });
}

/**
 * Generic email sender
 */
async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    // For demo/development - log email instead of sending
    if (EMAIL_API_KEY === 'YOUR_EMAIL_API_KEY') {
      console.log('Email API Key not configured. Logging email instead...');
      console.log('To:', payload.to);
      console.log('Subject:', payload.subject);
      console.log('---');
      return { success: true };
    }

    // Real API implementation would go here based on chosen provider
    // Example for SendGrid:
    if (EMAIL_SERVICE === 'sendgrid') {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${EMAIL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: payload.to }] }],
          from: { email: FROM_EMAIL, name: FROM_NAME },
          subject: payload.subject,
          content: [
            { type: 'text/plain', value: payload.text || '' },
            { type: 'text/html', value: payload.html },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Setup Instructions:
 * 
 * 1. Choose Email Provider:
 *    - SendGrid: https://sendgrid.com/ (Free tier: 100 emails/day)
 *    - Mailgun: https://www.mailgun.com/ (Free tier: 5,000 emails/month)
 *    - Resend: https://resend.com/ (Free tier: 3,000 emails/month)
 *    - AWS SES: https://aws.amazon.com/ses/ (Very cheap, requires AWS account)
 * 
 * 2. Sign Up & Verify:
 *    - Create account with your chosen provider
 *    - Verify your domain (add DNS records)
 *    - Verify sender email address
 * 
 * 3. Get API Key:
 *    - Generate API key from dashboard
 *    - Copy the key
 * 
 * 4. Configure Integration:
 *    - Replace 'YOUR_EMAIL_API_KEY' with your actual key
 *    - Update EMAIL_SERVICE to match your provider
 *    - Update FROM_EMAIL to your verified sender
 *    - Update STORE_OWNER_EMAIL to your email
 * 
 * 5. Test Emails:
 *    - Place a test order
 *    - Check that confirmation email is sent
 *    - Verify email formatting and content
 * 
 * 6. Set Up Webhooks (Optional):
 *    - Configure Printful webhooks to trigger shipping emails
 *    - Or poll order status periodically
 */
