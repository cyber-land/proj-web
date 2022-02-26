const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json()) //usa il middleware per fare il parsing del json nelle richieste ricevute
//app.use(express.static('public')) //serve images, CSS files, and JavaScript files in a directory named public
app.use(cors())

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./prova.db');

const PORT = 3000

const funs = require('./functions.js');

const createCategory = (req,res) => {
  const stmt = db.prepare("INSERT INTO categoria (nome) VALUES (?)");
  const nome = req.body.nome
  stmt.run(nome)
  stmt.finalize()
  db.all("SELECT last_insert_rowid() AS rowid", (err,rows) => {
    res.json({
      id: rows[0].rowid,
      location: `/categorie/${rows[0].rowid}`
    })
  })
}

const deleteCategory = (req,res) => {
  db.all("DELETE FROM categoria WHERE id="+req.params.categoryId, (err,rows) => {
    if (err) {
      res.json({
        status: "SQL error"
      })
    } else {
      res.json(rows)
    }
  })
}

//app.get('/', funs.statusAlive)
app.get('/activities', funs.getActivities)
app.get('/categories', funs.getCategories)
app.get('/categories/:categoryId', funs.getCategory)
app.post('/categories', createCategory) //POST localhost:3000/categorie {"nome": "michele"}
app.delete('/categories/:categoryId', deleteCategory)

app.listen(PORT, function(err){
  if (err) console.log(err)
  console.log('server listening on port:', PORT);
});
