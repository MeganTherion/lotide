
const findKeyByValue = function(object, value){
  //console.log('Object.keys(object)', Object.keys(object))
for (key of Object.keys(object)) {
if (object[key]=== value) {
  return key;
} 
}
return undefined;
};

module.exports = findKeyByValue;
