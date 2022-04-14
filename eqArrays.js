const assertEqual = require('./assertEqual')

const eqArrays = function(a, b) {
  //console.log("a", a, "b", b);
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      console.log("arrays here");
      if (!eqArrays(a[i], b[i])) {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays; 
 

 
