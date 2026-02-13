const arr = [10, 2, 8, 9, 6, 5];

// sort in a new array

// slice, sort
let sortedArr = arr.slice().sort((a, b) => a - b); // Sorts the array
// H slice χωρις παραμετρους φέρνει ένα fresh copy
// στη συνεχεια υλοποιείται η λογική της compare (a, b) => a - b
// ουσιαστικα κάνει sort τους 2 αριθμούς με το αν η διαφορά τους επιστρέφει θετικό ή αρνητικό αριθμό

//Spreading, sort
sortedArr = [...arr].sort((a, b) => a - b);

//toSorted, sort
sortedArr = arr.toSorted((a, b) => a - b);
// Ο πιο σύγχρονος και προτεινόμενος τρόπος
