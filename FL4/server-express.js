const express = require('express');
const sqlite3 = require('sqlite3');
const server = express();

server.get('/greetings', (req, res) => {
  const db = new sqlite3.Database('./gik339.db');
  db.run('CREATE TABLE IF NOT EXISTS greetings (message TEXT)');
  db.run('INSERT INTO greetings (message) VALUES (?)', ['Hej, SQLite!']);

  db.all('SELECT * FROM greetings', (err, rows) => {
    res.send(JSON.stringify(rows));
    db.close();
  });
});

server.listen(4000, () => {
  console.log('Servern körs på http://localhost:4000');
});
