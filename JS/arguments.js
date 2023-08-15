function myFunction(x, y = 10) {
    return x + y;
}
console.log(myFunction(5));
// Parameter values
function findMax() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(4, 5, 6));
// The Arguments Object
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(x);
//Invoking as a function
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(10, 2));
// Invoking a Function as a Method
const myObject = {
    firstName: "John",
    lastName: "Wick",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());
//   The call() Method with Arguments
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Wick"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.call(person1, "Oslo", "Norway")); 