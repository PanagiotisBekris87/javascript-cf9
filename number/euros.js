const EXCHANGE_RATE = 0.85;
let euros = 50;
let dollars = 0;
let roundedDollars = 0;

// Convert

dollars = euros * EXCHANGE_RATE;

roundedDollars = Math.round(dollars * 100) / 100; //round to 2 decimal places

// result

console.log(euros + "€ is equal to " + dollars.toFixed(2) + "$");
console.log(euros + "€ is equal to " + roundedDollars.toFixed(2) + "$");
