// Payment Integration (Stripe & Razorpay)
class PaymentService {
  constructor(config = {}) {
    this.stripePublicKey = config.stripePublicKey || '';
    this.razorpayKeyId = config.razorpayKeyId || '';
    this.apiBaseUrl = config.apiBaseUrl || 'http://localhost:3000/api';
  }

  // Stripe Payment Processing
  async processStripePayment(amount, customerEmail, cartItems) {
    if (!this.stripePublicKey) {
      console.error('Stripe public key not configured');
      return false;
    }

    try {
      // Create a payment intent on your backend
      const response = await fetch(`${this.apiBaseUrl}/payments/create-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          email: customerEmail,
          items: cartItems
        })
      });

      const data = await response.json();
      
      if (data.error) {
        console.error('Payment error:', data.error);
        return false;
      }

      // Initialize Stripe (you'll need to load Stripe.js)
      if (typeof Stripe !== 'undefined') {
        const stripe = Stripe(this.stripePublicKey);
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId
        });
        
        if (result.error) {
          console.error('Stripe error:', result.error);
          return false;
        }
        return true;
      }
    } catch (error) {
      console.error('Error processing Stripe payment:', error);
      return false;
    }
  }

  // Razorpay Payment Processing
  async processRazorpayPayment(amount, customerDetails, cartItems) {
    if (!this.razorpayKeyId) {
      console.error('Razorpay key not configured');
      return false;
    }

    try {
      const scriptTag = document.createElement('script');
      scriptTag.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.head.appendChild(scriptTag);

      scriptTag.onload = () => {
        const options = {
          key: this.razorpayKeyId,
          amount: Math.round(amount * 100), // Convert to paise
          currency: 'INR',
          name: 'H Art Store',
          description: `Purchasing ${cartItems.length} item(s)`,
          prefill: {
            name: customerDetails.name || '',
            email: customerDetails.email || '',
            contact: customerDetails.phone || ''
          },
          handler: (response) => {
            this.handleRazorpaySuccess(response, cartItems);
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
      };
    } catch (error) {
      console.error('Error processing Razorpay payment:', error);
      return false;
    }
  }

  handleRazorpaySuccess(response, cartItems) {
    console.log('Payment successful:', response);
    const order = {
      paymentId: response.razorpay_payment_id,
      orderId: response.razorpay_order_id,
      signature: response.razorpay_signature,
      items: cartItems,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(order));
    window.location.href = 'order-success.html';
  }

  // Verify payment on backend
  async verifyPayment(paymentId) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/payments/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentId })
      });

      return await response.json();
    } catch (error) {
      console.error('Error verifying payment:', error);
      return null;
    }
  }
}

// Export for use
const paymentService = new PaymentService();
