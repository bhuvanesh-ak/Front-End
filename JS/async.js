let promise=()=> new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("executing");
    resolve('Promise resolved')}, 2000); 
    
}); 
promise();
// a promise

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000);
  });
  // async function
  async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise2;
  console.log(result);
  console.log('hello');
  }
  // calling the async function
  
  asyncFunc();

// a promise
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise is successfully implemented')}, 6000); 
});

// async function
// try and catch block
async function asyncFunc1() {
  try {
      // wait until the promise resolves 
      let result = await promise1; 

      console.log(result);
  }   
  catch(error) {
      console.log(error);
  }
}

// calling the async function
asyncFunc1(); // Promise resolved