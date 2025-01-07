const express = require('express');
const router = express.Router();
const db = require('../database');

// Fetch subcategories by category ID
router.get('/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    const query = 'SELECT * FROM sub_category WHERE cat_id = ?';
    db.all(query, [cat_id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
