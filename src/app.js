const express = require('express');
const cors = require('cors')
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const duaRoutes = require('./routes/duaRoutes');

const app = express();
const PORT = 4000;

app.use(cors());

// Routes
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/duas', duaRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
