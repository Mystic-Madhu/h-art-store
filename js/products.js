// Product Management & API Service
class ProductService {
  constructor(apiBaseUrl = 'http://localhost:3000/api') {
    this.apiBaseUrl = apiBaseUrl;
  }

  async getAllProducts() {
    try {
      const response = await fetch(`${this.apiBaseUrl}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/products/category/${category}`);
      if (!response.ok) throw new Error(`Failed to fetch ${category} products`);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/products/${id}`);
      if (!response.ok) throw new Error('Product not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  async addProduct(productData) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });
      if (!response.ok) throw new Error('Failed to add product');
      return await response.json();
    } catch (error) {
      console.error('Error adding product:', error);
      return null;
    }
  }

  async deleteProduct(productId) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/products/${productId}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete product');
      return await response.json();
    } catch (error) {
      console.error('Error deleting product:', error);
      return null;
    }
  }

  async uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await fetch(`${this.apiBaseUrl}/upload`, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Failed to upload image');
      return await response.json();
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }

  async checkServerHealth() {
    try {
      const response = await fetch(`${this.apiBaseUrl}/health`);
      return response.ok;
    } catch (error) {
      console.error('Server health check failed:', error);
      return false;
    }
  }
}

// Export for use
const productService = new ProductService();
