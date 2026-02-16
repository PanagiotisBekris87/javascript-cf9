const arr = [10, 2, 9, 6, 5];

// delete by index
let itemToRemove = arr.indexOf(9);
arr.splice(itemToRemove, 1); // removes item at the specific index

console.log(arr); // [10, 2, 6, 5]
