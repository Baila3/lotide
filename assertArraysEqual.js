
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
module.exports = assertArraysEqual;