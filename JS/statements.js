// FOR STATEMENT
// continue statement
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text1 = "";
for (let i = 0; i < cars.length; i++) {
  text1 += cars[i] + " ";
  if(i==2)continue;
}
console.log(text1);
// for in statement
const person = {fname:"John", lname:"Doe", age:25}; 
let forin = "";
let text2;

for (let x in person) {
   text2 += person[x] + " ";
}
console.log(text2);
// switch case statement
// break statement
var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
      break;
    default:
      day = "Unknown Day";
  }
 console.log("Today is " + day);
//  labeled statements
let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
const numbers={a:18, b:22, c:3, d:7, e:10};
with(numbers)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}