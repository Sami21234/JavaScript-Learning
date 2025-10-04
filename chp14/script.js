async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a, b, c) {
    return (a + b + c)
}

(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // Now comming to the Destructuring
    // Its means we can unpack or divide the array or properties of the object into a distinct variables

    // let [x,y,...rest] = [7,20,34,56,44,2354] //Here (...) means the destructuring
    // console.log(x,y,rest);

    // Similarly we can destructure objects on the left hand side of the assignment

    // let obj = {
    //     a:1,
    //     b:3,
    //     c:5
    // }
    // let {a,b} = obj
    // console.log(a,b);

    // So, why we use this because:-
    // Sometimes we have the large object and we have to get 2 to 3 things only, so we can pull out those by using Destructure method.

    // Now comming to the Spread operator
    // This is also used by (...) means [Kholdo], Ex-

    let arr = [1, 3, 4]

    console.log(sum(...arr));

    // Special case: we can create the object of the Array by indexing
    const arr1 = [1, 4, 6]
    const obj = { ...arr1 }
    console.log(obj);

    // Quick quiz
    const a = "the"
    const b = "no"
    const c = { a, b }
    console.log(c);


})()