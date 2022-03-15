//const assertEqual = require('./assertEqual');
//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let middleInteger = [];
  if (array.length % 2 === 0) {
    middleInteger[0] = array[(array.length/2 - 1)];
    middleInteger[1] = array[array.length/2];
  } else {
    middleInteger[0] = array[array.length/2]
  }
  return (middleInteger);

}
module.exports = middle;