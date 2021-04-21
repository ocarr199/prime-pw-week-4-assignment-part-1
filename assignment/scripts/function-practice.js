console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

hello();
// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log(helloName("Owen"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(10, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  return numOne * numTwo * numThree
}
console.log(multiplyThree(2, 5, 10));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
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
let lastArray = [1, 2, 3, 4, 10]
let anArray = []

function getLast(array) {
  for (i = 0; i, array.length; i++) {
    if (i == array.length - 1) {
      return array[i];
    };
  };
}
  console.log(getLast(lastArray));
  console.log(getLast(anArray));
  // 7. Function to find a value in an array. Return true if the
  //    value is found and false otherwise. Use a loop;
  //    DO NOT use Array.includes, Array.indexOf, or Array.find


  let myArray = [1, 2, 3, 4, 5, 6]

  function find(value, array) {
    let x = false;
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        x = true;
      };
    };
    return x;
  };

  console.log(find(1, myArray));
  console.log(find(4, myArray));
  console.log(find(8, myArray));
  // ----------------------
  // Stretch Goals
  // ----------------------
  // 8. Function to check if a letter is the first letter in a
  //    string. Return true if it is, and false otherwise
  function isFirstLetter(letter, string) {
if(letter == string[0]){
  return true
}else{
  return false
}
  }
  console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
  console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

  // 9. Function to return the sum of all numbers in an array
  let numbers = [1,2,3,4,5]
  function sumAll(array) {
    let sum = 0
    // TODO: loop to add items
    for(i=0;i<array.length;i++){
      sum = sum + array[i]
    }

    return sum;
  }
console.log(sumAll(numbers));

  // 10. Function to return a new array of all positive (greater than zero)
  //     numbers contained in an input array. If there are no positive numbers
  //     return an empty array. Note: The input array should not change.
let inputArray = [-20,-10,0,10,20]
let inputNegatives = [-5,-4,-3,-2,-1]

function printPos(array){
  let outputArr = []
  for(i=0;i<array.length;i++){
    if(array[i]> 0){
    outputArr.push(array[i])
}
}
console.log(outputArr)
}
printPos(inputArray)
printPos(inputNegatives)

  // 11. Pick a problem from Edabit(https://edabit.com/) or
  //     CodeWars(https://www.codewars.com/). Then describe it
  //     here in a comment, write the function, and test it!
