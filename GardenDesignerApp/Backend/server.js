// server.js
const express = require('express');
const mongoose = require('mongoose');
const selectionRoutes = require('./routes/selectionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/garden', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', selectionRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
