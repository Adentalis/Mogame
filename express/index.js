const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost', // If using Docker, set this to the Docker container name or service name if using Docker Compose
  user: 'myuser',
  password: 'mypassword',
  database: 'mydb',
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM my_table', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
