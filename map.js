function eqArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//assertEqual(eqArrays([1, 2, 1,], [1, 2, 3]), true); 

function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2) !== true) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } 
    console.log(`👎 No good: ${arr1} !== ${arr2}`);
  }


// assertArraysEqual([1, 2, 3], [1, 2, "3"])
// assertArraysEqual([1, 2, 3], [3, 2, 1])


const words = ["ground", "control", "to", "major", "tom"];

//defining map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
//calling map

const results1 = map(words, word => word[0]);
console.log(results1);

//testing map

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])