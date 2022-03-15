const middle = function(array) {
  let middleInteger = [];
  //if array is even 
  if (array % 2 === 0); {
  middleInteger = array[Math.floor((array.length -1)/2)];
  } 
  middleInteger = array[Math.floor(array.length / 2)];
return middleInteger;
  }
  console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5]));