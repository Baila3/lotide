
    const middle = function(array) {
    arr = []
    if (array.length % 2 === 0 || array.length === 1){
      return []
    } else{
      arr.push((array.length/2) + .5)
      return arr
    }
    
    }
    console.log(middle([1,2,3,4,5]))
  module.exports = middle;