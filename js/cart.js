// Cart Management System
class Cart {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    const cart = localStorage.getItem('artstore_cart');
    return cart ? JSON.parse(cart) : [];
  }

  saveCart() {
    localStorage.setItem('artstore_cart', JSON.stringify(this.items));
    window.dispatchEvent(new Event('cartUpdated'));
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity: quantity
      });
    }
    
    this.saveCart();
    console.log(`${product.name} added to cart`);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getItems() {
    return this.items;
  }
}

// Export for use
const cart = new Cart();
