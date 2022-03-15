const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return false;
  } 
    return true;
  }
console.log(assertArraysEqual([1,2,3],[1,2,3]));

module.exports = assertArraysEqual;