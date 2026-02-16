const arr = [10, 2, 9, 2, 6, 5, 2];

// Αν το κάνω από την αρχή προς το τέλος χάνετε η δομή του πίνακα
// "πηδάει" στοιχεία στο traverse
// Οπότε πάμε από το τέλος προς την αρχή

const deleteBackwards = (arr, value) => {
   let i = arr.length;

   while (i--) {
      //    // post-decrement, i--    // εδώ arr.lenght = i = 7. Συγκρίνει με το 7, μπαίνει μέσα στο body με το 6.
      if (arr[i] === value) {
         arr.splice(i, 1);
      }
   }
};

// εναλακτικά

const deleteBackwards2 = (arr, value) => {
   for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
         arr.splice(i, 1);
      }
   }
};

// new array
const deleteImmu = (arr, value) => {
   return arr.filter((x) => x !== value);
};
