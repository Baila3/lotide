const assertEqual = function(actual, expected) {
  if(actual === expected){
    return `✅✅✅ Assertion Passed:  ${actual}  === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`;
  }
  };

  const findKeyByValue = function(object, value){
    var keys ="";
     for (let key in object){
       if (object[key] === value){
        keys += key;
            }
        }
        if(keys.length >0 ){
        return keys;
        }
      };
