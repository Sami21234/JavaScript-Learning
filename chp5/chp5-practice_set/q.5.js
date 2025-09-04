// Question 5

// Use reduce() to calculate the factorial of a given number from the array of first n natural numbers. 
// (n being the number whose factorial needs to be calculated)

let n = 6;      //number to which factorial is needed

let num = Array.from({length: n},(_,i) => i+1);

let factorial = num.reduce((acc,curr) => acc*curr,1);
console.log(`Factorial of ${n} is :` , factorial )
