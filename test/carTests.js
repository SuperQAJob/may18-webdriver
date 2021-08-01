import Car from "./car.js";

describe('my Car test suite', () => {
    it('car should be able to move', function() {
        let myCar = new Car("Ford", 2004);
        console.log(myCar);
        myCar.drive();
        myCar.stop();
        myCar.turnLeft();
        myCar.turnRight();

        let another = new Car("Toyota", 2005);
        console.log(another);
        another.drive();
        another.stop();
        another.turnLeft();
        another.turnRight();
    });
});
