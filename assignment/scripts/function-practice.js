console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

console.log("1. Function to return 'Hello World!'");

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello("Hello World!"));

hello();


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
console.log("2. Function to return an personalized hello, for example 'Hello, Jo!'");

function helloName(name) {
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log(helloName("Owen"));

// 3. Function to add two numbers together & return the result
console.log("3. Function to add two numbers together & return the result");

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(10, 5));

// 4. Function to multiply three numbers & return the result
console.log("4. Function to multiply three numbers & return the result");

function multiplyThree(numOne, numTwo, numThree) {
  return numOne * numTwo * numThree;
}
console.log(multiplyThree(2, 5, 10));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise

console.log("5. Function that will return true if a number is positive,  or greater than zero, and false otherwise");


function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

console.log("6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.");
let lastArray = [1, 2, 3, 4, 10]
let anArray = []



function getLast(array) {
  for (i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      return array[i]+;
    };
  };
};

console.log(getLast(lastArray));
console.log(getLast(anArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

console.log("7.Function to find a value in an array");

let myArray = [1, 2, 3, 4, 5, 6]

function find(value, array) {

  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    };
  };
  return false;
};

console.log("is in the array so should say true", find(1, myArray));
console.log("is in the array so should say true", find(4, myArray));
console.log("not in the array should say false", find(8, myArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log('8. Function to check if a letter is the first letter in a string.');
function isFirstLetter(letter, string) {
  if (letter == string[0]) {
    return true
  }
  return false
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
console.log("9. Function to return the sum of all numbers in an array");
let numbers = [1, 2, 3, 4, 5]
console.log(numbers);
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }

  return sum;
}
console.log(sumAll(numbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('10. Function to return a new array of all positive');
let inputArray = [-20, -10, 0, 10, 20]
let inputNegatives = [-5, -4, -3, -2, -1]

function printPos(array) {
  let outputArr = []
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      outputArr.push(array[i])
    }
  }
  console.log(outputArr)
}
console.log("Original Array",inputArray);
printPos(inputArray)
console.log("Original Array",inputNegatives);
printPos(inputNegatives)

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//I chose the opposite house challenge on edabit
// The instructions are (Mubashir was walking through a straight street with exactly
// n identical houses on both sides. House numbers in the street look like this:
//
// 1 |   | 6
//
// 3 |   | 4
//
// 5 |   | 2
// He noticed that Even numbered houses increases on the right
// while Odd numbered houses decreases on the left.
// Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.
// Examples
// oppositeHouse(house, n) -> oppositeHouse
// oppositeHouse(1, 3) ➞ 6
// oppositeHouse(2, 3) ➞ 5
// oppositeHouse(3, 5) ➞ 8)

// looking at the provided examples for this helped a lot
// I wrote down  1 & 3 = 6, 2 & 3 = 5, 3 & 5 = 8 then tried to figure out what arithemetic
 //would make that true. starting with the first one
//  I did (3 * 2) - 1 + 1 = 6, and then applied  "(n*2) - house + 1" to the rest of the examples and
//  it still worked

// solution
function oppositeHouse(house, n){
  return (n*2) - house + 1
}
console.log(oppositeHouse(1,3));
console.log(oppositeHouse(2,3));
console.log(oppositeHouse(3,5));
