const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Proxy endpoints
app.use('/api/auth', createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
