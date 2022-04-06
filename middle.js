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
  const assertEqual = function(actual, expected) {
    if(actual === expected){
      return `Assertion Passed:  ${actual}  === ${expected}`;
    } else {
      return `Assertion Failed: ${actual}  !== ${expected}`;
    }
    };

    const middle = function(array) {
    if (array.length % 2 === 0 || array.length === 1){
      return []
    } else{
      return (array.length/2) + .5
    }
    
    }
    console.log(middle([1,2,3,4,5]))