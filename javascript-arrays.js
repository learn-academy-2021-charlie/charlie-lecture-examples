// KEEP TRACK OF YOUR DATA TYPES


var car1 = "Mclaren";
var car2 = "Porsche";
var car3 = "Toyota";
var car4 = "Ford";

var carsArray = ["Mclaren", "Porsche", "Toyota", "Ford"]
// Arrays are camelCase in name and use "[]"
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
console.log(carsArray);
//_____________________________________

//USING VARIABLES AS ARRAY DATA
var carsArray = [car1, car2, car3, car4, 'Chevy']
console.log(carsArray);

// _____________________________________
// INDEX

// [i] is like an address for an array
// so we can imagine an array looks like this

                // i
                // 0         1         2      3       4      5       6      7      8      9
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]
// _____________________________________
// ACCESSING ELEMENTS
console.log(arrayRhyme[0]);
console.log(arrayRhyme[1]);
console.log(arrayRhyme[2]);
console.log(arrayRhyme[3]);
console.log(arrayRhyme[4]);
console.log(arrayRhyme[5]);
console.log(arrayRhyme[6]);
// _____________________________________
//ACCESSING ELEMENTS via VARIABLES
var index = 0
console.log(typeof index);
console.log(arrayRhyme[index]);
index++
console.log(arrayRhyme[index]);
index--
console.log(arrayRhyme[index]);
// _____________________________________
// Changing Elements 

var seasonArray = ["spring", "summer", "fall", "winter"]
console.log(seasonArray);

seasonArray[0] = "pre-summer"
seasonArray[2] = "spooky summer"
seasonArray[3] = "Hell Frozen Over"
console.log(seasonArray);
seasonArray = ["sunshine","sunshine","fog","sunshine"]
console.log(seasonArray);

// _____________________________________

var superHeroArray = ["Superman", "Spiderman", "Deadman", "Moon Knight", "Iron Man", "Cardboard Pete", "Deadpool", "Silver Surfer", "Croc Loki", "Raven", "Starfire", "Cable"]
console.log(superHeroArray.length);
console.log(superHeroArray[superHeroArray.length - 1]);

// _____________________________________

// Built in Methods
// 2 things to remeber: Built in methods exist; When to use them
// 2 flavors:  Mutator/ setter    vs    Accessor / getter

// MUTATOR -- .push() <----- Argument
var myColorsArray = ["Burgandy","Magenta","Mauve"]
console.log(myColorsArray);
myColorsArray.push("Periwinkle") 
console.log(myColorsArray);

var colorsArrayArray = ["red", "blue", "green"]

colorsArrayArray.push(myColorsArray)

console.log(colorsArrayArray[3][3]);
// _____________________________________
// MUTATOR .pop()
// removes an element from the end of the array
myColorsArray.pop()
console.log(myColorsArray);
// _____________________________________
// MUTATOR  .shift()
// removes an element from the start of the array
    myColorsArray.shift()
    console.log(myColorsArray);

// _____________________________________
// MUTATOR  .unshift()
// adds an element to the start of the array
    myColorsArray.unshift("Color")
    console.log(myColorsArray);

// _____________________________________
// Mutator .reverse()
// reverse the order of the array
myColorsArray.reverse();
console.log(myColorsArray);

// _____________________________________
// ACCESSOR / GETTER METHODS
// ACCESSOR .indexof()\
// finds the index of a specified element

 console.log(myColorsArray.indexOf("Magenta"));

// _____________________________________
// ACCESSOR .join()
// takes an array and turns it into a string
 var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]
 console.log(arrayRhyme.join(" "));
var numsArray = [1,2,3,4,5,6]
console.log(numsArray.join(" "));

// _____________________________________
// ACCESSOR .split()
// Takes a string and breaks it into an array
    var myName = "austin"

    console.log(myName.split(" "));
// _____________________________________
// ACCESSOR .concat()
    var letters1 = ["m", "o", "n"]
    var letters2 = ["d", "a", "y"]
    var letters3 = ["ya", "see"]
    console.log(letters1.concat(letters2).concat(letters3));

// _____________________________________
// Array Destructuring 
// Destructuring allows you to take an array and unpack each value into individual variables in a singe assignment.
var [month, day , time] = ["July", "Thursday", "2:59pm"] 
console.log(month);
console.log(time);

console.log(typeof day);
