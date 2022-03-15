//const assertEqual = require('./assertEqual');
//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  console.log("array", array);
  let middleInteger = [];
  if (array.length % 2 === 0) {
    middleInteger[0] = array[(array.length/2 - 1)];
    console.log("middle int0", middleInteger[0]);
    middleInteger[1] = array[array.length/2];
    console.log("middle int1", middleInteger[0]);
  } //else {
    middleInteger = array[array.length/2]
    console.log(middleInteger);
  //}
  console.log(middleInteger);
  return (middleInteger);


}
console.log(middle([1, 2, 3, 4, 5]));
module.exports = middle;