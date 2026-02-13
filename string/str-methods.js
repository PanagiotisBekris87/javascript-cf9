let str1 = "Hello";
let str2 = "World";

// Equal
console.log(str1 === str2); //false

// Compare strings
if (str1.localeCompare(str2, "el-GR") < 0) {
   // Μπορούμε να ορίσουμε την γλώσσα με την παράμετρο μετά το κόμα
   console.log(str1 + " comes before " + str2);
} else if (str1.localeCompare(str2, "el-GR") > 0) {
   console.log(str1 + " comes after " + str2);
} else {
   console.log(str1 + " and " + str2 + " are equal");
}

// Accesing characters
console.log(str1[0]);

// check if a string includes a substring
if (str1.includes("ell")) {
   console.log(str1 + " includes'ell'");
}

// Searches for a substring and returns the index of the first occurrence
console.log(str1.indexOf("lo")); //3     //(0-1-2)3

// concatenate string
let greeting = str1 + ", " + str2 + "!";
console.log(greeting);

if (str1.toUpperCase() === str2.toUpperCase()) {
   console.log("The string are equal when case is ignored.");
}

// trim whitespace
let str3 = "              Hello Coding! ";
console.log(str3.trim());

// replace substring
let str4 = "The quick brown fox jumps over the lazy dog.";
let newStr1 = str4.replace("fox", "cat");
console.log(newStr1);
let newStr2 = str4.replace(/the/gi, "a"); //regex replace // πάντα μέσα σε (slash /) τα regex
// Το g σημαίνει global. Όσες φορές το βρει. Σε όλα τα occurrences.
// Το i σημαίνει insensitive. case-insensitive
console.log(newStr2);

// Traverse string
for (let i = 0; i < str1.length; i++) {
   console.log(str1[i]);
}

// Traverse with enhanced for
for (const char of str1) {
   console.log(char);
}

// substring
// str1 = Hello
console.log(str1.substring(1, 4)); // ell  , το 4 ειναι not inclusive

//slice (Μπορύμε να πάμε και από την αντίθετη πλευρά με αρνητικό)
console.log(str1.slice(1, 4)); //"ell"
console.log(str1.slice(-3)); //"ell"
