//  Template strings, also known as template literals ,
//  are a feature in javascript that allows you  to create strings  with embedded expressions.
//  They are denoted by backticks `` instead of single or double quotes. Template strings provide a more
// flexible  and concise  way to construct string, especially when they involve variables or expressions

// let name = 'Uzair';
// let lastName = 'Ahmad';

// console.log(`My name is ${name} and last name is ${lastName}`);

// let strings = `The quick brown fox jumped over the lazy dog`;
// console.log(strings);

// Enhanced object literals , introduced in ECMAScript 6 (ES6),
// are a set of enhancements to the syntax for defining objects in Javascript. These enhancements make it more convenient and concise to define object properties
//  and methods

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = { a, b, c };

// console.log(obj);

// const lib = {
//   sum: (a, b) => {
//     return a + b;
//   },
//   multi: (a, b) => {
//     return a * b;
//   },
// };

// console.log(lib.sum(5, 5));
// console.log(lib.multi(5, 5));

// const getPersionES6 = (name, age, height) => {
//   return {
//     name,
//     age,
//     height,
//   };
// };

// console.log(getPersionES6('Uzair', 16, 100));

//  Default function parameter , introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. WHEN A  Function is called , and  an argument is not provided for a parameter , the default value will be used instead . This feature makes it easier to handle cases where arguments might be missing or undefined.

const multiply = (a, b = 10) => {
  return a * b;
};

console.log(multiply(2));

// The spread operator is a new addition to the set of operators in an iterable (e.g an array ) and expands  it into individual elements.
// The spread operator is commonly used to make shallow copies of JS  objects.
// Using this operator makes the code concise and enhances its readability

// const numb = (a, b, c, d) => {
//   return a, b, c, d;
// };

// let arr = ['green', 'yellow,"blue"', 'Orange'];

// numb(...arr);

// console.log(arr);

// let stringOne = ['green', 'yellow', 'orange'];

// let stringTwo = ['red', 'blue', 'Uzair'];

// let concat = [...stringOne, ...stringTwo];

// console.log(concat);

//  The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array,providing a way to represent variables function in javascript

// const unlimited = (Name, lastName, ...songs) => {
//   console.log('  Name', Name);
//   console.log('lastName', lastName);
//   console.log('Song', songs);
// };

unlimited('Uzair', 'Ahmad', 'atif aslam', 'tara bina', 'ma or tum ');

// Destructuring allows us to "unpack" values from data-structure (Arrays, object) into separate distinct variables.
