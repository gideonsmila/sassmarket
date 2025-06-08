const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/api/categories', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM categories');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.get('/api/tools', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tools');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tools' });
  }
});

app.get('/api/tools/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM tools WHERE id = $1', [id]);
    const tool = rows[0];
    const { rows: reviews } = await pool.query('SELECT * FROM reviews WHERE tool_id = $1', [id]);
    res.json({ ...tool, reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tool' });
  }
});

app.post('/api/tools/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { userId, rating, comment } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO reviews (tool_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, userId, rating, comment]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
