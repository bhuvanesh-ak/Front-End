// Scope chain augmentation
var GOAT = "MARADONA";
console.log(GOAT);

function worldcup() {
   let GOAT = "MESSI"
    console.log(GOAT);
    hardwork();
    function hardwork() {
        GOAT = "RONALDO"
        console.log(GOAT);
    }
}
worldcup();


console.log(user);
var user;
user="Bhuvanesh";
console.log("user");

// no block level scope
for(i=0;i<10;i++)
{
    
}
if(true){
    var color="red";
}
function song(){
    var music='ARR';
    console.log(music);
}
console.log(i);
/* These variables are available to the global scope,
even though they are defined in blocks*/
// There is no block level scope in Javascript
console.log(color);
// console.log(music); -> This throws an error

// This music variable is not available since it is defined within a function