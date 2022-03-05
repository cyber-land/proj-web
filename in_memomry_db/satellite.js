const sqlite3 = require('sqlite3').verbose();
const now = require('nano-time');
const db = new sqlite3.Database(':memory:');

const addPoint = (req, res) => {
    const time = now();

    var stmt = db.prepare("INSERT INTO point (x, y) VALUES (?, ?)");
    const size = 100;
    for (var i = 0; i < size; i++) {
        stmt.run(i, size-i);
    }
    stmt.finalize();
    
    db.all("SELECT * FROM point", function(err, row) {
        console.log(row);
    });
    console.log(now()-time)
}

const retrievePoint = (req, res) => {
    for (var i = 100; i < 200; i++) {
        db.all("SELECT * FROM point WHERE x="+i,function(err, rows) {
            //console.log(JSON.stringify(rows, null, 2))
        })
    }
}

db.serialize(function() {
    db.run("CREATE TABLE soggetti (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
    db.run("CREATE TABLE point (x INTEGER, y INTEGER)");
});
addPoint()
retrievePoint()
db.close();
