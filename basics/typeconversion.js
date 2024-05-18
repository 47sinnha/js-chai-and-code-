let score = "33"
console.log(typeof(score));
let ValueIn = Number(score)
console.log(typeof(ValueIn));

let score1="33abc"
console.log(typeof(score1));
let ValueIns= Number(score1)
console.log(ValueIns);  /*This steps will provide a result called NAN which means not a number because 33 is number but 33abc is not a number */
console.log(typeof(ValueIns));

let score2 ="Aditya"
console.log(typeof(score2))
let ValueInss = Number(score2)
console.log(ValueInss);
console.log(typeof(ValueInss));


let score3=true
console.log(typeof(score3));
let ValueInsss = Number(score3)
console.log(ValueInsss);
console.log(typeof(ValueInsss));

let score4 = undefined
console.log(typeof(score4));
let Valueness = Number(score4)
console.log(Valueness);
console.log(typeof(Valueness));


/*
"33" ==> 33
"33abc" ==> NAN (NOT A NUMBER)
typeofNan is number
true=1
false=0
*/

let loggedin = 1
let booleanloggedin = Boolean(loggedin)
console.log(booleanloggedin);

let loggedin1 =""
let booleanloggedin1= Boolean(loggedin1)
console.log(booleanloggedin1);

let loggedin2 = "Aditya"
let booleanloggedin2= Boolean(loggedin2)
console.log(booleanloggedin2);

/*
1=>true
0=>false
""=>false
"hitesh"=>true
*/
