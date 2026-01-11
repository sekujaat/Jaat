const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'synce-backend' });
});

// Simple DB test route
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW() AS now;');
    res.json({ ok: true, now: result.rows[0].now });
  } catch (err) {
    console.error('DB test error', err);
    res.status(500).json({ ok: false, error: 'DB_ERROR' });
  }
});

// TODO: yahin pe baad me auth, user, Agora-token, etc. routes add karenge

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});