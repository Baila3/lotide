const assertEqual = function(actual, expected) {
  if(actual === expected){
    return `Assertion Passed:  ${actual}  === ${expected}`;
  } else {
    return `Assertion Failed: ${actual}  !== ${expected}`;
  }
  };

  const findKeyByValue = function(object, value){
  let keys = Object.keys(object);
   for (let key of keys) {
     console.log(keys);
   }
  };
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));