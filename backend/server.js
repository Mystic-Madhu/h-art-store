const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB max
});

// Routes

// Upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    success: true,
    message: 'Image uploaded successfully',
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

// Get all products
app.get('/api/products', (req, res) => {
  try {
    const productsPath = path.join(__dirname, 'data/products.json');
    if (fs.existsSync(productsPath)) {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      res.json(products);
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  try {
    const productsPath = path.join(__dirname, 'data/products.json');
    if (fs.existsSync(productsPath)) {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      const product = products.find(p => p.id === req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } else {
      res.status(404).json({ error: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new product
app.post('/api/products', (req, res) => {
  try {
    const { id, name, category, price, image, description, size, details } = req.body;
    
    if (!id || !name || !category || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const productsPath = path.join(__dirname, 'data/products.json');
    let products = [];
    
    if (fs.existsSync(productsPath)) {
      products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    } else {
      fs.mkdirSync(path.dirname(productsPath), { recursive: true });
    }
    
    products.push({ id, name, category, price, image, description, size, details, createdAt: new Date() });
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    
    res.json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
  try {
    const productsPath = path.join(__dirname, 'data/products.json');
    if (fs.existsSync(productsPath)) {
      let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      products = products.filter(p => p.id !== req.params.id);
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
      res.json({ success: true, message: 'Product deleted' });
    } else {
      res.status(404).json({ error: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get products by category
app.get('/api/products/category/:category', (req, res) => {
  try {
    const productsPath = path.join(__dirname, 'data/products.json');
    if (fs.existsSync(productsPath)) {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      const filtered = products.filter(p => p.category.toLowerCase() === req.params.category.toLowerCase());
      res.json(filtered);
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
