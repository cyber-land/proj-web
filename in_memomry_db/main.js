const funs = require('./terrain.js');

const terrain = new funs.Terrain(15, 15);
console.log(terrain.terrain)
funs.fill(terrain)
console.log(terrain.terrain)
