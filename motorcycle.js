class Motorcycle {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log("I'm driving");
    }

    stop() {
        console.log("I'm stopping");
    }

    turnLeft() {
        console.log("I'm turning left");
    }

    turnRight() {
        console.log("I'm turning right");
    }
}
let myMotorcycle = new Motorcycle("Suzuki", "SkyWave 400", 1999);
console.log(myMotorcycle)
myMotorcycle.drive();
myMotorcycle.stop();
myMotorcycle.turnLeft();
myMotorcycle.turnRight();

let myBike = new Motorcycle("Honda", "Lead 50", 1997);
console.log(myBike);
myBike.drive();
myBike.stop();
myBike.turnLeft();
myBike.turnRight();