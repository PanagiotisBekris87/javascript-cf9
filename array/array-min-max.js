const arr = [10, 2, 9, 6, 5];

function getMin(arr) {
   let minVal = Math.min(...arr); // spreading
   let minPosition = arr.indexOf(minVal);
   return [minVal, minPosition]; //    // Μπορουμε να επιστρεψουμε οτι θελουμε
}
// το αποπάνω δεν ειναι ομως ο βελτιστος τροπος καθως χρησι,οποιει πιο πολυ μνημη
// αφου κανει copy τον πινακα

// Πιο σωστός τρόπος είναι ο παρακάτω
// find min with the old classic way

function getMinClassic(arr) {
   let minVal = arr[0];
   let minPosition = 0;

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minVal) {
         minVal = arr[i];
         minPosition = i;
      }
   }
   return [minVal, minPosition];
}
