const takeUntil = function(array, callback) {
  const result = [];
  for (let items of array) { // 1: loop through array
    if (callback(items)) {  // if function x(items)
      
      return result;
    } 
    result.push(items)} //2. push items to array
}

module.exports = takeUntil;

// let funk = x => x < 0 //name the function to test it
// console.log(funk(data1[5])); //function checks to see if data1 is <0