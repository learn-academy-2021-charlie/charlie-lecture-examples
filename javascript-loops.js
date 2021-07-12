// iteration: how many times a computation will repeat
// for loop: a tool for itterating over itterable objects
// let: variable declaration mainly used for local scope
// i (index): the location of a value in an itterable object
// value: the content of a variable at an index location
// scope: When and how variables can be accessed
// local scope: variable that is called within a code block
// global scope: variable called in the code base outside of a function



// for( let index = 0; index< 10; index +=1){
//     console.log(index);
// }
//____________________________________________________________


// for(let index = 2; index < 100; index +=2 ){
//     console.log(index);
// }
//____________________________________________________________

//                 i
//                 0         1         2      3       4      5       6      7      8      9
// var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

//  for (let i = 0; i < arrayRhyme.length; i++) { 
//      console.log(arrayRhyme[i]);
//     }
//____________________________________________________________

// for (let index = 10; index > 0; index--) {
//     console.log(index);
    
// }
//____________________________________________________________
//INFINTE LOOPS
// for( let i =1; i>0; i++){
//     console.log();
// }
//____________________________________________________________

// var myArrayTwo = [10, 20, 30]
// for (let i = 0; i < myArrayTwo.length; i++) {
//    console.log(myArrayTwo[i] * 13);
// }
//____________________________________________________________
// var randomNums = [3,4,5,6,7,8,355,20,38]
// for( let i=0; i < randomNums.length; i++){
//     if(randomNums[i] % 2 !== 0){
//         console.log(randomNums[i]);
//     }
// }
//____________________________________________________________
// for(let value=10; value>0; value--){
//     console.log(value);
// }

//____________________________________________________________
// loop without using console.log - instructions are still being run
// for(let i=0; i<3; i++) {
//     i + 3;
//   }
//____________________________________________________________
// let letters = "Sheldon the Booger"
// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// }
//____________________________________________________________
// Itterating through the array
// let falalalas = ["fa", "la", "la", "laaaaa"]
// for (let i = 0; i < falalalas.length; i++) {
//     console.log(falalalas[i]);
// }
//____________________________________________________________
// let evenNums = [2,4,6,8,10]
// for(let i =0; i<evenNums.length; i++){
//     console.log(evenNums[i] / 50);
// }
//____________________________________________________________
// var names = ["Trey", "Todd", "Thomas", "Austin"]

// for(let i=0; i<names.length; i++){
//     console.log(names[i].toUpperCase());
// }
// console.log(names[0].toUpperCase());

// var numArrArray = [[1,2,3],[5,6,7],[9,10,11]]

// for (let i = 0; i < numArrArray.length; i++) {
//     for (let j = 0; j < numArrArray[i].length; j++) {
//         console.log(numArrArray[i][j]);
//     }
// }
