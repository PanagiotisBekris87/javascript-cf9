/**
 * Δοθεντων 2 ακεραιων να επιστραφει το πηλικο στρογγυλοποοιημενο σε
 * 2 δεκαδικα ψηφια
 */

const num1 = 15;

const num2 = 7;

const result = num1 / num2;
console.log(result);

// console.log(result.toFixed(2));     // επιστρεφει string

let roundedResult = Math.round(result * 100) / 100;

console.log(roundedResult);

// Θα μπορουσαμε να κανουμε και parse float απο το string που επιστρεφει απο την tofixed
