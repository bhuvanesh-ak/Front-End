// Module pattern
// wrapping variables and functions in single scope
function EmployeeDetails() {
    var name= "Mayank";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;
  
    return {
      name,
      age,
      designation
    }
  }
  
  var newEmployee = EmployeeDetails()
  console.log(newEmployee);
  
  var userName = newEmployee.salary;
  console.log(userName);
  // This will result in "undefined" value.
  // because salary is not in return statement

  function EmployeeDetails1() {
    var name= "Mayank";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;
    var calculateBonus = function(amount) {
      return salary + amount;
    }
    return {
      name,
      age,
      designation,
      
      calculateBonus
    }
}
  var newEmployee1 = EmployeeDetails1()
  console.log(newEmployee1)
  // salary is not returned
  // but used for calculations,since it remains in scope
  var userName1 = newEmployee1.calculateBonus(1000);
  console.log(userName1);