function greet(name, lastName){
    let result = "Hello " + name + " " + lastName + "!";
    console.log(result);
}
greet("John", "Doe");

function printFullName(firstName, middleName, lastName){
    console.log("Full Name: "+firstName+" "+middleName+" "+lastName)
}
printFullName("Svetlana", "Sergeyevna", "Sapegina")

function fullName(firstName, middleName, lastName){
    return("Full Name: "+firstName+" "+middleName+" "+lastName)
}
let fullNameForm = fullName("Svetlana", "Sergeyevna", "Sapegina")
console.log(fullNameForm)

function count(dgt1, dgt2){
    console.log(dgt1 + dgt2)
}
count(1,2)

function multiOfTwo(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}
let result = multiOfTwo(2,4);
console.log(result)

function addOfTwo(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result
}
let summary = addOfTwo(2, 4);
console.log(summary);

