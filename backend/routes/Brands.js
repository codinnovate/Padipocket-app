const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// Get all brands
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new brand
router.post('/', async (req, res) => {
  const brand = new Brand({
    name: req.body.name,
    logo: req.body.logo,
    user: req.body.userId // Assuming you're passing the user ID in the request
  });

  try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific brand
router.get('/:id', getBrand, (req, res) => {
  res.json(res.brand);
});

// Update a brand
router.patch('/:id', getBrand, async (req, res) => {
  if (req.body.name != null) {
    res.brand.name = req.body.name;
  }
  if (req.body.logo != null) {
    res.brand.logo = req.body.logo;
  }
  try {
    const updatedBrand = await res.brand.save();
    res.json(updatedBrand);
  } catch (err) { 
    res.status(400).json(err.message)
   }
})