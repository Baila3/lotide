const assertEqual = require('../assertEqual');
const head = require('../head');
console.log(assertEqual(head(["Lighthouse Labs", "Bootcamp"]),"Lighthouse Labs" ));
console.log(assertEqual(head([1, 1]), 1));