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
Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var pNumbers = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newPNumbers = pNumbers.filter(function(element){
  return element > 0;
});

console.log(newPNumbers);
*/
/*
///************ Even Numbers **************
Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
var eNumbers = [-10, -4, -1, 0, 1, 4, 6, 8,10];

var newENumbers = eNumbers.filter(function(element){
  return (element % 2 == 0);
})

console.log(newENumbers);
*/
/*
///*************** Square the Numbers *********************
Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

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
/*
/////*************** Sort an array 3 ********************
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

var newArray = arr.sort(function(array1, array2){
  // Weneed to tell sort() whether array1 comes before array2 or not
  // If array1 comes before array2, return a negative numberNames
  //otherwise, return a positive number.

  var summingFunction = function(accumulator, number){
    return accumulator + number; // this value that we returnw illbe passed in accumulator.
  };

  var array1Sum = array1.reduce(summingFunction, 0 );/*

  var array2Sum = array2.reduce(summingFunction, 0 );/*

  if(/* the sum of array1's elements < the sum of array2's elements *//* array1Sum < array2Sum) {
    return -1;
  } else {
    return 1;
  }

});


console.log(arr);
*/
//****************   Call 3 times *******************
/*
function call3Times(fun) {
  fun();
  fun();
  fun();
}

var hello = function() {
  console.log("Hello World");
}
call3Times(hello);
*/
/*
////***************** Acronym **************
// Write a function acronym that takes an array of words as argument and returns the acronym of the words
// Use the reduce method to do this.

var array = (['very', 'important', 'person']);

//var array2 = (['national', 'aeronautics', 'space', 'administration']);


function acronym(words) {
  return words.reduce(function(accumulator, word) {
    var firstLetter = word[0].toUpperCase();
    return accumulator + firstLetter ;
  }, "");

}

console.log(acronym(array)); // We should see VIP
*/

/// ******************** Bonus Map *************************
// Implement your own custom map function which takes two arguments: an array arr and a function fun.
// It will return a new array, with each of its results being the result of calling fun with each array element.

function map(arr, fun){
  var newArray = [];

  return newArray;
}
