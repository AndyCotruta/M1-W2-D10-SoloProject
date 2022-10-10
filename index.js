/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("EXERCISE A");
let test = "Test";
console.log("The variable is " + test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

console.log("\nEXERCISE B");
let sum = 10 + 20;
console.log("The sum is " + sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("\nEXERCISE C");
let random = Math.floor(Math.random() * 21);
console.log("The random number is " + random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("\nEXERCISE D");
let me = {
  name: "Andy",
  surname: "Cotruta",
  age: 28,
};
console.log("This is me: ", me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

console.log("\nEXERCISE E");
delete me.age;
console.log("This is the new me: ", me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

console.log("\nEXERCISE F");
me.skills = ["HTML", "JavaScript", "CSS"];
console.log("This is me+programming: ", me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("\nEXERCISE G");
delete me.skills.pop();
console.log("This is me+incomplete programming: ", me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("\nEXERCISE 1");
function dice(a) {
  return Math.floor(Math.random() * 7);
}
let randomInteger = dice(3);
console.log("Random integer: ", randomInteger);

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
console.log("\nEXERCISE 2");
function whoIsBigger(a, b) {
  if (a > b) return a;
  if (b > a) return b;
}
let biggerNumber = whoIsBigger(5, 9);
console.log("The bigger Number is: ", biggerNumber);

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
console.log("\nEXERCISE 3");
let String = "I love coding";
function splitMe(a) {
  return a.split(" ");
}
let arr = splitMe(String);
console.log("This is the array from our string: ", arr);

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
console.log("\nEXERCISE 4");
let ourString = "HAMBURGER";
function deleteOne(a, b) {
  if (a === true) {
    return b.slice(1);
  } else if (a === false) {
    return b.slice(-1);
  } else {
    ("Please input a boolean and a string");
  }
}

let example = deleteOne(true, ourString);
console.log("This is our String now: ", example);

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
console.log("\nEXERCISE 5");
let withNumber = "I have 4 dogs";
function onlyLetters(a) {
  return a.replace(/[0-9]/g, "");
}
let onlyWithLetters = onlyLetters(withNumber);
console.log("This is without a number: ", onlyWithLetters);

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
console.log("\nEXERCISE 6");
function isThisAnEmail(inputText) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText)) {
    return true;
  }
  return "You have entered an invalid email address!";
}

let email = isThisAnEmail("alabala");
console.log(email);

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
console.log("\nEXERCISE 7");
const currentDay = new Date();
function whatDayIsIt() {
  return currentDay.getDay() + 1;
}

let whatDay = whatDayIsIt();
console.log("This is the current day of the week: ", whatDay);

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
console.log("\nEXERCISE 8");

let values = [];
let summ = 0;
function rollTheDices(a) {
  for (let i = 0; i < a; i++) {
    return dice(a);
  }
}
let x = rollTheDices(3);
console.log(x);
// console.log("Values: ", values);
// console.log("Sum: ", summ);
// let ourObject = rollTheDices(3);
// console.log(ourObject);
