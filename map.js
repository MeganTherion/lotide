const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];

//defining map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;