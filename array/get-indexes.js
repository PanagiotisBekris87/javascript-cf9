const arr = [1, 2, 3, 4, 5, 3, 6, 3, 3];

const getIndexes = (array, value) => {
   // Δημιουργία συνάρτησης με params (array, value) ως εξης    => {
   const indexes = [];
   array.forEach((element, index) => {
      // Lambda expression για την forEach της array with body   => {
      if (element === value) {
         indexes.push(index);
      }
   });
   return indexes;
};

console.log(getIndexes(arr, 3)); // Output: [ 2, 5, 7, 8 ]

// .
// .
// .
// .
// .
// .
// .
// .
// .

// do it with reduce
const getIndexesWithReduce = (array, value) => {
   return array.reduce((indexes, element, index) => (element === value ? [...indexes, index] : indexes), []);
};

console.log(getIndexesWithReduce(arr, 3)); // Output: [2]
