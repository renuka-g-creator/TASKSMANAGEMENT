import pool from '../../../lib/db.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM Tasks WHERE TaskId = $1', [id]);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Task not found' });
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'PUT') {
    const { taskName, description, status } = req.body;
    try {
      const result = await pool.query(
        'UPDATE Tasks SET TaskName = $1, Description = $2, Status = $3, DateUpdated = now() WHERE TaskId = $4 RETURNING *',
        [taskName, description, status, id]
      );
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await pool.query('DELETE FROM Tasks WHERE TaskId = $1', [id]);
      res.status(204).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}