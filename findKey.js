const takeUntil = function(array, callback) {
  let arr = [];
  for (let element of array){
    if (callback(element) === true){
   return arr
    }
    arr.push(element)
  }
  }
const findKey = function(object, callback) {
 var keys ="";
  for (let key in object){
   if (callback(object[key]) === true && keys < 2){
     keys += key;
   }
  }
  if(keys.length > 0 ){
   return keys;
  }
};
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))
