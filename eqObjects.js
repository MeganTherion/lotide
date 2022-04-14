const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  //console.log(keys1, keys2);
  if (keys1.length !== keys2.length) {
      //console.log(keys1, keys2);
      return false;
  }
  for (const key of keys1) { //for (const key of object1)
      if (keys1[key] === keys2[key]) {
        if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
          eqObjects(object1[key], object2[key]);
        }
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
       if (!eqArrays(object1[key], object2[key])) {
          return false;
              }
          } else if (object1[key] !== object2[key]) {
     return false;
       }
      }
  }
  return true;
};

module.exporsts = eqObjects;
