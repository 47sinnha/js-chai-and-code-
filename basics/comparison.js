// All the below code are basic comparison which gives their result in boolean form 
// console.log(2==2);
// console.log(3>2);
// console.log(2<3);
// console.log(2!=3);

/* 
now lets understand the difference between the equal and ><=
*/

// a=null
// console.log(Number(a));

// console.log(null > 0); 
// console.log(null==0);
// console.log(null>=0);

/*
output:- 1) false
output:- 2) false
output:- 3) true

The reason is than an equality check == and comparisons ><>= , <= works differently. 
comparison convert null to a number treating it as a 0 
That's why 3> null is treated as 0 and true 
*/


// console.log(undefined >0);
// console.log(undefined <0);
// console.log(undefined ==0);

//output of all the above code for undefined is false

//Now lets see the difference between == and === 
// during == equality check data type of data is being ignored 
// whereas, in strictly check equality datatype is checked whether they are same are not 
// for example:- 
// console.log("2" == 2);
// console.log("2" === 2);

// output of the above code is 
// 1> true , datatype is ignored
// 2> false, datatype is not ignored



console.log("2">1);
console.log("02">1);

// But how to deal with above code problem, only solution to 
// above problem is we have to focusly write the datatype of two data



