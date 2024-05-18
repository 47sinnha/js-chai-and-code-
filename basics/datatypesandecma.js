"use strict" // By using the we are showing that we are using newer version of javascript

// alert(3+3) we are using node.js, not browser 
// if we run same thing without using node.js it will run in browser console as broswer provide an interface to run javascirpt, but in this case here we are directly using that interface therefore it will show an error 

console.log(3+3+1)
console.log("Aditya")

// Above code is reabable but if we see below code 
// console.log(3+3+1); console.log("Aditya") 
// but the content are printable but if we see in terms of reabality its unreabale 



/*
Data Types 
JavaScript is a dynamically typed language, which means that is automatically detects and assigns data types to variable at runtime.
You do not need to explicity declare the data type of a varibale when you create in javascript.
Javascript determines the types based on the value assigned to the variable.
Some of the Data Types In JavaScript :-
1. Number
2. BigInt
3. String 
4. Null  -- Standalone value
5. undefined
6. Boolean -- True/False
7. Symbol -- used to identifiy uniqueness 

Example of datatypes:- 
*/ 

let names = "Aditya"
let age = 18
let ageoptional = "19"
let appliedforvoting = true
let state; 

console.log(typeof names);
console.log(typeof age);
console.log(typeof ageoptional);
console.log(typeof appliedforvoting);
console.log(typeof state);
console.log(typeof null);

/*
Note:- type of null is declared as object which is a issues in javascript 
Note:- type of undefined is undefined
All the above is an example of automatic type detection
*/






