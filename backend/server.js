const express = require('express');
const app = express();

const PORT = 5000;

// Simple API route
app.get('/api', (req, res) => {
  res.json({
    message: "Thank you Madan, backend is working :)"
  });
});

// Run server on all interfaces (IMPORTANT for ECS)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});