if (5 == 5)
{
  var name = {
    id: 8072,
    username: 'James_Tiberius_Kirk',
    rank : 'Captain'
    
  };
  console.log(name.id);
}
console.log(name.id);//8072
//We can access it. We don't want that.

if (5 == 5)
{
    (function(){
  var name1 = {
    id: 8072,
    username: 'James_Tiberius_Kirk',
    rank : 'Captain'
  }
  console.log(name1.id);
})();
}
console.log(name1.id);
// Error occurs
// The variable declared will deprecate after the function has been executed
