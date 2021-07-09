// JavaScript Functions 7/9/2021

// Little machines that run when we decide and how often we decide
// Functions should be relatively neutral

// Encapsulation - one of the four pillars of OOP, the function logic is entirely contained in the function and doesn't rely on any external information other than the given input

// Refactor - adding on to your code or improving your code



// Function expressions - arrow function syntax

// Anantomy of a function:
// 1) Variable declaration
// 2) Name the function - writtenInCamelCase, communicate intent
// 3) Single equal sign
// 4) Parentheses to indicate action
// 5) Arrow syntax to describe the function
// 6) {} for the executable code / code block
// 7) Must have a return
// 8) Invoke or call the function

// const makeCoffee = () => {
//   return "Coffee is made!"
// }
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())


// Adding an Input
// - Parameter - placeholder, variable that is specific to the function
// - Argument - passing actual data that JavaScript recognizes into the function invocation

// const makeCoffee = (coffeeType) => {
//   return `${coffeeType} is made!`
// }
// console.log(makeCoffee())
// --> undefined is made!
// console.log(makeCoffee("Latte"))
// --> Latte is made!
// console.log(makeCoffee("Mocha"))
// --> Mocha is made!
// console.log(makeCoffee("Capuccino"))
// --> Capuccino is made!
// var espresso = "Espresso"
// console.log(makeCoffee(espresso))


// Pseudocoding
// Pass a coffee type and size of coffee into a function and return the price
// small - $3
// medium - $4
// large - $5
// Size will determine the price
// Evaluation about the size and return the price
// Conditional statement to look for a particular size
// Consider edge cases - what do do with different casing?

const makeCoffee = (coffeeType, coffeeSize) => {
  if(coffeeSize.toLowerCase() === "small"){
    return `${coffeeType} is $3.00`
  } else if(coffeeSize.toLowerCase() === "medium"){
    return `${coffeeType} is $4.00`
  } else if(coffeeSize.toLowerCase() === "large"){
    return `${coffeeType} is $5.00`
  } else {
    return "Please input valid data."
  }
}
console.log(makeCoffee("Latte", "small"))
console.log(makeCoffee("Latte", "medium"))
console.log(makeCoffee("Black coffee", "large"))
console.log(makeCoffee("Mocha", "small"))
console.log(makeCoffee("Mocha", "Small"))
console.log(makeCoffee("Mocha", "SMALL"))

// String interpolation / template literals - `${write jsavascript code} in string`
