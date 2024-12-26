//  Arrays in javascript

// const stringArr = ['eat', 'sleep', 'code', 'repeat'];
// console.log(stringArr);
// console.log(stringArr[2]);

// let singer = ['Atif Aslam', 'Arjit sing', 'UZAIR'];

// console.log(singer[1]);

// let farNumber = [1, 2, 3, 4];

// let mixedArr = ['ALi', ['otherArray'], 123, true];
// console.log(mixedArr[1][0]);

// let fruit = ['Ali', 'uzair', ' Ahmad', 'AI'];

// let moreFruit = ['passha', 'Arslan'];

// let c = fruit.concat(moreFruit);
// console.log(c);

// let obj = {
//   Name: 'Uzair',
//   class: '9th',
//   id: 'uzairahmad46155@gmail.com',
//   location: {
//     nCountry: 'Pakistan',
//     Address: 'Gilgit Road',
//   },
// };

// console.log(obj.id);

// let arr = ['Javascript', 'js', 'React'];

// console.log(arr.includes('Javascript.'));

// let cars = {
//   Type: 'Toyota',
//   Color: 'Green',
//   Model: '2025',
// };

// console.log(cars);

//  function is a block of code that performs a specific task .
// Function makes the code reuseable .You can declare it once and use it multiple times .
//  Function makes the program easier as each small task is divided into a function .
//  Function increases readability .
// DRY - Don't Repeat Yourself
//  function name (parameterIfAny) {...}

// Function Declarations
// function nameAll(Name) {
//   console.log(`this is a ${Name} Function`);
// }

// nameAll('uzair');

// Function Expressions

// let greeting = function (User) {
//   console.log(`Hello ${User}`);
// };

// greeting('uzair');

//  When we provide function as an (arguments) to other function that is Know as callback function

// function showCallbackFunc(Fn) {
//   const value = 'Uzair Ahmad';
//   Fn(value);
// }

// showCallbackFunc(function (value) {
//   console.log(value);
// });

// function ShowName(Name, cb) {
//   console.log(`Show Name : ${Name}`);
//   cb();
// }

// function cb() {
//   console.log('I am a callbackFunction');
// }

// ShowName('Uzair', cb);

//  Test task
// function showCallbackFunc(fn) {
//   let value = 10;
//   fn(value);
// }

// showCallbackFunc(function (value) {
//   console.log(value);
// });

//  Scope in Javascript refers to the current context of code , which determines the accessibility of variables to Javascript .
// There are two  types of scopes in Javascript .
//  Global Scope variables are those declared outside of a block
//  Local scope variables are those declared inside of a block.

// {
//   let a = 'Uzair '; // local scope variable  this cannot access outside of a block
//   console.log(a);
// }

// console.log(a);

//  JSON
//  Javascript  object notation

//  Date in Javascript

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

// console.log(date.toDateString(), 'this is date');
console.log(date.toLocaleString());

// console.log(year, 'this year');

// console.log(month, 'this is month');
// console.log(day, 'this is day');
// console.log(hour, 'this is hour');
// console.log(minute, 'this is minute');
// console.log(second, 'this is second');

// setTimeout(() => {
//   console.log('this is set time out method in javascript ');
// }, 3000);

let validId = setInterval(() => {
  console.log('this is a Interval ');
}, 1000);

setTimeout(() => {
  clearInterval(validId);
  console.log('this will stop the timer');
}, 3000);
