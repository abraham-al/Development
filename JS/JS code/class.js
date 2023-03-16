class Car{
    constructor (make, model, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }

    print () {
        console.log(`${this.make} ${this.model} ${this.year}`);
    } 
}

let myCar = new Car('Volkswagen', 'Id7', 2023);


myCar.print();

class SportsCar extends Car {
   revEngine (){
        console.log('Verommmmm')
   }
}

let mySportCar = new SportsCar('BMW', 'Id6', 2023 )

mySportCar.print();
mySportCar.revEngine();