const arr = [1, 2, 3];

// Spreading the array into individual elements
const copy = [...arr]; // Creates a semi-"shallow" copy of the array

copy[2] = 88;

console.log(arr); // [1, 2, 3]
console.log(copy); // [1, 2, 88]

// αντιγράφονται τα περιεχόμενα as is
// στην παρούσα είναι deep copy, υπάρχουν 2 πίνακες στο heap memory

// αν όμως τα περιεχόμενα είναι δείκτες τότε αντιγράφονται οι δείκτες as is.
// (οπότε πρακτικά shallow copy των "τελικών" περιεχομένων που βρίσκονται στο heap)

const str = "Hello";
const chars = [...str]; // Spreads the string into an array of characters

console.log(chars); // [ 'H', 'e', 'l', 'l', 'o' ]
