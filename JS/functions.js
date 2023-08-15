// function declaration
function myFunction(a, b) {
    return a * b;
}
// calling the function
let product = myFunction(4, 3);
console.log("The product is " + product);
// Function as values
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
console.log("The temperature is " + toCelsius(77) + " Celsius.");

// arrow function
const productArrow = (x, y) => { return x * y };
console.log(productArrow(5, 5));

// self invoking functions
(function (n = 10) {
    if (n % 5 == 0) {
        console.log(n + " is divisible by 5");
    }
    else {
        console.log(n + " is not divisible by 5");
    }
})();
