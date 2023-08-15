function Outerfunction(n){
    
    function Innerfunction(){
        console.log(`Hello, I am ${n}`);
    }
    function greeting(){
        console.log("How are you?");
    }
    
        Innerfunction();
        greeting();
    
}
Outerfunction("Bhuvanesh");
// Innerfunction variables can access the variables declared in outer function scope
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
// for new variable declaration,seperate functions are executed
var counter1=Counter();
console.log(counter());
console.log(counter());
console.log(counter1());
console.log(counter());
console.log(counter1());
// Private variables


	function carDetails() {
		let kms = 0;
		let speed = 0;
		let speedUp = (intialSpeed) => {
			speed += intialSpeed;
			kms += speed;
		};
		let totalkmsDriven = () => kms;
		return { speedUp, totalkmsDriven };
	}
	
	let car_object = carDetails();
	car_object.speedUp(7);
	car_object.speedUp(9);
	console.log(car_object.totalkmsDriven());
	
	// Undefined, since it is made private:
	console.log(car_object.kms);
    // accessible only using function calls
    console.log(car_object.totalkmsDriven());
	