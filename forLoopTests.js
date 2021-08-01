describe("", () => {
    it("should go over again and again", () => {
        const myCar = ["firstCar", "and Another one", "and Another one"]
        for(let i = 0; i < myCar.length; i++) {
            console.log(myCar[i])
        }
    });

    it("should log even undefined values", () => {
        const myCar = ["firstCar", "anotherCar", "and Another one"]
        for (let i = 0; i < myCar.length; i++) {
            console.log(myCar[i]);
        }
    });
});


