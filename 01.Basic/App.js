// variables declaration

let options; //  this will show  undefine
console.log(options);

// Test Tasks One

//  first task  for how you can create variables
var name = 'Uzair';
let WhatDoYouWantToBecome = 'programmer';
let gender = 'Male';
let twitterHandle = false;

console.log(name, WhatDoYouWantToBecome, gender, twitterHandle);

//  Test tASKS 2

//  operator in javascript declaration
let firstNumber = 10;
let secondNumber = 20;

console.log(firstNumber + secondNumber, 'pluses');
console.log(firstNumber - secondNumber, 'Subtracts');
console.log(firstNumber * secondNumber, 'Multiplies');
console.log(firstNumber ** secondNumber, 'power');
console.log(firstNumber / secondNumber, 'divided');
console.log(firstNumber % secondNumber, 'module');

// Test Tasks 3

//  for Boolean values

let isJsProgrammingLanguage = true;
let isJsHard = false;
let famNumber = 15;

console.log(famNumber + undefined);

// Test Tasks 4
//    campaign operator
var name = 10;
let second = 2;

console.log(name > second, 'greater than');
console.log(name < second, 'less than');
console.log(name >= second, 'greater than or equal');
console.log(name <= second, 'less than or equal');
console.log(name === second, 'strict equal to');
console.log(name == second, 'strict less than');
console.log(name !== second, 'strict non equal to');
console.log(name != second, 'non equal to');

//  Test Task 5
//   javascript  basic methods like split or join

let favName = 'Uzair';
let LastName = 'Ahmad';

console.log(favName + ' ' + LastName);

let fullName = ` My first Name is ${favName.toUpperCase()} and Last Name ${LastName.toUpperCase()}`;
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split('').join('-'));
console.log(fullName);
