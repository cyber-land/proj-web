// creazione database per il web service

const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();

fs.unlinkSync("./prova.db") //elimina un eventuale precedente istanza

const db = new sqlite3.Database('./prova.db');

db.serialize(() => {
  db.run("CREATE TABLE category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)");
  db.run("CREATE TABLE activity (id INTEGER PRIMARY KEY AUTOINCREMENT, \
    name TEXT UNIQUE NOT NULL, category_id INTEGER, \
    FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE NO ACTION)");
  
  const categories = ['math', 'household', 'technology'];
  const stmt = db.prepare("INSERT INTO category (name) VALUES (?)");
  categories.map(category => stmt.run(category));
  stmt.finalize()
  
  const activities = [ ['logarithms', 'elliptic curves', 'integrals undefined', 'integrals defined'], 
  ['javascript', 'databases', 'php', 'algorithms', 'data structures'], 
  ['meal preparation', 'windexing mirrors', 'cleaning', 'dusting surfaces', 'making a grocery list'] ];
  
  categories.map((category, index) => {
    const s = db.prepare(`INSERT INTO activity (name, category_id) VALUES (?,${index})`);
    activities[index].map(activity => s.run(activity))
    s.finalize()
  })

  db.each("SELECT * FROM category", (err, row) => console.log(row.id + ": " + row.name));
  db.all("SELECT  * FROM activity", (err,rows) => console.log(rows))
});
db.close();
