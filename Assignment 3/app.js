const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

// Load environment variables with absolute path
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Check if environment variables are loaded
console.log('MongoDB URI:', process.env.MONGODB_URI);
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI environment variable is not set');
  console.log('Falling back to hardcoded connection string');
  // Fallback to hardcoded connection string
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/assignment3';
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('User Management API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

module.exports = app;
