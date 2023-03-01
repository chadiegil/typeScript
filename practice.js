"use strict";
exports.__esModule = true;
function Honda(motor) {
    console.log("Brand : ".concat(motor.brand, " and price: ").concat(motor.price));
}
var motor = {
    brand: "honda",
    price: 12314
};
console.log(Honda(motor));
function ike(person) {
    console.log("".concat(person.fname, " is ").concat(person.age, " and a ").concat(person.isProgrammer));
}
var siIke = { fname: "ike", age: 21, isProgrammer: true };
function newPerson(person) {
    console.log(person.age);
    console.log(person.name);
}
var p = {
    name: "ike",
    age: 21
};
newPerson(p);
