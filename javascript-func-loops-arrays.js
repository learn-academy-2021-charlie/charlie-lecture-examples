// JavaScript Functions Loops and Arrays 7/13/2021



var myArrayOfNumbers = [2, 3, 4, 5, 6]

// Take every number in the array and multiply it by five.
// Reusable code that can take in any array of numbers and multiply each number by 5.
// Iteration - performing a process over and over again until a condition is met

// Tried to multiply the array by 5 and it didn't work:
// const mult5 = (array) => {
//   return array * 5
// }
// console.log(mult5(myArrayOfNumbers))
// --> NaN

// Logging i so that we can ensure our for loop is counting correctly
// const mult5 = (array) => {
//   for(let i=0; i<array.length; i++){
//     console.log(i)
//   }
// }
// console.log(mult5(myArrayOfNumbers))
// -->
// 0
// 1
// 2
// 3
// 4
// undefined

// Used the for loop's output of numbers to pull values from the array
// const mult5 = (array) => {
//   for(let i=0; i<array.length; i++){
//     console.log(array[i])
//   }
// }
// console.log(mult5(myArrayOfNumbers))
// -->
// 2
// 3
// 4
// 5
// 6
// undefined

// Multipled each value by 5
// const mult5 = (array) => {
//   for(let i=0; i<array.length; i++){
//     console.log(array[i] * 5)
//   }
// }
// console.log(mult5(myArrayOfNumbers))
// -->
// 10
// 15
// 20
// 25
// 30
// undefined

// Tried returning in the for loop and that didn't work:
// const mult5 = (array) => {
//   for(let i=0; i<array.length; i++){
//     return array[i] * 5
//   }
// }
// console.log(mult5(myArrayOfNumbers))
// --> 10

// Created an empty array to hold the values, but the values aren't in it yet...
// const mult5 = (array) => {
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     array[i] * 5
//   }
//   return newArray
// }
// console.log(mult5(myArrayOfNumbers))
// --> []

// Pushing each number into the empty array - WORKS!
const mult5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    newArray.push(array[i] * 5)
  }
  return newArray
}
console.log(mult5(myArrayOfNumbers))
console.log(mult5([7, 8, 9]))
console.log(mult5([7, 8, 9, 10, 11]))
