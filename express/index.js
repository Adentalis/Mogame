const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
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

app.put('/persons/:id', (req, res) => {
  console.log('in PUT Person');
  const id = req.params.id;
  const { age } = req.body;
  console.log(id);
  console.log(age);

  // Parameterized query to prevent SQL injection
  const query = 'UPDATE person SET age = ? WHERE id = ?';

  // res.send('hallo');
  connection.query(query, [age, id], (err, result) => {
    if (err) {
      res.status(500).send("Error updating the person's age");
      throw err;
    }

    console.log(result);
    if (result.affectedRows === 0) {
      res.status(404).send('Person not found');
    } else {
      res.send(`Person with ID ${id} updated successfully.`);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
