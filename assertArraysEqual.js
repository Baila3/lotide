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
     return "Assertion Failed: These don't look the same";
   } 
 
  }
   return "Assertion Passed: Like identical twins";
  };
  console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));