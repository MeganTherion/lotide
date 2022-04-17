const assertEqual = require('./assertEqual');

const middle = function(array) {
  let middleInteger = [];
  if (array.length % 2 === 0) {
  middleInteger[0] = array[(array.length /2)-1];
  middleInteger[1] = array[array.length/2];
} 
  middleInteger[0] = array[Math.floor(array.length / 2)];
  
  return middleInteger;
}
  //module.exports = middle;
console.log("odd", middle([1, 2, 3, 4, 5]));
console.log("even", middle([1, 2, 3, 4]));