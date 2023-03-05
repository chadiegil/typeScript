import { IPerson } from "./person";

interface MotorCycle {
  brand: string;
  price: number;
}
interface Car {
  brand: string;
  price: number;
}
interface Human {
  brand: string;
  price: number;
}

type Game = {
  character: string;
  attribute: string;
};

type two = {
  character: string;
  attribute: string;
};
function Honda(motor: MotorCycle): void {
  console.log(`Brand : ${motor.brand} and price: ${motor.price}`);
}

const motor = {
  brand: "honda",
  price: 12314,
};

console.log(Honda(motor));

type Person = {
  fname: string;
  age: number;
  isProgrammer: boolean;
};

function ike(person: Person) {
  console.log(`${person.fname} is ${person.age} and a ${person.isProgrammer}`);
}

const siIke = { fname: "ike", age: 21, isProgrammer: true };

function newPerson(person: IPerson) {
  console.log(person.age);
  console.log(person.name);
}

const p = {
  name: "ike",
  age: 21,
};

newPerson(p);
