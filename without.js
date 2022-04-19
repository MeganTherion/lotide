const assertArraysEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

function without (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (eqArrays(source, itemsToRemove)) {
      newArray += source[i];
    }
  } return(newArray);
}

module.exports = without;

console.log(without([1,2,4,5,5,4,4,4,47], [4]))