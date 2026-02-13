let isLogin = false;
let isAdmin = true;
let hasAccess = false;

hasAccess = isLogin && isAdmin; // ειναι short circuit , false

// falsy values
// 0   0.0  0n(bigint)
// ""  ''  ``
// undefind  null

// όλα τα υπόλοιπα είναι truthy

let isLogin2 = "";
let isAdmin2 = "yes";
let hasAccess2 = false;

hasAccess2 = isLogin2 && isAdmin2; // ειναι short circuit , // has access = ""

let isLogin3 = "yes";
let isAdmin3 = "yesAdmin";
let hasAccess3 = false;

hasAccess3 = isLogin3 && isAdmin3; // ειναι short circuit , // has access = "yesAdmin"

// Αντιστοιχα και για τα OR

// Σε OR || -> first truthy  (ή last falsy αν είναι όλα falsy)
// Σε AND && -> first falsy  (ή last thruthy αν είναι όλα truthy)
