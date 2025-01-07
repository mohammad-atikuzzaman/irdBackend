const express = require("express");
const router = express.Router();
const db = require("../database");

// Get all categories or search categories
router.get("/", (req, res) => {
  const { q } = req.query;

  let query = "SELECT * FROM category";
  const params = [];

  if (q) {
    query += " WHERE cat_name_bn LIKE ? OR cat_name_en LIKE ?";
    params.push(`%${q}%`, `%${q}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No categories found." });
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
