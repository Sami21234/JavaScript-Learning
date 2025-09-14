let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        resolve(a)
    }
    setTimeout(() => {
        console.log('Yes I am Done');

    }, 2000);
})

prom1.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log('err');

})
// This are from the W3 schools

// function Display() {
//     let prom = new Promise((resolve, reject) => {
//         let x = Math.random();
//         if (x < 0.5) {
//             resolve("ok");
//         }
//         else {
//             reject("error")
//         }
//     })
//     prom.then(
//         function (value) { console.log(value) },
//         function (error) { console.log(error) }
//     )
// }
// Display()