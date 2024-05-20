// Very first method for intializing string 
const name = "Albert" 
// Second method to intialize string
const names = new String("Aditya")

// Concatination of string 
console.log(name +" "+ "and"+ " "+ names);
//Above is the old method to concate strings 
//New and most readable method to concate strings are
console.log(`Hello ${name} and ${names}`);
// By using both the method we can do concatnation but most effective way for concatnation is second one 
// second one is the most effective because during concatnation in curly bracket we can use inbuilt functions 
// of strings.....

// Some of the inbulit methods of strings are mentioned below with the help of example :- 
console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf("e"));
console.log(name.toUpperCase());


const complex = "Jordan80k"
//below inbuilt function or method will found a substring 
//start from 0 and end at index 3 
// doesn't allow negative index 
const newstring = complex.substring(0,4)
console.log(newstring);

// Slice allow -ve indexing                                           
const neweststring = complex.slice(-6,-5)
console.log(neweststring);


// search different inbuilt function and methods of string 
