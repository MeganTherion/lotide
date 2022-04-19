const assertEqual = require('./assertEqual');

const tail = function(array) {
  let n = [];
  if (array.length > 1) {
    n.push(array.slice(1));
  }
<<<<<<< HEAD
  return n; 
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
module.exports = tail;
=======
  return n;
};
console.log(tail([1]));
//module.exports = tail;
>>>>>>> 9b956723ef58b27eccaeb7825b598d6ffc8e2987
