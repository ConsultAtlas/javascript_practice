/// Hey You!
/*function hello(name) {
  name_1 = "Hello " + name;
  console.log(name_1);
}

hello('Mustache');

*/

///Hello You, 2
/*function hello(name) {
  name_1 = "Hello " + name;
  if (name === undefined) {
  	console.log("Hello World");
  }
  else {
  	console.log(name_1);
  }
}

hello();

//MadLib
function MadLib(name, sub) {
  var m_sentence = name + "'s " + "favorite subjet is " + sub +".";
  console.log(m_sentence);
}*/

//MadLib("Zach", "programing")
















///Tip Calculator 2










///Tip Calculator 3












///Print Numbers
/*function count1_10() {
  numbers = [1,2,3,4,5,6,7,8,9,10]
  for (number in numbers) {
    console.log(number);
  }
}

count1_10();
*/

///Do Print Numbers Exercise but with While Loop










///Print a Square

//Tip Calculator 1 and 2

/*
function tipAmount(amt,service) {
	if (service === 'good') {
    t_A = (amt*.2) + amt;
  }
  else if (service === 'fair') {
    t_A = (amt*.15) + amt;
  } 
  else if (service === 'poor') {
    t_A = (amt*.1) + amt;       
  }
	//t_A = t_A.toStrings();
  monies = "$" + t_A;
  console.log(monies);
}

tipAmount(100, 'good');

*/

//Tip Calculator 3
/*
function tipAmount(amt,service,people) {
	if (service === 'good') {
    t_A = ((amt*.2) + amt)/people;
  }
  else if (service === 'fair') {
    t_A = ((amt*.15) + amt)/people;
  } 
  else if (service === 'poor') {
    t_A = ((amt*.1) + amt)/people;       
  }
	//t_A = t_A.toStrings();
  monies = "$" + t_A;
  console.log(monies);
}

tipAmount(100, 'good', 5);
*/

//Print the Square
/*function pSquare(num1) {
	
	for (i = 0; i < num1; i++) {
		var aster = "";
		for (z = 0; z < num1; z++) {
			aster += "*";
		}
		console.log(aster);

	}
}

pSquare(5);*/
/*
function box1(width, height) {
	for (i = 0; i < height; i++) {
		var aster = "";
		for (j = 0; j < width; j++) {
			if (j = 0 or j = (width -1)) {
				console.log("*".repeat(width))
			}
			else {
				console.log(aster = '*' + " ".repeat(width-2) + '*';)
			}

		}
	}
}
*/
//Solution
/*
function printBox(width, height) {
	var star = "*";
	var space = " ";

	console.log(star.repeat(width));

	for (var i = 0; i < height-2; i++) {
		console.log("*" + space.repeat(width-2) + "*");
	}

	console.log(star.repeat(width));

}		

printBox(10, 10);	
*/

//Ceaser Cipher
/*
function ceaserCipher(message, offset) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var output = '';

	for( var i=0; i < message.length; i++) {
		var letter = message[i];

		var position = alphabet.indexOf(letter); // position is an integer

		var newPosition = position - offset; // also an integer. need a conditional to deal with an offset that makes the position negative.
		if (newPosition < 0) {
			newPosition += 26;
		}

		var newLetter = alphabet[newPosition]; // selects the letter from alphabet based on the offset position

		output += newLetter;
	}
	console.log(output);
}

ceaserCipher('adam', 2);
*/
/*
function positiveNumbers(array) {
	//return a new array with just the positive numbers in the array
	var newArray = [];

	for (var i = 0; i < array.length; i++) {
		var number = array[i];
		
		if (number > 0) {
			newArray.push(number);
		} 
	}
		return newArray;
}

console.log(positiveNumbers([-4,-2,-3,4,5,9,8]));
*/
/*
function matrixMultiply(array, array1) {
	var results = [];

	var row1col1 = array[0][0]*array1[0][0]+array[0][1]*array1[1][0];
	var row1col2 = array[0][0]*array1[0][1]+array[0][1]*array1[1][1];
	var row2col1 = array[1][0]*array1[0][0]+array[1][1]*array1[1][0];
	var row2col2 = array[1][0]*array1[0][1]+array[1][1]*array1[1][1];

	results.push([row1col1, row1col2]);
	results.push([row2col1, row2col2]);

	return results;

}

console.log(matrixMultiply([[2,4],[3,4]],[[5,2],[3,1]]));
*/







