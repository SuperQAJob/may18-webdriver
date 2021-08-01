class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    drive() {
        console.log("I'm driving");
    }
    stop() {
        console.log("I'm stopping");
    }
    turnLeft() {
        console.log("Now I'm turning left differently");
    }
    turnRight() {
        console.log("I'm turning right");
    }
}
export default Car
