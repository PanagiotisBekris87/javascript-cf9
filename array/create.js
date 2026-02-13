const arr = []; // create an empty array
const arr2 = [1, 2, 3, 4, 5]; //Create an array with initial values

// create 2d array
const grid = [
   [1, 2],
   [3, 4],
   [5, 6],
];

for (let i = 0; i < arr2.length; i++) {
   console.log(arr2[i]); //Accesing array elements
}

for (const num of arr2) {
   console.log(num); // Accessing with enhamced for loop
}

// Assesing 2d array with classic for and enhanced for
for (let i = 0; i < grid.length; i++) {
   for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
   }
}

for (const row of grid) {
   for (const value of row) {
      console.log(value);
   }
}

// Traverse with functional methodology, forEach
arr2.forEach((num) => console.log(num));

// Using forEach with console.log directly
arr2.forEach(console.log); //Παρόμοιο με το method reference της Java
