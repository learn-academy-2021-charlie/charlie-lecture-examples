// Office Hours Notes 7/29/2021

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// [1, 1]
// last item in the array + the value at the index before that last item

// const fibonacci = (num) => {
//   let fibArray = [1, 1]
//   let fibArray = [1, 1, 2] //after the first iteration
//   let fibArray = [1, 1, 2, 3] //after the second iteration
//   let fibArray = [1, 1, 2, 3, 5] //after the third iteration
//   for(let i=1; i<num-1; i++){
//     fibArray.push(fibArray[i] + fibArray[i - 1])
//           //fibArray[1] === 1   fibArray[1-1 ==> 0] === 1
//     // second iteration: i=2
//     fibArray.push(fibArray[i] + fibArray[i - 1])
//           //fibArray[2] === 2   fibArray[2-1 ==> 1] === 1
//     // third iteration: i=3
//     fibArray.push(fibArray[i] + fibArray[i - 1])
//           //fibArray[3] === 3   fibArray[3-1 ==> 2] === 2
//   }
// }



'racecar'

// create a function that determines a palendrome without using built in methods

const palendrome = (string) => {
  let reversedString = ""
  for(let i=string.length-1; i>=0; i--){
    reversedString = reversedString + string[i]
  }
  if(string === reversedString){
    return 'is palendrome'
  } else {
    return 'is not palendrome'
  }
}
console.log(palendrome('hello'))
console.log(palendrome('racecar'))
