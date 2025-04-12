const express = require('express');
const app = express();
app.use(express.json());

let shippingStatus = {};

app.post('/shipping', (req, res) => {
  const { orderId } = req.body;
  shippingStatus[orderId] = 'Đang giao hàng';
  res.json({ orderId, status: 'Đang giao hàng' });
});

app.get('/shipping/:orderId', (req, res) => {
  const status = shippingStatus[req.params.orderId] || 'Chưa xác định';
  res.json({ orderId: req.params.orderId, status });
});

app.listen(5003, () => console.log('Shipping Service running on port 5003'));