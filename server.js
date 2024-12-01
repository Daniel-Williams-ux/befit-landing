const connectDB = require('./config/db');
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Use authentication routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process on DB connection failure
  });