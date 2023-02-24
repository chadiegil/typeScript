interface MotorCycle {
  brand: string;
  price: number;
}

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

ike(siIke);
