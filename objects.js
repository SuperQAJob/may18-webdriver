const car = {
    type:"Fiat",
    model:"500",
    color:"white",
    year:2005
};

let carType = car.type;
console.log(carType);

let carModel = car["model"];
console.log(carModel);

let carColor = car.color;
console.log(carColor);

let carYear = car.year;
console.log(carYear);

let isEqual = false;
isEqual = 5 === "5";
console.log(isEqual);

if(car.year >= 2005 && car.color === "white") console.log("Car is new enough");


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}
console.log(text);


text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + " ";
}
console.log(text);


for(let i = 10; i <= 20; i++){
        if(i % 2 === 0){
        console.log(i);
    }
}
// let's divide the value by 2
// if the remainder is zero then it's an even number


