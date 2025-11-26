import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'db.icydltiirohdjwcsscag.supabase.co',
  database: 'postgres',
  password: 'CuteFamily@123',
  port: 5432,
});

export default pool