// Arrays are Mutable means they can be changed unlike the strings
// In js Arrays are the objects so whenever we write typeof array it returns the object

console.log("Arrays")

// let arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr.length)
// arr[0]= 56;
// console.log(arr[3])
// console.log(arr[2])
// console.log(arr[1])
// console.log(arr[0])

// Now coming to the arrays methods 

// 1- toString() -->converts the Arrays into the Strings
// console.log(arr.toString())

// // 2- join() --> this methods adds some words in between array(Adds all the elements of an array into a string, separated by the specified separator string.)
// console.log(arr.join( "-" ))

// // 3- pop() --> this method is used to pop-out the last element from the array and prints that element and returns the filtered array
// console.log(arr.pop())
// console.log(arr)

// 4- push() --> this method is used to add element in the last of the array and returns the size of the new array and we can  insert both numbers and words
// console.log(arr)
// console.log(arr.push(100,"Sami"))
// console.log(arr)

// 5- shift() --> this method is used to remove the first element from the array and prints it 
// console.log(arr.shift())
// console.log(arr)

// 6- unshift() --> this method is used to add new element in the beginning and returns the new length of the array.
// console.log(arr.unshift("Sami"))
// console.log(arr)

// 7- Delete() --> this method is used to delete the elements from the array but the lenth is occupied and returns the undefined value of the desired deleted element
// delete arr[2]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[2])

// 8- concat() --> this method is used to join two or more arrays (Note:- this method does not change the existing arrays)

// let a = [1 ,2 ,3 ,4 ,5 ,6]
// let b = [7 ,8 ,9 ,10]
// let c = ["Sami","Ash","Brock"]

// console.log(a.concat(b,c))

// 9- splice() --> this method is used to add or remove an element from the particular position
// Method - (Arrayname.splice(start: number, deleteCount?: number))

// let numb = [1, 2, 3, 4, 5, 6]
// numb.splice(1,3,34567,34354)
// console.log(numb)

// 10- slice() --> slices out a piece from an array and gives that slice element and  It creates a new array

// let sam = [2,4,6,8,10]
// console.log(sam.slice(1,3))

// 11- reverse() --> this method is used to reverse the element from the array

// let sami = ["s","a","m","i"]
// console.log(sami.reverse())

// Now coming to the loops

// let a = [1, 93, 23, 45, 67]

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)

// }   

// --> forEach loop  

// a.forEach((value, index, arr)=>{
//     console.log(value,index)
// })

// forin loop

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, obj )
//     }
// }

// forof loop
//  for (const element of a) {
//     console.log(element)
//  }

// Now using map(), filter(), reduced methods

// let arr = [1, 3, 5, 67, 30]
// let newarr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2)

// }
// console.log(newarr)

// This solution can be done more easily by using the map() method 

// map()

// let arr = [1, 3, 5, 67, 30]
// let newarr = arr.map((e) => {
//     return e ** 2
// })
// console.log(newarr)

// filter()

// const greaterThanSeven = (e) => {
//     if (e > 7) {
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

// reduce()

let arr2 = [1,2,3,4,5]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

// Array.from is used to convert any object in the Array

// let array = Array.from("Sami")

// console.log(array)
