// Question 5

// Try to change 4th character of a given string were you able to do it?

// first of all string is immutable it can't be changed but we can make the new string and replace it as desired

let str = "MohdSami";
let newstr = str.slice(0,3) + "x" + str.slice(4)
console.log(newstr)