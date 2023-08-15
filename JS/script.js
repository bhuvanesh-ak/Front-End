// This function is used to change the contents present in id "demo" and "Demo"
"use strict";
function myFunction() {

    document.getElementById("demo").innerHTML = "This para changed";
    document.getElementById("Demo").innerHTML = 5 + 6;
}
/*This type of 
comment is used 
for multi lines */

document.write("Hello Cricket Fans!!!");
//This line writes number 27 in the webpage
document.getElementById("hello").innerHTML = "Milestone-2";
// This function is used to change the contents present in id "hello"
let x, y, z;// Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;
z = x - y;   // Statement 4

document.getElementById("number").innerHTML =
    "The value of z is " + z + ".";

var a, b, c;
a = 5;
b = 10;
c = a + b;
c = 16;
// Another value is assigned to the variable c
document.getElementById("number1").innerHTML =
    "The value of c is " + c + ".";

const d = 5;
const e = 10;
const f = d + e;
// We can't reassign some other value to constant
document.getElementById("number2").innerHTML =
    "The value of f is " + f + ".";
// Displays the type
document.getElementById("typeof").innerHTML =
    "'John' is " + typeof "John" + "<br>" +
    "3.14 is " + typeof 3.14 + "<br>" +
    "NaN is " + typeof NaN + "<br>" +
    "false is " + typeof false + "<br>" +
    "[1, 2, 3, 4] is " + typeof [1, 2, 3, 4] + "<br>" +
    "{name:'John', age:34} is " + typeof { name: 'John', age: 34 } + "<br>" +
    "new Date() is " + typeof new Date() + "<br>" +
    "function () {} is " + typeof function () { } + "<br>" +
    "myCar is " + typeof myCar + "<br>" +
    "null is " + typeof null;

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;
// type of null returns object
document.getElementById("typeof1").innerHTML = typeof person;
// type of undefined returns undefined
let person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined;
document.getElementById("typeof2").innerHTML = person;
// Number types
document.getElementById("boolean").innerHTML = 10 > 9;

let num1 = 10,
    num2 = 10.8,
    num3 = 10e4,
    num4 = -10e-4;

document.getElementById("number").innerHTML = num1 + "<br>" + num2 + "<br>" + num3 + "<br>" + num4;
// floating point arithmetic
let float = 0.2 + 0.1;
document.getElementById("float").innerHTML = "0.2 + 0.1 = " + float;
// adding string and numbers
let j = 5,
    k = "5";
let l = j + k;
document.getElementById("number3").innerHTML = l + j;
// dividing by 0 returns infinity
let txt = 5 / 0;
document.getElementById("infinity").innerHTML = txt;
//Hexadecimal values
let hex = 0xFF;
document.getElementById("hex").innerHTML = "The value of 0xFF = " + x;

// x is a number
let q = 500;

// y is an object
let w = new Number(500);
document.getElementById("numAsObj").innerHTML = (q == w) + "<br>" + (q === w);
//To store large numbers
let bigint1 = 9007199254740995n;
let bigint2 = 9007199254740995n;
//multiplying 
let bigint3 = bigint1 * bigint2;

document.getElementById("bigint").innerHTML = bigint3;
// String
let str11 = "\"VIRAT KOHLI\" is the Greatest " +
    "Test Captain of 'India'";
//String length
let length = str11.length;
// Using backticks to give double quotes and single quotes
let str13 = `He's the best "Batsman" in the world`;
document.getElementById("str1").innerHTML = str11;
document.getElementById("str1").innerHTML = str13;
document.getElementById("str2").innerHTML = "The length of the above string is " + length;
// Slicing
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
// Substring
let part1 = text.substring(-12, 5);
let part2 = text.substr(15, 4);
document.getElementById("str3").innerHTML = part;
document.getElementById("str4").innerHTML = part1;
document.getElementById("str5").innerHTML = part2;
// Replaces Test with Odi in a new string
let replaced = str11.replace("Test", "ODI");
document.getElementById("str6").innerHTML = replaced;

let str12 = "virat is the former captain.rohit is the current captain.";
document.getElementById("str7").innerHTML = str12;
// Replacing using global flag
let replaceg = str12.replace(/captain/g, "Captain");
document.getElementById("str8").innerHTML = replaceg;
// Replaces all elements with the specified name
let replaceALLL = str12.replaceAll("captain", "leader");
document.getElementById("str9").innerHTML = replaceALLL;
// Converts to uppercase and lowercase
let textul = "Hey! Good Morning!!";
document.getElementById("lc").innerHTML = textul.toLowerCase();
document.getElementById("uc").innerHTML = textul.toUpperCase();
// Concatenation
let conc1 = "Virat";
let conc2 = "Kohli";
let conc3 = conc1.concat(" ", conc2);
document.getElementById("conc").innerHTML = conc3 + " " + conc1.charAt(0) + " " + conc2[0];
// Trimming extra spaces
let trim1 = "   MS DHONI    ";
let trim2 = trim1.trim();
document.getElementById("trimm").innerHTML = trim2;
// Padding.Adds U until the length of string reaches 10
let text1 = "SIUU";
let text2 = text1.padEnd(10, "U");
document.getElementById("padd").innerHTML = text2;
// Splits when a " , " occurs
let text3 = "a,b,c,d,e,f";
const myArray = text3.split(",");
document.getElementById("split").innerHTML = myArray[0];
// Matches the word and displays the count
let text4 = "The rain in SPAIN stays mainly in the plain";
const myArray1 = text4.match(/ain/g);
document.getElementById("match1").innerHTML = myArray1.length + " " + myArray1;
// Finds if the specified word starts or ends in the string
let text5 = "Hello world, welcome to the universe.";
document.getElementById("start1").innerHTML = text5.startsWith("world", 5);
document.getElementById("start2").innerHTML = text5.endsWith("universe.");

let firstName = "DALE";
let lastName = "STEYN";
// Template literals
let text13 = `Welcome ${firstName} ${lastName}!`;
document.getElementById("template").innerHTML = text13;

