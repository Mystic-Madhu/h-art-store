# H Art Store - Complete E-Commerce Platform

A beautiful, fully-functional art store website built with HTML, CSS, JavaScript, and Node.js backend.

## ✨ Features Implemented

### 1. **Complete Product Catalog**
- ✅ Originals (24 paintings from Hindu Calendar series and A4 collection)
- ✅ Prints (8 high-quality art prints)
- ✅ Calendars (2026 calendars with beautiful artwork)
- ✅ Wall Paintings (Large canvas art pieces)
- ✅ Quotes Paintings (Inspirational quote artwork)
- ✅ Detailed product pages with zoom functionality

### 2. **Shopping Features**
- ✅ **Shopping Cart** - Add/remove items, adjust quantities, persistent storage
- ✅ **Wishlist** - Save favorite items for later
- ✅ **Product Details** - High-resolution images with zoom, detailed descriptions

### 3. **Payment Integration**
- ✅ **Razorpay Payment Gateway** - Credit/Debit cards, UPI, Net Banking
- ✅ **Order Processing** - Complete order flow with confirmation
- ✅ **Order History** - Track all purchases

### 4. **Image Management**
- ✅ **Admin Image Upload Panel** - Upload and manage product images
- ✅ **Image Gallery** - Central hub for all artwork
- ✅ **Product Management** - Add, edit, delete products dynamically

### 5. **Backend API**
- ✅ Express.js server with RESTful API
- ✅ File upload handling with Multer
- ✅ Product database management
- ✅ Image serving and optimization

### 6. **Responsive Design**
- ✅ Mobile-friendly layout
- ✅ Touch-optimized navigation
- ✅ Adaptive grid layouts

## 📦 Project Structure

```
h-art-store/
├── index.html                 # Home page with hero carousel
├── originals.html             # Original paintings collection
├── prints.html                # Art prints collection
├── calendars.html             # Calendar collection
├── wall-paintings.html        # Large canvas paintings
├── quotes-paintings.html      # Quote artwork
├── painting.html              # Product detail page
├── cart.html                  # Shopping cart
├── wishlist.html              # Wishlist page
├── checkout.html              # Payment checkout
├── order-success.html         # Order confirmation
├── admin.html                 # Admin image upload panel
│
├── css/
│   └── style.css              # Main stylesheet
│
├── js/
│   ├── cart.js                # Shopping cart logic
│   ├── wishlist.js            # Wishlist functionality
│   ├── products.js            # Product API service
│   └── payment.js             # Payment integration
│
└── backend/
    ├── server.js              # Node.js server
    ├── package.json           # Dependencies
    ├── .env                   # Environment variables
    ├── uploads/               # Uploaded images
    └── data/
        └── products.json      # Product database
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

1. **Navigate to backend directory:**
```bash
cd backend
npm install
```

2. **Create .env file** (already provided):
```
PORT=3000
NODE_ENV=development
```

3. **Start the backend server:**
```bash
npm start
```

The server will run on `http://localhost:3000`

### Running the Frontend

1. **Open the main directory** in your browser
2. **Open `index.html`** - You can use:
   - Live Server (VS Code extension)
   - Or simply double-click the HTML file
   - Or use Python's built-in server:
   ```bash
   python -m http.server 8000
   ```

## 📝 Usage

### Shopping Flow
1. Browse products in different categories
2. Click "Add to Cart" to purchase items
3. Click "♡" to add items to Wishlist
4. Go to Cart page to review and adjust quantities
5. Click "Proceed to Checkout"
6. Enter delivery information
7. Complete payment with Razorpay
8. View order confirmation

### Managing Products (Admin Panel)

1. **Access Admin Panel:** Open `admin.html`
2. **Upload Images:**
   - Click "Upload & Add Product" tab
   - Drag and drop or select image
   - Fill in product details (name, price, category, size)
   - Click "Upload & Add Product"
3. **View Gallery:**
   - Click "Image Gallery" tab
   - Click "Copy URL" to get image URLs
4. **Manage Products:**
   - Click "Products" tab
   - View all products
   - Click "Delete" to remove products

### Adding Custom Images

The system uses Cloudinary CDN for images. To use your own images:

1. **Upload via Admin Panel:** Images are stored in `backend/uploads/`
2. **Update Product URLs:**
   - Use the image URLs from Admin Gallery
   - Or upload to your own CDN (Cloudinary, AWS S3, etc.)

## 💳 Payment Gateway Setup

### Razorpay Integration

1. **Create Razorpay Account:** https://razorpay.com
2. **Get API Keys:**
   - Login to Razorpay Dashboard
   - Go to Settings → API Keys
   - Copy your "Key ID" and "Key Secret"
3. **Update Payment Details:**
   - In `checkout.html`, replace the test key with your production key:
   ```javascript
   key: "your_razorpay_key_id_here"
   ```

### Test Keys (for development):
- Key ID: `rzp_test_1DP5MMOlF23sMR`
- Test Cards: Use any card number starting with 4111

## 📊 Database

### Products JSON Structure
```json
{
  "id": "unique-id",
  "name": "Product Name",
  "category": "Originals",
  "price": 10000,
  "image": "https://image-url.jpg",
  "description": "Product description",
  "size": "12\" × 16\""
}
```

## 🎨 Customization

### Add New Categories
1. Create new HTML page (e.g., `new-category.html`)
2. Copy structure from `originals.html`
3. Update product data and category name
4. Add link in navigation

### Change Colors
Edit `css/style.css`:
- Primary color: `#c9b5a0` (warm beige)
- Secondary color: `#d4c3b2` (light tan)
- Accent color: `#a89584` (muted brown)

### Adjust Pricing
Edit `backend/data/products.json` or use Admin Panel

## 🔒 Security Notes

- Payment keys should be stored securely in backend `.env` file
- API endpoints validate file types for uploads (images only)
- Maximum file size: 10MB
- CORS enabled for local development

## 🐛 Troubleshooting

### Images Not Loading
- Check if backend server is running (`npm start` in `/backend`)
- Verify image URLs in products.json
- Check browser console for error messages

### Payment Not Working
- Ensure Razorpay API keys are correctly configured
- Check if `checkout.razorpay.com` is accessible
- Verify payment amount is in correct format (in paise)

### File Upload Issues
- Ensure `backend/uploads/` directory has write permissions
- Check file size (max 10MB)
- Verify file format (JPEG, PNG, GIF, WebP only)

## 📱 Features Overview

| Feature | Status | Location |
|---------|--------|----------|
| Product Browsing | ✅ | Category pages |
| Shopping Cart | ✅ | cart.html |
| Wishlist | ✅ | wishlist.html |
| Checkout | ✅ | checkout.html |
| Payment (Razorpay) | ✅ | checkout.html |
| Admin Panel | ✅ | admin.html |
| Image Upload | ✅ | admin.html |
| Order History | ✅ | order-success.html |
| Product Details | ✅ | painting.html |
| Responsive Design | ✅ | All pages |

## 📞 Support & Maintenance

- **Local Storage:** User data (cart, wishlist, orders) stored in browser
- **Backend Data:** Products stored in `backend/data/products.json`
- **Images:** Stored in `backend/uploads/` and referenced via CDN URLs

## 🎯 Future Enhancements

- User authentication and accounts
- Email notifications for orders
- Advanced search filters
- Customer reviews and ratings
- Inventory management
- Multiple payment gateways (Stripe, PayPal)
- Mobile app

## 📄 License

Free to use and modify for personal or commercial projects.

## 👨‍💻 Created by

H Art Store Development Team - 2025