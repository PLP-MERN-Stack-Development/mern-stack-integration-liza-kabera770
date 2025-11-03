const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

// GET all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// CREATE new category
router.post("/", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

module.exports = router;