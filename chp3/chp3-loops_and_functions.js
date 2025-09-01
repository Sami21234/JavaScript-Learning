

// whenever we are told to print the number from 1 to 10 ,
// we will easily print it by console.log(), but what if we will told to print the number from 1 to 1 billion can we do it by console.log?
// the answer is yes but it will increase the time complexity and bad for practice,  there comes the usage of Loops

// Example of the basic for loop

// let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }


// Example of the forin loop
// forin loop is used to print the keys of the object


// let obj = {
//     name: "Sami",
//     role: "Programmer",
//     company: "Sam AI"
// }

// for (const key in obj) {
//     console.log(key);
// }

// Example for the forof loop
// forof loop is used for iteration i.e. used in Array,Strings etc.

// for (const c of "Sami") {
//     console.log(c)
// }

// Example of the while loop
// This type of the loop will executes based on the conditions

// let i=0;
// while (i<5) {
//    console.log(i);
//    i++;    
// }

// Example of the do-while loop
// This type of loop will initailly runs one time then checks the conditions

// let i=10;
// do {
//     console.log(i);
//     i++;
// } while (i<5);

// now coming to the functions --> so Functions are the block of the code to perform the specific task
// Ex.

// function name(name) {
//     console.log("Hey " + name + " you are nice")
//     console.log("Hey " + name + " you are good")
//     console.log("Hey " + name + " you are intelligent")
//     console.log("Hey " + name + " your tshirt is good")
// }
// name("SameS")

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(3, 4)

// In js we use the return keywords to return the value

// name("SameS")

// function sum(a, b) {
//     return a + b
// }
// result = sum(3, 4)

// console.log("The sum of the given numbers is: ", result);

// Arrow function

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(32);
func1(432);
func1(323);