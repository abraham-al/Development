/*
let car = {
    make: 'BMW',
    model: 'Id7',
    year: 2023
};
*/ 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('BMW', 'Id7', 2023);

console.log(myCar)

function MyFunction () {
    console.log("Hi");
}

console.log(typeof MyFunction);

let myFunction = new MyFunction();

console.log(typeof myFunction);