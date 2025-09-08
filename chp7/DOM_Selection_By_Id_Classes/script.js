console.log("Sami");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("boxcolor").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "blue";
// this line will access only the first element of the box class

// And for selecting all the element of the particular class we use following method and we cannot directly style the queryselectorall so we have to iterate using any for loop like,

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "black"
// })

e = document.getElementsByTagName("div");
e[2].matches("#boxcolor");