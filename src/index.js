require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const claimRoutes = require('./routes/claimRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const docsRoutes = require('./routes/docsRoutes');

const app = express();
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 60000, // Default to 1 minute
    max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100, // Default to 100 requests per window
    message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Routes
app.use('/api/claim', claimRoutes);
app.use('/api/token', tokenRoutes);
app.use('/docs', docsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});