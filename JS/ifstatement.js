if (new Date().getHours() > 18) {
    console.log("Good Morning");
}
else{
    console.log("Good Evening");
}
// If and else if statement
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "It is morning";
} else if (time < 18) {
  greeting = "It is Evening";
} else {
  greeting = "It is night";
}
console.log(greeting);

