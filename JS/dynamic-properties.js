const key1 = "language";
const key2 = "Information";
// Dynamic properties
const obj = {
  name: "Tommy",
  age: 21,
  [key1]: "javascript",
  [key2]: true
}

console.log(obj)

let person = {
  name: 'Bhuvanesh',
  age: 21,
  Company: "Calibraint",
  
};

// add the rating property
person.Rating = 'Very good';

// change the company name
person.Company = 'Calibraint Technologies';

// delete the age property
delete person.age;


console.log(person);
// copying values
// Primitive values

let a = [5, 10];
let b = a;
a = 15;
console.log(a);
console.log(b);

let rcb = { 
   players: 24,
   coach: "mike hesson",
   captain: 'virat kohli'
  }

let champions=rcb;
// assigning variable 'rcb'to 'champions'
// changing object properties

champions.players=20;
console.log(rcb);
console.log(champions);
// changing the object via the rcb variable is also reflected in the champions variable.
