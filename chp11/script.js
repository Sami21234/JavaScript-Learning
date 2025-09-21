async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.con/todos/1')
    let data = await x.json()
    return data;
}

async function main() {
    console.log('Loading Modules');
    console.log('Do something else');
    console.log('Load Data');
    let data = await getData()
    console.log(data);

}
main()

// Now solving and understanding from the w3schools

async function Display() {
    let prom = new Promise((resolve, reject) => {
        resolve("Hey this promise is being resolved");
    });

    let result1 = prom;
    console.log(result1);
    
    let result = await prom;
    console.log(result);
    
    // This await pauses the execution of the async function until the promise is resolved (This means wait here until prom is finished,then put its result into result)
    
    // if we don't use the await function inside the Async keyword (means we do not calls the await keyword then it will print the promise not the text inside it)
}
Display();