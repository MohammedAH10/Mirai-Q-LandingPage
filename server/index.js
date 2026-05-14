import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'waitlist.db');

let db;
try {
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.exec(`CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`);
} catch (err) {
  console.error('Failed to initialize database:', err.message);
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'invalid', title: 'Invalid Email', description: 'Please enter a valid email address.' });
  }
  try {
    const stmt = db.prepare('INSERT INTO waitlist (email) VALUES (?)');
    stmt.run(email);
    res.json({
      message: 'success',
      title: 'You\'re on the waitlist!',
      description: 'Thank you for signing up as an early tester. We\'ll keep you updated on our progress.'
    });
  } catch (err) {
    if (err.message.includes('UNIQUE constraint')) {
      return res.json({
        message: 'duplicate',
        title: 'Already signed up!',
        description: 'This email is already on our waitlist. Thank you for your interest!'
      });
    }
    res.status(500).json({
      message: 'error',
      title: 'Something went wrong',
      description: 'Please try again later.'
    });
  }
});

app.get('/api/waitlist/count', (req, res) => {
  try {
    const row = db.prepare('SELECT COUNT(*) as count FROM waitlist').get();
    res.json({ count: row.count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get count' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mirai-Q waitlist server running on http://localhost:${PORT}`);
});
