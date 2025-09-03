// Question 4

// Extract the amount of this string 
//   "please give Rs 1000"

// let str = "please give Rs 1000"

// console.log(str.slice(15))

// Better approach

let str = "please give Rs 1000";
let word = str.split(" ");
let amount = word[3];
console.log(amount);