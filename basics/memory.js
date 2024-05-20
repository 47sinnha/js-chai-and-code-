// There are two types of memory allocation in javascript
// first is stack 
// Second is Heap 
// Stack is used for primitive data type 
// whereas heap is used for non-primitive data type 

// let's take an example:- 
let channelnames = "hitesh" 
let anothername = channelnames
anothername = "Aditya"  

// console.log(channelnames);
// console.log(anothername);

/*
In stack space a memory space is created in the name of 
channelnames which holds the value "hitesh" now a new variable
is created whose name is "anothername" which holds the main variable 
"channelname", now we changed the value of variable "anothername" as aditya 
therefore, when we do a print check we get value of channelname as hitesh 
and value of variable "anothername" as "Aditya"....
which means we assign the copy of channelnames to anothername due to which when we
make a  change original variable doesn't get affected.. 
two stack area is created 1. channelnames
2. anothername
*/

// Now let's take an example of non primitive data type 

let userone = {
    name:"Aditya", 
    enroll: 2202030400198
}

let usertwo = userone
usertwo.name="Ritik", 

console.log(userone.name);
console.log(usertwo.name);
// Now let's what happens in the non prmitive data type case
/*
two memory space is created in stack space one as userone and another as 
usertwo whether both are refren.. to heap memory in which name and enroll 
are present are userone and usertwo are refering to them therefore change in 
one can lead to changing the both 
*/

