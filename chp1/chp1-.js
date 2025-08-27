console.log("Hey this is the js file")

var a = 5;
var b = 5;

console.log(a + b)
console.log(typeof a, typeof b)
           //  ^
//   ^  // the above line will show the datatype of the particular variable (typeof)

// we will use the(let) variable over the(var) variable because the (let) variable is block scope and the(var) variable is Global scoped variable
// For example->

var a = 5;
var b = 5;

{
    var a=55;
}
console.log(a)

// ^ this will print the block varaibles value as 55 because the var is global

let c = 4;
let d = 5;

{
    let c=55;
}
console.log(c)
// ^ this will print the block varaibles value as 4 because the var is global

// Now coming to the Datatypes

let x="Sami";
let y=44;
let z=3.55;
const p= true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// Now coming to the Objects--- we write objects in the curly brackets {} , these are of the key-value pairs

let o= {
 name:"Sami",
 "job role": "Fullstack Developer",
 "job code": 5600
}
console.log(o)

// now if we have to add the entity in the Object we wil use 

o.salary = "27 lpa";
console.log(o)