// Question 1

// Write a program to print the marks of a student in an object using for loop

console.log("Question 1 of the practice set chp3");

let obj = {
    Sami: 98,
    Rohan: 56,
    Ash: 45,
};
 let keys = Object.keys(obj);
//  This gets the keys and convert into the array

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + "=>" + obj[key]);
}