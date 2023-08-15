function calculator(a,b,callback){
    let sum=a+b;
    callback(sum);
}
function name1(random){
    let name="Bhuvanesh";
    console.log(`hello ${name} this is the number  ${random}`);
}
calculator(5,5,name1);

// In the above function name1 is the callback function 
// name1 function is passed as an argument to thr calculator function

setTimeout(function1,3000);
function function1(){
        console.log("This is executed after 3 seconds");
}
// the function1 is again executed after 3 seconds
setInterval(clock,1000)
function clock(){
    let time=new Date();
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}
// This function is executed for every 1 second




