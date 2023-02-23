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
