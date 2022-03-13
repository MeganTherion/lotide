const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    } else {
  console.log(`👍 Assertion Passed: ${actual} === ${expected}`); 
    }  
};


function eqArrays(array1, array2) {
  if (array1 === array2) 
  return true;
  if (array1.length !== array2.length) 
  return false;
  for ( let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    return true;
  }
}
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const eqObjects = function(object1, object2){
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  //console.log(keys1, keys2);
if (keys1.length !== keys2.length) {
  //console.log(keys1, keys2);
  return false;
} 
for (const key of keys1) { //for (const key of object1)
  if (keys1[key] === keys2[key]) {
  if  (Array.isArray([keys1[key]]) && Array.isArray([keys2[key]])) {
    //console.log("test");
    if (!eqArrays(object1[keys1[key]], object2[keys2[key]])) {
  return false;
  }   
} if (object1[keys1[key]] !== object2[keys2[key]]) {
  return false;
}

return true;
}
}
return false;
}

  
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" }
console.log(eqObjects(cd, dc));


//assertEqual(eqArrays(eqObjects(cd, cd2), false));
const ab = { a: "5", b: "6" };
const ba = { a: "5", b: "2" };
console.log(eqObjects(ab, ba));

console.log("eqarrays", eqArrays(ab, ba));

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

// const abc = {a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);