import pool from '../../../lib/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM Tasks ORDER BY DateCreated DESC');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'POST') {
    const { taskName, description } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO Tasks (TaskName, Description) VALUES ($1, $2) RETURNING *',
        [taskName, description]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}