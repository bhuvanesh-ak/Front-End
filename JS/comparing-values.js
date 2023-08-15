const obj = {
  name: "deeecode",
  age: 80,
  language: "javascript",
}

const myKey = "language";

const target = obj[myKey]
console.log(target);
// accessing object properties using bracket notation
const a = 1;
const b = 1;
console.log(a === b);
console.log(a == b);
// same type and same value
const c = 1;
const d = [1];
console.log(c === d);
console.log(c == d);
// same value ,different type
const array1 = [1];
const array2 = [1];
console.log(array1 === array2);
// as arrays are of reference type,it returns false

// Argument passing
function newage(age) {
  age = age + 1;
}
const myage = 21;
let result = newage(myage);
console.log(result);
console.log(myage);
// value doesn't change as it is of primitive type
function incrementage(person) {
  person.age = person.age + 1;
}
const ak = { age: 21 }
let updatedage = incrementage(ak);
console.log(updatedage);
console.log(ak);
// value changes as it is of Reference type