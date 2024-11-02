const express = require('express');
const cors = require('cors');
const newsData = require('./data/newsData.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Route to fetch news articles
app.get('/api/news', (req, res) => {
  res.json(newsData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
