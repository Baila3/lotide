const assertEqual = function(actual, expected) {
  if(actual === expected){
    return `Assertion Passed:  ${actual}  === ${expected}`;
  } else {
    return `Assertion Failed: ${actual}  !== ${expected}`;
  }
};

const countLetters = function(string){
  const letterObj = {};
  for(let letter of string){
      if (letterObj[letter] !== string){
          letterObj[letter] = 0
          letterObj[letter]++;
      }
  }
  return letterObj;
};