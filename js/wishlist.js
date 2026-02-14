// Wishlist Management System
class Wishlist {
  constructor() {
    this.items = this.loadWishlist();
  }

  loadWishlist() {
    const wishlist = localStorage.getItem('artstore_wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  }

  saveWishlist() {
    localStorage.setItem('artstore_wishlist', JSON.stringify(this.items));
    window.dispatchEvent(new Event('wishlistUpdated'));
  }

  addItem(product) {
    if (!this.items.find(item => item.id === product.id)) {
      this.items.push(product);
      this.saveWishlist();
      console.log(`${product.name} added to wishlist`);
      return true;
    }
    return false;
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveWishlist();
  }

  isInWishlist(productId) {
    return this.items.some(item => item.id === productId);
  }

  getWishlistCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  clearWishlist() {
    this.items = [];
    this.saveWishlist();
  }
}

// Export for use
const wishlist = new Wishlist();
