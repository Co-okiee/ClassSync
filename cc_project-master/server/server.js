const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(cors());  // For handling cross-origin requests
app.use(express.json());  // For parsing JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/uploads', express.static('uploads'));  // Serve video files

// Start the server
mongoose.connect('mongodb://localhost:27017/assignmentapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((err) => console.error('Connection error', err));
