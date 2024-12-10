const express = require('express');
const cors = require('cors');
const util = require('util');

const app = express();

app.use(cors());
app.use(express.json({}));

app.post('/webhook', (req, res) => {
  console.log('Incoming Data: ', util.inspect(req.body, { depth: null, compact: false }));
  return res.status(200).json({ message: 'Webhook received and processed successfully.' });
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook listener running on port ${PORT}/webhook/`);
});
