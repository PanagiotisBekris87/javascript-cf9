const arr = [1, 2, 3, 4, 5];

// remove 2 elements starting from index 0
const removed = arr.splice(0, 2); // Removes the first two elements (1 and 2) from the array
// και διαγραφονται και επιστρεφονται
console.log(arr); // [ 3, 4, 5 ]    , removed = [1, 2]

// insert element at index 2
arr.splice(2, 0, 99); // Inserts 99 at index 2 without removing any elements

console.log(arr); //[ 3, 4, 99, 5 ]

// update element at index 1
arr.splice(1, 1, 88); // Replaces the element at index 1 (4) with 88
console.log(arr); // [ 3, 88, 99, 5 ]
