/*
differences between es5 functions and arrow functions, aside from syntax, are inability to access arguments
object and how this is defined

in arrow functions the keyword this takes on the value of this in the parent context, whereas es5 functions
define this as the object that the function is a property of
*/

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        //this refers to multiplier object
        //this is the arrow function refers to parent context's value of this
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());