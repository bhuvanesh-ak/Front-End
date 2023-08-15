const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
// JavaScript apply() Method
const person1 = {
  firstName: "John",
  lastName: "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
console.log(Math.max.apply(Math, [1, 2, 3]));