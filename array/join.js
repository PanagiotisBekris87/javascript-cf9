const arr = [1, 2, 3, "cat", 5];

const str = arr.join(" | "); // join array elements into a string
console.log(str); // Output: "1 | 2 | 3 | cat | 5"

// add elements to the array
arr.push(6); // Add an element to the end of the array
arr.push("dog", 8); // Add multiple elements to the end of the array

// delete an element
delete arr[0]; // Deletes the first element (1) but leaves an empty slot.
// Do not use it for removing elements from an array. Use splice instead.

console.log(arr);
