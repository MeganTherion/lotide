//const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return false;
  }
  return true;
};

module.exports = assertArraysEqual;