// tuple

let tuple: [string, number] = ["red", 2313];

tuple[0] = "blue";
tuple[1] = 5353;

// generic

function getRandomNumber(array: number[]): number {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(getRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function getRandomString(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(getRandomString(["reshad", "qara", "huseyn", "nino"]));

type Insan = {
  name: string;
};

function getRandomPerson(array: Insan[]): Insan {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(
  getRandomPerson([
    { name: "Reshad" },
    { name: "Nicat" },
    { name: "Eli" },
    { name: "Hosain" },
  ])
);

function getRandomElement<T = any>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(getRandomElement(["reshad", "qara", "huseyn", "nino"]));

console.log(
  getRandomElement([
    { name: "Reshad" },
    { name: "Nicat" },
    { name: "Eli" },
    { name: "Hosain" },
  ])
);

let r = getRandomElement([1, 3, 4, 5]);

// 

interface Valuable{
    price: number;
}

interface Organ extends Valuable{
    name:'boyrek' | 'urek',
    price:1
}

interface Order <T extends Valuable>{
    id: string;
    product: T[];
}

const o : Order<Organ> ={
    id:"",
    product:[
    {
        name:"boyrek",
        price:1
    }
    ]
}

interface P{
    name:string
}

// const o1: Order<P>