// Now Coming to the Asynchronous Javascript
// Callbacks = a function that is passed as an argument to another function.
// Used to handle the Asynchronous operations:
// like .. 1. Reading the file
    //     2. Network access
    //     3. Database interacting

console.log("script is initialize...")
console.log("script is starting...")

setTimeout(() => {
    console.log("I am setTimeout 1")
}, 2000);

setTimeout(() => {
    console.log("I am setTimeout 2")
}, 2000);

console.log("script is ended")

// here firstly the two consoles at starting will be run then after that the last console will run 
// And after that the two setTimeout will be executed as they are Asynchronous

