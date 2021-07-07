// JavaScript Introduction 7/7/2021

// commenting out code - command+/

// JavaScript is a dyanmic, intepreted, scripting language
// Dynamic - can change the data type being held by a variable
// Intepreted - code is read line by line
// Scripting - perform logic and manipulate data


// Running a JavaScript file
// - file name: no spaces, extension .js, starts with a lowercase letter
// - command to process the information in this file >> $ node filename.js
  // - NOTE - the $ is indicates a terminal command, don't use the $
// need stuff to run!


// Data Types - categories of information that our language understands

// Primitive data - 6, information that cannot be broken down any further
// 1) number
// 2) string
// 3) Boolean
// 4) null
// 5) undefined
// 6) symbol

// NUMBERS

// - Integers - whole numbers
42
// console.log(42)
// - Floats - partial numbers, decimals, or fractions
// console.log(3.14)

// - addition +
// - subtraction -
// - multiplication *
// - division /
// - exponents **
// console.log(3**3)
// - modulo % - return the remainder of a division problem
// console.log(4 % 3)


// STRING - characters stroed inside quotation marks
// Properties - length, each character has a given location
// indexing - where does a particular character live? ****** (big takeaway)

"hello"
// console.log("hello")
// console.log("hello".length)
// logged --> 5
// console.log("hello")
// index 0 - "h"
// index 1 - "e"
// index 2 - "l"
// index 3 - "l"
// index 4 - "o"
// console.log("hello"[0])
// console.log("hello"[4])
// console.log("hello"[5])

// BOOLEAN - true/false
// console.log(true)
// console.log(6 < 3)

// Relational operators - < > <= >=

// Equality operators
  // Strict equality
  // console.log(8 === 4+4)
  // console.log(8 === "8")
  // Loose equality
  // type coersion - bad practice
  // console.log(8 == "8")
  // "8" === "8" (behind the scenes)
  // console.log(6 == "purple") // --> false
  // console.log(true == "true") --> false

// Logical operators
// Logial AND - &&, everything must be true for the statement to be true

// console.log(6 < 3 && 8 === 4+4)
// console.log(6 > 3 && 8 === 4+4)

// Logical OR - ||, at least one thing must be true for the statement to be true
// console.log(6 < 3 || 8 === 4+4)
// console.log(6 > 3 || 8 === 4+4)

// NULL - equal to nothing else
// console.log(null)

// UNDEFINED - value of a variable that has been declared but not defined

// SYMBOL - unique identifier for key:value pairs


// Variables

// Declare - hey JavaScript, I intend to make a variable
// var - global scope
// let - local scope
// const - cannot be redefined

// Give it a name - camelCase, helloCharlieClassIAmWritingInCamelCase

// Assign it a value with a single equal sign, data type

// var myName
// console.log(myName)
// --> undefined

// Dynamic
var myName = "sarah"
// console.log(myName)
myName = "George"
// console.log(myName)
myName = 11
// console.log(myName)

// Using const (variable declaration) to prevent a variable from being reassigned
// const myNum = 9
// console.log(myNum)
// myNum = 10
// console.log(myNum)
// --> error
