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
function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`👎 No good: ${arr1} !== ${arr2}`);

  }
}
//take in source, itemsToRemove
//loop through source
//if source[i] !== itemsToRemove[i]
//let removed += (source[i])
//use assertArraysEqual to ensure original array is not changed

function without (source, itemsToRemove) {
  let newArray = [, ];
  for (let i = 0; i < source.length; i++) {
    if (eqArrays(source, itemsToRemove)) {
      newArray += source[i];
    }
  } console.log(newArray);
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);