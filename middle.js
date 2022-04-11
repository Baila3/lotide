
    const middle = function(array) {
    arr = []
    if (array.length % 2 === 0 || array.length === 1){
      return []
    } else{
     return (array.length/2) + .5
    }
    
    }

  module.exports = middle;