// JavaScript Conditionals 7/8/2021

// Conditionals, decision trees, if/else statements - having our program make a descion and perform logic

// Conditional - evaluations!

// Anatomy of a conditional statement
// - if - every conditional must start with an if
// - parentheses indicate an action
// - pass in an evaluation that will return true or false
// - {} executable block of code

// if(true){
//   console.log("true!")
// }

// If the evaluation is false, the code block is not executed (the program does nothing)
// if(false){
//   console.log("true!")
// }

// if(false){
//   console.log("true!")
// } else {
//   console.log("The Else.")
// }
// --> "The Else."

// if(true){
//   console.log("true!")
// } else {
//   console.log("The Else.")
// }
// --> "true!"


// if(5 < 9){
//   console.log("math is hard.")
// } else {
//   console.log("The Else.")
// }


// var myName = "Sara"
// if(myName === "Sarah"){
//   console.log("Hi Sarah")
// } else {
//   console.log("Hi everyone.")
// }

var num1 = 4
var num2 = 35
// if(num1 > num2){
//   console.log(`${num1} is greater than ${num2}`)
// } else {
//   console.log(`${num1} is less than ${num2}`)
// }

if(num1 > num2){
  console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2){
  console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2){
  console.log("The numbers are the same")
} else {
  console.log("The Else.")
}
