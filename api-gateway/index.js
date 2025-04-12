const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/payment', createProxyMiddleware({ target: 'http://payment-service:5001', changeOrigin: true }));
app.use('/inventory', createProxyMiddleware({ target: 'http://inventory-service:5002', changeOrigin: true }));
app.use('/shipping', createProxyMiddleware({ target: 'http://shipping-service:5003', changeOrigin: true }));

app.listen(5000, () => {
  console.log('API Gateway running at http://localhost:5000');
});