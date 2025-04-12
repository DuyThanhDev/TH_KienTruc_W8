const express = require('express');
const app = express();
app.use(express.json());

let inventory = {
  'product-1': 10,
  'product-2': 5
};

app.get('/product/:id', (req, res) => {
  const quantity = inventory[req.params.id] || 0;
  res.json({ productId: req.params.id, quantity });
});

app.post('/reserve', (req, res) => {
  const { productId, amount } = req.body;
  if (inventory[productId] >= amount) {
    inventory[productId] -= amount;
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Không đủ hàng' });
  }
});

app.listen(5002, () => console.log('Inventory Service running on port 5002'));