const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
<<<<<<< HEAD

const words = ["ground", "control", "to", "major", "tom"];
=======
>>>>>>> 17d0d0ad522478eeb9b554a3a151f4554e9521fc


module.exports = map;
