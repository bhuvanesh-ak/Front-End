let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Have a nice day !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });
console.log(myPromise);
// the resolve block gets executed after 3 seconds
function test(){
    console.log(this);
}
test();

function getweatherupdate(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
                resolve('Sunny')
                
           
        },1000)
        })
    }
function getweather(weather){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case 'Sunny':
                    resolve("weather updated")
                    break;
                case 'Rainy':
                    resolve("weather updated")
                    break;
                case 'Cloudy':
                    resolve("weather updated")
                    break;
                default:
                    reject('No weather updated')
            }
        },1000)
    })
}
// function gets executed based on switch case
function onsuccess(data){
    console.log(`success ${data}`)
}
function onError(error){
    console.log(`Error: ${error}`)
}
getweatherupdate()
    .then(getweather)
    .then(onsuccess,onError);




    
