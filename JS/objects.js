// Using an Object Literal
const persn1 = { firstName: "John", lastName: "Doe", age: 50, height: 170 };

document.getElementById("obj1").innerHTML = persn1.firstName + " is " + persn1.age + " years old.";
// Accessing JavaScript Properties
// The properties of an object can be displayed as a string:
let txt12 = "";
// Displaying the Object in a Loop
// for and in statement loops through the properties of an object.
for (let x in persn1) {
    txt12 += persn1[x] + " ";
}
// Deleting Properties
delete persn1.age;
persn1.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

document.getElementById("obj5").innerHTML =
    "He is " + persn1.name();
document.getElementById("obj2").innerHTML = txt12;

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
document.getElementById("obj3").innerHTML = myObj.cars.car2;
// Nested Arrays and Objects
let x1 = "";
const myObj1 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

for (let i in myObj1.cars) {
    x += "<h2>" + myObj1.cars[i].name + "</h2>";
    for (let j in myObj1.cars[i].models) {
        x += myObj1.cars[i].models[j] + "<br>";
    }
}

document.getElementById("obj4").innerHTML = x;

const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("obj6").innerHTML = Object.values(person2);
//   Stringify Arrays
const arr2 = ["John", "Peter", "Sally", "Jane"];
document.getElementById("obj7").innerHTML = JSON.stringify(arr2);