/* Create a faulty calculator using javascript


This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

And It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random);
let a = prompt("Enter a first number")
let c = prompt("Enter the operation ")
let b = prompt("Enter the second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    // Returns the correct operations
    console.log('The result is ${a} ${c} ${b}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
    // perform the wong operation

    c= obj[c]
    // ^ change the operation as per the obj
      alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}