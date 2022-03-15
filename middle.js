const assertEqual = require('./assertEqual');

const middle = function(array) {
  let middleInteger = [];
  //if array is even 
  if (array % 2 === 0); {
  middleInteger = array[Math.floor((array.length -1)/2)];
  } 
  middleInteger = array[Math.floor(array.length / 2)];
return middleInteger;
  }
  module.exports = middle;
