// JavaScript Higher Order Functions 7/13/2021

// Built in methods - language add ons for popular actions
// toUpperCase, toLowerCase, floor, sort, concat, length, split, join, slice, reverse, typeof, pop, push, shift, unshift, indexOf, lastIndexOf

// syntatical suger for a chunk of code functionality
// designed to act on particular data types
// Uncaught TypeError: true.toUpperCase is not a function - a very important error message
  // - Either the method is being called on the wrong data type or what it is being called on is undefined


// Functions - factory with a set of instructions
// To pass in information from the outside - parameter, argument
// Encapsulation - logic is contained

// Iteration - piece of code that runs over and over until a condition is met
// Do something to every item, or make a decision about every item
// Arrays, strings, objects

// Higher order functions - category of built in methods, iteraters act on arrays, must be passed a function as an argument

// The list for today:
// .forEach()
// .map()
// .filter()

// var myArray = [3, 4, 5, 6]
// myArray.forEach(value => {
//   console.log(value)
// })
// For each is designed to act on an array
// We don't need to specify where it starts or stops, it will always run the length of the array
// Can can take the parameter of value

// Can access the value and the index
// var myArray = [3, 4, 5, 6]
// myArray.forEach((value, index) => {
//   console.log("value:", value)
//   console.log("index:", index)
// })

// The parameters can be called anything, but they should communicate intent
//var myArray = [3, 4, 5, 6]
// myArray.forEach((banana, apple, orange) => {
//   console.log("value:", banana)
//   console.log("index:", apple)
//   console.log("array:", orange)
// })

// Using value, index, and array
// var myArray = [3, 4, 5, 6]
// myArray.forEach((value, index, array) => {
//   console.log("value:", value)
//   console.log("index:", index)
//   console.log("array:", array)
// })

// Map - acts on arrays, returns an array of the same length
//
// var myArray = [3, 4, 5, 6].map(value => {
//   return value * 2
// })
// console.log(myArray)
// Any time there undefined is returned from a function, check your return
// --> [ undefined, undefined, undefined, undefined ]
// --> [ 6, 8, 10, 12 ]


// Filter - higher order function that acts on arrays, returns an array, takes value, index, and array as parameters
// Filter makes a decision about each item in the array, returns a subset

// var myArray = [3, 4, 5, 6].filter(value => {
//   return value % 2 !== 0
// })
// console.log(myArray)
// --> [ 3, 5 ]


// Create a function that takes in an array of numbers and returns all the numbers cubed.
var numbersArray = [4, 5, 6, 7]

// Create a function called cuber
// Parameter - array
// Iterate
// Return an array the same length
// .map
// Cube each number ** 3

const cuber = (array) => {
  return array.map(value => {
    return value ** 3
  })
}
// console.log(cuber(numbersArray))
// --> [ 64, 125, 216, 343 ]

// Create a function that takes in a string and returns a string with every other letter capitalized.
var testString = "albatross" // --> "aLbAtRoSs"

// create function called wonky
// parameter - string
// split the string
// ["a", "l", "b", "a", "t", "r", "o", "s", "s"]
// letters at odd index should be toUpperCase
// return join the array

const wonky = (string) => {
  let newArray = string.split("")
  let wonkyArray = newArray.map((value, index) => {
    if(index % 2 === 0){
      return value
    } else {
      return value.toUpperCase()
    }
  })
  return wonkyArray.join("")
}
// console.log(wonky(testString))

// Create a function that takes in an array of mixed data types and returns an array with only numbers.
var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]

// create a function called numbersOnly
// parameter - array
// filter will allow us to make a decision about each item
// data type - typeof "number"

const numbersOnly = (array) => {
  return array.filter(value => {
    return typeof value === "number"
  })
}
console.log(numbersOnly(mixedDataArray))
