const EXCELLENT = 90;
const VERY_GOOD = 75;
const GOOD = 60;

let grade = 85; //example grade
let result = "";

if (grade > +EXCELLENT) {
   result = "Excellent";
} else if (grade >= VERY_GOOD) {
   result = "Very good";
} else if (grade >= GOOD) {
   result = "Good";
} else {
   result = "fail";
}

console.log("Grade: ", result);
