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
/*
///************ Even Numbers **************

var eNumbers = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newENumbers = eNumbers.filter(function(element){
  return (element % 2 == 0);
})

console.log(newENumbers);
*/
/*
///*************** Square the Numbers *********************
var numberSquared = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newNumberSquared = numberSquared.map(function(element) {
  return element*element;
})

console.log(newNumberSquared);
*/
/*
///************** Cities 1 ****************
Write a function which takes an array of city objects as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
  { name: 'Los Angeles',
    temperature: 60.0},
  { name: 'Atlanta',
    temperature: 52.0 },
  { name: 'Detroit',
    temperature: 48.0 },
  { name: 'New York',
    temperature: 80.0 }
];

var habitableCities = cities.filter(function(e){
  return e.temperature < 70;
})

console.log(habitableCities);
*/
/*
////*************** Cities 2 ******************
Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

var cities2 = [
  { name: 'Los Angeles',
    temperature: 60.0},
  { name: 'Atlanta',
    temperature: 52.0 },
  { name: 'Detroit',
    temperature: 48.0 },
  { name: 'New York',
    temperature: 80.0 }
];

var habitableCities2 = cities2.map(function(e){ // selects all of the names and 'maps' them to a new array
  return e.name;
})

console.log(habitableCities2);
*/
/*
/////*******Good Job!********
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var goodJob = people.forEach(function(element){
  console.log("Good Job " + element + "!");
});
*/
/*
////*************** Sort an array ***************
Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var alphaNames = people.sort(function(name1, name2){
  if (name1 < name2) {
        return -1;
    }
    if (name2 < name1) {
        return 1;
    }
    return 0;
});

console.log(alphaNames);
*/

/*
////*************** sort an array 2 *******************
Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var numberNames = people.sort(function(name1, name2){
  if (name1.length < name2.length) {
        return -1;
  }
  if (name2.length < name1.length) {
        return 1;
  }
  if (name2.length = name1.length) {

  }return 0;
});

console.log(numberNames);
*/
