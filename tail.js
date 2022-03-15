const assertEqual = require('./assertEqual');
const tail = function(array) {
  return array.slice(1);
};

//console.log(tail([1, 2, 3, 4, 5]));

module.exports = tail;
