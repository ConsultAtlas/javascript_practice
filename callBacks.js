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
var room = [
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
