const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000; // You can choose any port

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'pw',
  database: 'mogame',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});

// Define a route to fetch data from the 'person' table
app.get('/persons', (req, res) => {
  connection.query('SELECT * FROM person', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
