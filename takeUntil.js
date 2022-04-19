const takeUntil = function(array, callback) {
  const result = [];
  for (let items of array) {
    if (callback(items)) {
      return result;
    }
    result.push(items);
  }
};
