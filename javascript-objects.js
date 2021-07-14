// JavaScript Objects 7/14/2021

// Primitive data types - string, number, Boolean, undefined, null, symbol
// Array - collections of data, techincally objects
// Objects - Data types that hold collections of things (non-primitive)

// Objects - collections of key: values pairs
{key: "value"}
{symbol: "some data type JS recognizes"}

// Can have as many key values pairs as we want
var myObject = {key1: "value1", key2: "value2", key3: "value3"}
console.log(myObject)
console.log({key1: "value1", key2: "value2", key3: "value3"})

// Dropped down for readabilty
var myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4"
}
// To access the value, reference the variable and the key
console.log(myObject.key1, myObject.key2)


// Objects can have nested objects
// JSON - JavaScript Object Notation, the data structure of the internet

var breakfast = {
  item1: "eggs",
  item2: "toast",
  item3: "ceral",
  item4: "bacon",
  item5: {
    fruit1: "banana",
    fruit2: "strawberry",
    fruit3: "blueberry"
  }
}
console.log(breakfast.item5.fruit3, breakfast.item5.fruit2)

console.log(fruit1)
// --> undefined

// Destructuring - creating a shortcut through the path of a nested object
var { fruit1 } = breakfast.item5

// Destructuring mulitple items at the same time
var { fruit1, fruit2, fruit3 } = breakfast.item5
console.log(fruit1, fruit2, fruit3)


// Objects - data (data types), functions (behavior)
// Function that belongs to an object - method

var mathObject = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
console.log(mathObject.addUp())


// Array of Objects

var pets = [
  {name: "Sheldon", type: "dog", age: 4},
  {name: "Freedom", type: "cat", age: 13},
  {name: "Arthur", type: "dog", age: 17},
  {name: "Hunter", type: "teenager", age: 16},
  {name: "Queen", type: "horse", age: 15}
]
console.log(pets.length)
// --> 5
console.log(pets[2])
// --> { name: 'Arthur', type: 'dog', age: 17 }
console.log(pets.name)
// --> undefined
console.log(pets[2].name)
// --> Arthur

// Create a function called petNames
// parameter of array (of objects)
// iterate and extract one piece of information from each object
// output - array of just the pet names
// --> ["Sheldon", "Freedom", "Arthur", "Hunter", "Queen"]

const petNames = (array) => {
  return array.map(value => {
    console.log(value)
    return `${value.name} is a ${value.type} and is ${value.age} years old.`
  })
}
console.log(petNames(pets))

// Return only the objects that are dogs
// Filter!! make a decision about every item in an array
const dogsOnly = (array) => {
  return array.filter(value => {
    return value.type === "dog"
  })
}
console.log(dogsOnly(pets))


// JSON from NASA
let nasa = {
  "sol": 1000,
  "camera": {
    "id": 20,
    "name": "FHAZ",
    "rover_id": 5,
    "full_name": "Front Hazard Avoidance Camera"
  },
  "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
  "earth_date": "2015-05-30",
  "id": 102693,
  "rover": {
    "id": 5,
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active"
  }
}
// Dot notation:
// console.log(nasa.id)
// Bracket notation:
// console.log(nasa["id"])
