let a1={
    name:"bhuvanesh",
   a2 : [1,2,3,4,5]
   

   } 
console.log(a1);

let a3=Object.create(a1);
a3.name="Bhu";
a3.age=22;
console.log(a3);
// Shadowing properties
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

// prototype using create
// Using a constructor
function prototype1(value, initial){
    this.value = value;
    this.initial = initial;
  };

  const proto = new prototype1("Bhuvanesh", "A K");
  console.log(proto);

    prototype1.prototype.welcome=function(){
    return `${this.value} ${this.initial}`
  }
  
  const carl = Object.create(proto);
  carl.value // hello!
  console.log(carl.value);
  console.log(proto.welcome());