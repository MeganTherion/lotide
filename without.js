const assertArraysEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

function without (source, itemsToRemove) {
  let newArray = [, ];
  for (let i = 0; i < source.length; i++) {
    if (eqArrays(source, itemsToRemove)) {
      newArray += source[i];
    }
  } console.log(newArray);
}

module.exports = without;