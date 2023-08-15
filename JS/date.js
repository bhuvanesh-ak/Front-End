const d = new Date();
console.log(d.toString());
console.log(d.toISOString());
console.log(d);
// JavaScript ISO Dates
const a = new Date("October 13, 2014 11:13:00");
const b = new Date(2018, 11, 24, 10, 33, 30, 0);
const c = a.toUTCString();
console.log(a);
console.log(b);
console.log(c);
// Date parse method
const msec = Date.parse("March 21, 2012");
 console.log(msec);
//  getTime method
 const aaa=d.getTime();
 console.log(aaa);
// // Date Input - Parsing Dates
var d1 = new Date();
var d2 = new Date(d1);
var same = d1.getTime() === d2.getTime();
var notSame = d1.getTime() !== d2.getTime();
// comparing dates
console.log(same);
console.log(notSame);
// Example date and time in UTC
const utcDate = '2022-01-15T11:02:17Z';

const date1 = new Date(utcDate);


console.log(date1);

//  Convert to Local time
console.log(date1.toLocaleString()); //  "1/15/2022, 1:02:17 PM"

let diff = d.getTimezoneOffset();
console.log(diff);

// get time methods

console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());

// using toLocaleDateString
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
const date2 = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
console.log(date2);


const a1 = new Date("2002,7,2");
console.log(a1.toString());
const d3 = Date()
console.log(d3)
const date11 = new Date(2020, 1, 1)
console.log(date11);
date11.setDate(2);
console.log(date11);
// points to last date in the previous month
date11.setDate(-1);
console.log(date11);
// Daylight saving time
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

var today = new Date();
if (today.isDstObserved()) { 
    console.log("Daylight saving time!");
}
else{
   console.log("Daylight saving time is not observed");
}

