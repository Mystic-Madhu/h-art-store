# 🚀 Quick Start Guide - H Art Store

## Step 1: Start Backend Server

```bash
cd backend
npm install          # First time only
npm start           # Starts on http://localhost:3000
```

## Step 2: Open Website

### Option A: Using VS Code Live Server
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. Browser opens automatically

### Option B: Using Python Server
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option C: Direct File
- Simply double-click `index.html`

## Step 3: Test the Website

### Browse Products
- ✅ Home page - See carousel and categories
- ✅ Originals - Browse 24 paintings
- ✅ Prints - View art prints
- ✅ Calendars - See 2026 calendars
- ✅ Wall Paintings - Large canvas art
- ✅ Quotes - Inspirational artwork

### Test Shopping Features
1. Click "Add to Cart" on any product
2. View cart at `/cart.html`
3. Add more items or remove them
4. Click "♡" to add to Wishlist
5. View wishlist at `/wishlist.html`

### Test Checkout & Payment
1. Go to Cart page
2. Click "Proceed to Checkout"
3. Fill in shipping details
4. Click "Pay with Razorpay"
5. Use test card: `4111 1111 1111 1111`
6. Use any future expiry date and any CVV
7. Order confirmation page appears

## Step 4: Upload Custom Images (Admin)

1. Open `admin.html` in your browser
2. Click "Upload Images" tab
3. Select image (drag & drop or click)
4. Fill in:
   - Image Title
   - Category
   - Price
   - Size
   - Description
5. Click "Upload & Add Product"
6. Image appears in Gallery tab with URL for copying

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `index.html` | Home page - START HERE |
| `admin.html` | Image management |
| `cart.html` | Shopping cart |
| `wishlist.html` | Saved items |
| `checkout.html` | Payment page |
| `backend/server.js` | API server |
| `js/cart.js` | Shopping logic |
| `js/wishlist.js` | Wishlist logic |

## 🔧 Troubleshooting

### Images not showing?
```bash
# Make sure backend is running:
cd backend
npm start
```

### "Cannot reach database" error?
- Backend server must be running
- Check if port 3000 is available
- Try: `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows)

### Payment page blank?
- Ensure backend is running
- Check browser console (F12 → Console tab) for errors
- Refresh the page

### Cart not saving?
- Ensure cookies/localStorage are enabled
- Check browser console for errors
- Try clearing browser cache

## 💡 Pro Tips

1. **Test Payment:**
   - Use card: `4111 1111 1111 1111`
   - Any future date for expiry
   - Any 3-digit CVV

2. **Check Orders:**
   - Orders are saved in browser localStorage
   - Open DevTools (F12) → Application → Local Storage
   - Look for "orders" key

3. **Manage Products:**
   - Use Admin panel to add/remove products
   - Products are stored in `backend/data/products.json`
   - Manual edits: Stop server, edit file, restart

4. **View API Responses:**
   - Open browser console (F12)
   - Go to Network tab
   - Click products, cart, checkout
   - See API calls

## 📊 Sample Test Flow

### Complete Purchase Test:
1. Open `index.html`
2. Go to "Originals" → Browse paintings
3. Click on any painting → See details
4. Click "Add to Cart" → Confirm message
5. Go to Cart → See item listed
6. Click "Proceed to Checkout"
7. Fill shipping: 
   - Name: Test User
   - Email: test@example.com
   - Phone: 9876543210
   - Address: 123 Test Street
   - City: Test City
   - State: Test State
   - Postal: 123456
8. Click "Pay with Razorpay"
9. Use test card credentials (above)
10. Click "Confirm" payment
11. See "Order Confirmed" page ✓

## 🎨 Customizing the Store

### Change Store Name:
Edit `index.html` line 71: Replace "H Art Store" with your name

### Change Colors:
Edit `css/style.css`:
- `#c9b5a0` → Primary (tan color)
- `#d4c3b2` → Secondary (light tan)

### Add New Product:
1. Open Admin panel (`admin.html`)
2. Upload image
3. Fill form
4. Click "Upload & Add Product"

## 🔑 Important API Endpoints

```
GET    http://localhost:3000/api/products              # All products
GET    http://localhost:3000/api/products/:id          # Single product
POST   http://localhost:3000/api/products              # Create product
DELETE http://localhost:3000/api/products/:id          # Delete product
POST   http://localhost:3000/api/upload                # Upload image
GET    http://localhost:3000/api/health                # Check server
```

## 📱 Device Testing

- **Desktop:** Works perfectly
- **Tablet:** Responsive grid adapts
- **Mobile:** Touch-optimized buttons

Use DevTools (F12) → Responsive Design Mode to test

## ⚙️ Environment Setup

The `.env` file in `backend/` contains:
```
PORT=3000                    # Server port
NODE_ENV=development         # Environment type
STRIPE_SECRET_KEY=...        # Stripe (future)
RAZORPAY_KEY_ID=...         # Razorpay (future)
```

For production, replace with real API keys!

## 🆘 Quick Debug

**Problems?** Check these:

1. Open browser console (F12)
2. Look for error messages
3. Check if backend is running: `http://localhost:3000/api/health`
4. Verify file permissions for `backend/uploads/`
5. Clear browser cache and reload

## 📞 Common Questions

**Q: Where are uploaded images stored?**  
A: In `backend/uploads/` folder

**Q: How long does data persist?**  
A: Until browser cache is cleared (local storage)

**Q: Can I use real Razorpay account?**  
A: Yes! Replace test key in `checkout.html` with production key

**Q: How do I sell to customers?**  
A: Share your domain/link. They can browse and checkout online.

---

**✅ You're ready to go!** Start with Step 1 above.

Need help? Check `README.md` for detailed documentation.
