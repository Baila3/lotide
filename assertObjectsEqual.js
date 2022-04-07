const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    return `🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`;
  }
  for (let key of keys1) {
    if (actual[key] !== expected[key]) {
      return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`;
    }
  }
  return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
};
