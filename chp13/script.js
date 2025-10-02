// let obj = {
//     a:1,
//     b:"Sami"
// }
// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit  = {
//     jumps:true
// }
// rabbit.__proto__ = animal; //This sets the rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log('Object is created');

    }
    eats() {
        console.log('I am eating');

    }
    jumps() {
        console.log('I am jumping');

    }
}
class Bat extends Animal {

    constructor(name) {
        super(name)
        console.log('Object is created and the Zoobat is flying');
    }
    eats() {
        super.eats()
        console.log('I am eating but flying'); // This is the method ovveriding where method of one class changes to another class

        // And talking about the super keyword -- we dont want the method of the super class to be in the vain , to avoid this we use super keyword

    }
}
let a = new Animal("Ash");
console.log(a);
let b = new Bat("Zoobat")
console.log(b);
