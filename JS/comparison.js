let a=10;
let b=20;
let c=20;
let age =21;
let ageOfPerson=(age>18?"Adult":"Child");
// Ternary Operator
console.log(a==b);
console.log(a!=b);
// Equality operator
console.log(a>b);
console.log(a<b);
// Checks both value and type
console.log(c===b);
console.log(c!=="b");
console.log(c!==b);
console.log(a!=b);
console.log(ageOfPerson);
// AND , OR operator
console.log(a < 10 && b > 1) ;
console.log(a < 10 || b > 1) ;
// Nullish Coalescing Operator
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);

