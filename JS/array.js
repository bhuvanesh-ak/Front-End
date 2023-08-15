// Array Declaration
const teams = [];
teams[0] = "Ind";
teams[1] = "RSA";
teams[2] = "AUS";
teams[6] = "Champions";
// Array flattening
let teams1 = teams.flat()
document.getElementById("array1").innerHTML = teams1;
// adding new element by using push function
const Teams = ["INDIA", "AUSTRALIA", "ENGLAND", "SOUTH AFRICA"];
Teams.push("NEW ZEALAND");
let len = Teams.length;
// Looping Array Elements
let list = "<ul>";
for (let i = 0; i < len; i++) {
  list += "<li>" + Teams[i] + "</li>";
}
list += "</ul>";
document.getElementById("array2").innerHTML = list;
// Popping items out of an array,Pushing items to array
// Using shift and unshift
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
fruits.unshift("Kiwi");
fruits.pop();
fruits.shift();
// Javascript array length
fruits[fruits.length] = "Kiwi";
// Deleting array elements
delete fruits[fruits.length - 1];
document.getElementById("fruits").innerHTML = fruits.join(" ") + fruits[fruits.length];
// adding new elements using array Splicing 
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruitsSplicing").innerHTML = fruits1;

fruits1.splice(2, 0, "Lemon", "Kiwi");
// Removes a piece of array using slicing
const citrus = fruits1.slice(3);
document.getElementById("fruitsSplicing2").innerHTML = fruits1 + "<br>" + "<br>" + citrus;
// Sorting and reversing
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
document.getElementById("sort1").innerHTML = fruits2;
fruits2.reverse();
document.getElementById("sort2").innerHTML = fruits2;
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("num1").innerHTML = points;
// Sorting in Ascending and Descending Order
points.sort(function (a, b) { return a - b });
document.getElementById("num2").innerHTML = points;
points.sort(function (a, b) { return b - a });
document.getElementById("num3").innerHTML = points;
// Finding minimum and maximum in an array
function myArrayMax(arr) {
  let len = arr.length;
  let max = arr[0];
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
function myArrayMin(arr) {
  let len = arr.length;
  let min = arr[0];
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
document.getElementById("max1").innerHTML = "Maximum number is " + myArrayMax(points);
document.getElementById("min1").innerHTML = "Minimum number is " + myArrayMin(points);
// Sorting object arrays
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

displayCars();
// Sorting cars using years
cars.sort(function (a, b) { return a.year - b.year });
displayCars();

function displayCars() {
  document.getElementById("cars").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
}
const numbers1 = [45, 4, 9, 16, 25];
// Checks for each element and calls a function
let txt1 = "";
numbers1.forEach(myFunction);
document.getElementById("numbers1").innerHTML = numbers1;
document.getElementById("foreach").innerHTML = txt1;
// This function displays the element in array
function myFunction(value, index, array) {
  txt1 += value + "<br>";
}
// creates a new array by performing a function on each array element.
const numbers3 = [45, 4, 9, 16, 25];
const numbers2 = numbers3.map(myFunction22);

document.getElementById("Iteration1").innerHTML = numbers2;
// Multiplies the index by 2
function myFunction22(value, index, array) {
  return index * 2;
}

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
document.getElementById("Iteration2").innerHTML = newArr;
// Filters by a function 
const numbers12 = [45, 4, 9, 16, 25];
const over18 = numbers12.filter(myFunction1);

document.getElementById("Iteration3").innerHTML = "Numbers greater than 18 are " + over18;
// returns values > 18
function myFunction1(value, index, array) {
  return value > 18;
}
// Adds the Array elements
let sum = numbers12.reduce(reduce1);
function reduce1(total, value, index, array) {
  return total + value;
}
document.getElementById("Iteration4").innerHTML = "The sum is " + sum;
// returns true if all values >18
let allOver18 = numbers12.every(myFunction18);

function myFunction18(value, index, array) {
  return value > 18;
}
document.getElementById("Iteration5").innerHTML = "All the numbers are greater than 18 : " + allOver18;
// returns true if some values are >18
let someOver18 = numbers12.some(myFunction18s);

function myFunction18s(value, index, array) {
  return value > 18;
}
document.getElementById("Iteration6").innerHTML = "Some numbers are greater than 18 : " + someOver18;
// the first element that is larger than 18:
let firstvalue = numbers12.find(myFunctionf);

function myFunctionf(value, index, array) {
  return value > 18;
}
document.getElementById("Iteration7").innerHTML = "First value which passed greater than 18 : " + firstvalue;
// returns an Array object from any object with a length property
const King = Array.from("VIRAT");
document.getElementById("Iteration8").innerHTML = King;
// Array Spread 
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("Iteration10").innerHTML = year;

