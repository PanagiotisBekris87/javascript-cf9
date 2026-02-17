const book = {
   author: {
      firstname: "Athanassios",
      lastname: "Androutsos",
   },
};

let lastname = book.author.lastname;

// Αν όμως το book ηταν null? Αν ο AUthor ηταν null?

let lastname2 = book?.author?.lastname ?? "Unknown";
// nullish coalescing operator, αλλιως και γνωστός και ως Elvis operator
// Αν το book ή ο author είναι undefined ή null δίνει το "Unknown" στη θέση του
// Αλλιώς δίνει κανονικά το value

console.log(lastname2);
