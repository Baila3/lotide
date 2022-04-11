const assertEqual = require('../assertEqual');
const tail = require('../tail');
console.log(assertEqual(tail(["Lighthouse Labs", "Bootcamp"]),"Bootcamp"));
console.log(assertEqual(tail([1, 2]), 2));