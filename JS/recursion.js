// factorial of a number using recursion
function factorial(n)
{
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1)
    
}
let y=factorial(5);
console.log(y);

// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);
// function call is made that exceeds the call stack size
function recursion(num1)
{
    console.log(num1);
    num1++;
    if(num1<=11300){
    recursion(num1);
}
}
recursion(1);


