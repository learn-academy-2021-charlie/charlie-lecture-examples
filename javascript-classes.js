// JavaScript Classes 7/15/2021

// Classes are blueprint for objects

// Anantomy of a class
// - define the class
// - name - casing convention called PascalCase
// - {} for the executable code
// - new - is a keyword in JavaScript that creates an instance of a class
// instance of a class is an object

// Defining a class the same way we defined the object yesterday
class DoingMath {
  constructor(){
    this.num1 = 5,
    this.num2 = 10,
    this.num3 = 15
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}

// Instance of a class:

console.log(new DoingMath)
// --> DoingMath { num1: 5, num2: 10, num3: 15 }
var math1 = new DoingMath()
console.log(math1)
// --> DoingMath { num1: 5, num2: 10, num3: 15 }


// Removing hard coded values from the class variables
class DoingMath {
  constructor(num1, num2, num3){
    this.num1 = num1,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}
var math1 = new DoingMath(5, 10, 15)
console.log(math1)
// --> DoingMath { num1: 5, num2: 10, num3: 15 }
var math2 = new DoingMath(5, 3, 4)
console.log(math2)
// --> DoingMath { num1: 5, num2: 3, num3: 4 }


// Mix and match with hardcoded values and dynamic values
class DoingMath {
  constructor(num2, num3){
    this.num1 = 5,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
}
var math1 = new DoingMath(10, 15)
console.log(math1)
// --> DoingMath { num1: 5, num2: 10, num3: 15 }
var math2 = new DoingMath(3, 4)
console.log(math2)
// --> DoingMath { num1: 5, num2: 3, num3: 4 }


// Adding another method to the class
class DoingMath {
  constructor(num2, num3){
    this.num1 = 5,
    this.num2 = num2,
    this.num3 = num3
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
  largestNum(){
    return Math.max(this.num1, this.num2, this.num3)
  }
}

var math1 = new DoingMath(10, 15)
console.log(math1)
var math2 = new DoingMath(3, 4)
console.log(math2)
console.log(math1.addUp())
console.log(math2.addUp())
console.log(math1.largestNum())
console.log(math2.largestNum())



// Big Take Aways!
// - classes are blueprints for objects
// - create an object from the class with the keyword new inorder to interact with the data
// - classes have data and behavior
// - data - we need a constructor, can take parameters
// - classes are in PascalCase - yes, casing and spacing always matters
