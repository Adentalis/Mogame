CREATE TABLE IF NOT EXISTS person (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO person (name, age) VALUES ('Alice', 30);
INSERT INTO person (name, age) VALUES ('Bob', 25);
INSERT INTO person (name, age) VALUES ('Charlie', 35);
