const express = require('express');
const Product = require('./models/Product'); // Assuming this is the product model
const router = express.Router();

// Create a new product (only stores can do this)
router.post('/products', async (req, res) => {
  try {
    const { name, description, price, category, ageRange, imageUrl } = req.body;
    
    // Create the product for the "TradeStack" store by default
    const product = new Product({
      name,
      description,
      price,
      category,
      ageRange,
      imageUrl,
      store: 'TradeStack',
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully!', product });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

router.get('/products/recommend', async (req, res) => {
    try {
      const { query } = req.query;
  
      // Basic text matching on product name and category (expand this with NLP/AI later)
      const products = await Product.find({
        $or: [
          { name: new RegExp(query, 'i') },
          { category: new RegExp(query, 'i') },
          { ageRange: new RegExp(query, 'i') },
        ],
      });
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch recommendations' });
    }
  });
  
module.exports = router;
