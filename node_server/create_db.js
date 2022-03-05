// creazione database per il web service

const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();

//fs.unlinkSync("./prova.db")

const db = new sqlite3.Database('./prova.db');

db.serialize(function() {
  db.run(
    "CREATE TABLE attivita ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    nome TEXT, durata INTEGER, \
    id_categoria INTEGER, \
    FOREIGN KEY(id_categoria) REFERENCES categoria(id))");
  db.run("CREATE TABLE categoria ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    nome TEXT)");

  var stmt = db.prepare("INSERT INTO attivita (nome,durata) VALUES (?,?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i,i);
  }
  stmt.finalize();
  db.each("SELECT  id, nome,durata FROM attivita", function(err, row) {
      console.log(row.id + ": " + row.nome + " " + row.durata);
  });
});

db.close();

//https://replit.com/@professorandrea/FaithfulDeterminedCondition#index.js

