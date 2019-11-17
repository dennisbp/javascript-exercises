// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;

let a = 'test';
const b = true;
const c = 798;
a = 'test2';




// Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

const person = {
      firstName : "John",
      lastName  : "Doe",
      age       : 50,
      eyeColor  : "blue"
  };

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;


// Object properties
// var a = 'test';
// var b = true;
// var c = 789;

const a = 'test';
const b = true;
const c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

const okObj = { a, b, c};


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
// function isValidAge(age) {
//     return age
// }

const = isValidAge(age = 10);


// Symbol
// Create a symbol: "This is my first Symbol"
const sym = symbol("This is my First Symbol");


// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}



// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };

const multiplyES6 = (x, y) => x * y;



