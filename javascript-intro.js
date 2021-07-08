// JavaScript Introduction 7/7/2021

// Commenting out code - command + /

// JavaScript is a dyanmic, intepreted, scripting language
// Dynamic - can change the data type being held by a variable
// Intepreted - code is read line by line
// Scripting - perform logic and manipulate data


// Running a JavaScript file:
// - File name: no spaces, extension .js, starts with a lowercase letter
// - Command to process the information in this file >> $ node filename.js
  // - NOTE - the $ is indicates a terminal command, don't use the $ in the command
// Need stuff to run!
  // - console.log() and data types


// Data Types - categories of information that our language understands

Primitive data - information that cannot be broken down any further
// 1) number
// 2) string
// 3) Boolean
// 4) null
// 5) undefined
// 6) symbol

// NUMBERS - can perform mathematical calculations

// - Integers - whole numbers
42
console.log(42)
// - Floats - partial numbers, decimals, or fractions
console.log(3.14)

// - addition +
// - subtraction -
// - multiplication *
// - division /
// - exponents **
console.log(3**3) // --> 27
// - modulo % - return the remainder of a division problem
console.log(4 % 3) // --> 1


// STRING - characters stroed inside quotation marks
// Properties - length, each character has a given location
// *****Indexing - where does a particular character live?****** (big takeaway concept)

"hello"
console.log("hello") // --> "hello"
console.log("hello".length) // --> 5
// index 0 - "h"
// index 1 - "e"
// index 2 - "l"
// index 3 - "l"
// index 4 - "o"
console.log("hello"[0]) // --> "h"
console.log("hello"[4]) // --> "o"
console.log("hello"[5]) // --> undefined

// BOOLEAN - true/false
console.log(true)
console.log(6 < 3)

// Relational operators - < > <= >=

// Equality operators
  // Strict equality
  console.log(8 === 4+4)
  console.log(8 === "8")
  // Loose equality
  // Type coersion - bad practice
  console.log(8 == "8")
  // "8" === "8" (behind the scenes)
  console.log(6 == "purple") // --> false
  console.log(true == "true") // --> false

// Logical operators
// Logial AND - &&, everything must be true for the statement to be true

console.log(6 < 3 && 8 === 4+4) // --> false
console.log(6 > 3 && 8 === 4+4) // --> true

// Logical OR - ||, at least one thing must be true for the statement to be true
console.log(6 < 3 || 8 === 4+4) // --> true
console.log(6 > 3 || 8 === 4+4) // --> true

// NULL - equal to nothing else
console.log(null)

// UNDEFINED - value of a variable that has been declared but not defined

// SYMBOL - unique identifier for key:value pairs


// Variables

// Declare - hey JavaScript, I intend to make a variable
// var - global scope
// let - local scope
// const - cannot be redefined

// Give it a name - camelCase, helloCharlieClassIAmWritingInCamelCase

// Assign it a value with a single equal sign, data type

var myName
console.log(myName) // --> undefined

// Dynamic - can change the data type being held by a variable
var myName = "sarah"
console.log(myName) // --> "sarah"
myName = "George"
console.log(myName) // --> "George"
myName = 11
console.log(myName) // --> 11

// Using const (variable declaration) to prevent a variable from being reassigned
// const myNum = 9
// console.log(myNum) // --> 9
// myNum = 10
// console.log(myNum) // --> big fat error


// Review
// - Making a JavaScript file - .js
// - $ node filename.js
// - JavaScript casing convention - camelCase
// - number, Boolean, string, null, undefined, symbol
// - Variable - something that can hold information, any data type
// - Built in method - common actions in code that get added to the language, ex) length, toUpperCase, slice, indexOf, charAt, includes, toLowerCase
// - Logical operators && ||, Equality == ===, Relational < > <= >=, Negation !== (bang operator)
// - let, var, const - variable that cannot be redefined
// - Index - zero based, position of an item "hello"[2]


// Write the code that will log whether theQuestion.length is greater than theAnswer.

var theQuestion = "life, the universe, and everything"
var theAnswer = 42

console.log(theQuestion.length > theAnswer)
// 34 > 42
console.log(theQuestion.length < theAnswer)
// 34 < 42
