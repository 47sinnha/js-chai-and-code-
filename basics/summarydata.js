// Types of DataTypes In JavaScript
// 1. Primitive DataType
    // number
    // String
    // boolean
    // BigINT
    // null
    // undefined
    // Symbol

// 2. Non Primitive
    // Array
    // objetcs
    // functions


// Examples of primitive
    const a = 10; 
    const b = "Aditya"
    const c = true
    const d = 989988923239823n
    const e = null
    let f = undefined 
    // or
    let f1; 
    const id = Symbol("123")
    const subid = Symbol("123")

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));
    console.log(typeof(f));
    console.log(typeof(f1));
    console.log(id);
    console.log(subid);
    
//Examples of non primitive
// Example of array 
// During instalization of array or object we must need to use 
// const or let 
// If we want to make change in the array further we should use 
// let otherwise we should use const by default 
const myarray = ["Aditya", "Sinha"]
console.log(myarray); 
// ExampleofObjects
let myobje= {
    name: "Aditya",
    age:22, 
}
// Exampleoffunction 
const myfunction = function (params) {
    console.log("Exte....");
}


console.log(typeof(myfunction));
console.log(typeof(myarray));
console.log(typeof(myobje));

// datatype of array, objects is known as function 
// whereas as datatype of function is known as function objects
// but when we print in javascript we get to know that its object(for array and objetcs)