const assertEqual = require('./assertEqual');

const tail = function(array) {
  let n = [];
  if (array.length > 1) {
    n.push(array.slice(1));
  }
  return n;
};
console.log(tail([1]));
//module.exports = tail;
