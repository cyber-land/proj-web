const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./prova.db');

const statusAlive = (req, res) => {
  res.json({server: 'alive'});
};

const getActivities = (req, res) => {
  db.all("SELECT nome, durata FROM attivita",function(err, rows) {
    //rows = rows.filter(row => row.durata >5)
    res.json(rows)
  })
};

const getCategories = (req,res) => {
  //console.log(req)
  db.all("SELECT nome FROM categoria",(err, rows) => {
    if (err) {
      res.json({
        status: "SQL error"
      })
    } else {
      res.json(rows)
    }
  })
}

const getCategory = (req, res) => {
  db.all("SELECT nome FROM categoria WHERE id="+req.params.categoryId,(err, rows) => {
    if (err) {
      res.json({
        status: "SQL error"
      })
    } else {
      res.json(rows)
    }
  })
}

module.exports = {getActivities, getCategories, getCategory};
