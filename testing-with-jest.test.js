describe("the sorter function",()=>{
    it("takes in an array and returns it sorted",()=>{
        //Arrange
       var numArray = [2,78,-45,99,23,51]
       var numSorted = [-45,2,23,51,78,99]
       //act                    //assert
        expect(sorter(numArray)).toEqual(numSorted)
    })
})

const sorter = (array) => {
    return array.sort((a,b)=> a-b)
}


// what kind of input and out put do we expect?

describe('string reversal',()=>{
    it('takes string splits it into an array and returns it reveresed in astirng',()=>{
        var stringForward = "trey"
        var stringReversed = "yert"
        expect(stringRevr(stringForward)).toEqual(stringReversed)
    })
})

// const stringRevr = (string) => {
//     let stringSplit = string.split("")
//     console.log("this should be the string split", stringSplit);
//     let splitReversed = stringSplit.reverse()
//     console.log("this should be backwards", splitReversed);
//     let reverseJoin = splitReversed.join("")
//     console.log("this should be joined", reverseJoin );
//     return reverseJoin
// }

const stringRevr = (string) => {
    return string.split("").reverse().join("")
}