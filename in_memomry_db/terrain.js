function Terrain (height, width) {
  this.height = height;
  this.width = width;
  this.foodQuantity = 2;
  this.foodDimension = 5;
  this.terrain = Array.from(Array(height), () => new Array(width));
  for (var i=0; i<height; i++) for (var j=0; j<width; j++) this.terrain[i][j] = 0
}
function fill(terrain) {
  const randx = randomNumber(1, terrain.width-terrain.foodQuantity);
  const randy = randomNumber(1, terrain.height-terrain.foodQuantity);
  console.log(randx, randy)
  const fd = terrain.foodDimension;
  for (var i = 0; i < terrain.foodQuantity; i++) {
    terrain.terrain[randomNumber(1, fd)+randx][randomNumber(1, fd)+randy] = 1;
  }
}
function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
}
module.exports = {Terrain, fill};
