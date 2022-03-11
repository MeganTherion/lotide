const takeUntil = function(array, callback) {
  const result = [];
  for (let items of array) { //loop through array
    if (callback(items)) { 
      console.log('result', result);
      return result;
    } 
    result.push(items)}
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);