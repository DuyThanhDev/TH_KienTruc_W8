const express = require('express');
const app = express();
app.use(express.json());

app.post('/payment', (req, res) => {
  // Xử lý thanh toán ở đây
  res.json({ message: 'Thanh toán thành công' });
});

app.post('/refund', (req, res) => {
  // Xử lý hoàn tiền
  res.json({ message: 'Hoàn tiền thành công' });
});

app.listen(5001, () => console.log('Payment Service running on port 5001'));