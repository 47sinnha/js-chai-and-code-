const accountId = 144553 
let accountEmail = "adityakr.sinha2661@gmail.com"
var accountpassword = "12345"
accountcity = "jaipur"
/*
above is variable declared without using var let const keyword 
which is not good practice in itself. 
became global variable
changeable 
*/
let accountState; 

// accountId =2; 
accountEmail ="sinha2661@gmail.com "
accountpassword="5533"
accountcity="Delhi"


console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountcity, accountState])
/*
const let var are keyword used to define variable
const let var are keyword used to store value in variable
where each holds different meaning in themself 
when const is used then if change is maded then change is not applicable
with var and let we can make change in value further if we want but main difference is that 

Q. Why It's always preferable to use let instead of var ?
It's always preferable to use let instead of var because, if a variable is declared with 'var' inside a block (e.g inside an "if" statement or loop),
it's still accessible outside the block.. 
But, if a variable is declared with let inside a block, it's only accesible within that block.. 

Q. What is the default keyword in javascript for storing the value?

*/