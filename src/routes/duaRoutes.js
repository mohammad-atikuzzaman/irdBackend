const express = require('express');
const router = express.Router();
const db = require('../database');

// Fetch duas by category ID or subcategory ID
router.get('/', (req, res) => {
    const { cat_id, subcat_id } = req.query;

    let query = 'SELECT * FROM dua';
    const params = [];

    if (cat_id) {
        query += ' WHERE cat_id = ?';
        params.push(cat_id);
    }

    if (subcat_id) {
        query += cat_id ? ' AND subcat_id = ?' : ' WHERE subcat_id = ?';
        params.push(subcat_id);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
