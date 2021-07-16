class Dessert{
    constructor(c, t, f){
        this.isSweet = true
        this.color = c
        this.theme = t
        this.hasFruit = f
        this.isEaten = false
    }
    eatTheDessert(){
        if (this.isEaten == false) {
            this.isEaten = true
            return "You've eaten the dessert, Nom Nom"
        } else {
            return "It's already gone!"
        }
    }
}

var cremeBrulee = new Dessert("gold", "fancy", false)
// console.log("cremeBrulee", cremeBrulee);
// console.log("choclateCake", choclateCake);
// console.log(cremeBrulee.eatTheDessert());
// console.log("cremeBrulee", cremeBrulee);

// console.log(cremeBrulee.eatTheDessert());

class Cake extends Dessert{
    constructor(c,t,f, frost){
        super(c,t,f)
        this.frosting = frost
    }
    throwTheCakeAtSomebody(){
        if (this.isEaten == true) {
            return "What Cake?"
        } else {
            this.cakeIsSmooshed = null
            return "Splat!"
        }
    }
}

var choclateCake = new Cake("choclate", "birthdays", false, "vanilla")
console.log(choclateCake);
// console.log(choclateCake.eatTheDessert());
console.log(choclateCake.throwTheCakeAtSomebody());
console.log(choclateCake);

class CupCake extends Cake{
    constructor(c,t,f, frorst){
        super(c,t,f, frorst)
    }
}