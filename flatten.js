const flatten = (arr) => {
  const newArr = []
  for (const items of arr) {
    if (!Array.isArray(items)) {
      newArr.push(items)
    } else {
      for (const miniItems of items) {
        newArr.push(miniItems)
      }
    }

  }
  return newArr
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))