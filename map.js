const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  } 
   for (let i = 0; i < arr1.length; i++){
   if (arr1[i] !== arr2[i]){
     return false
   } 
 
  }
   return true
  };

  const assertArraysEqual = function(ray1, ray2){
  if(ray1.length !== ray2.length){
    return false
  } 
   for (let i = 0; i < ray1.length; i++){
   if (ray1[i] !== ray2[i]){
     return `🛑🛑🛑 Assertion Failed: ${ray1}  !== ${ray2}`
   } 
 
  }
   return `✅✅✅ Assertion Passed:  ${ray1}  === ${ray2}`;
  };
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results1, ['w', 'c', 't', 'm', 't']));