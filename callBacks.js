/*
var add = function(num1, num2) {
  return num1 + num2;
}

var subtract = function(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operation) {
  // lets use the operation input ^^^ as a function
  return operation(num1, num2);
}

var array = [1,2,"adam"];

var result = array.map(function(element){
  return element + "!";
});

console.log(result);

*/


/*
var DCClass = [
  {
    name: "Trish",
    isPresent: true
  },
  {
    name: "Tina",
    isPresent: true
  },
  {
    name: "adam",
    isPresent: false
  },
];

var everyonePresent = DCClass.every(function(person) {
  retrun person.isPresent;
});

if (everyonePresent) {
  console.log("we are all here!")
} else {
  console.log("someone is missing!")
}
*/
/*
var numbers = [0,5,2,4,4,1];

var sortedNumbers = numbers.sort(function(number1, number2){
  return number1 - number2;
})

console.log(numbers);
//console.log(sortedNumbers);
*/
/*
////*********** Positive Numbers ************
var pNumbers = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newPNumbers = pNumbers.filter(function(element){
  return element > 0;
});

console.log(newPNumbers);
*/

///************ Even Numbers **************

var eNumbers = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newENumbers = eNumbers.filter(function(element){
  return (element % 2 == 0);
})

console.log(newENumbers);
