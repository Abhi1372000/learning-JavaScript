//                                              For loop
// Syntax
// for (initialExpression; condition; updateExpression) {
//     for loop body
// }

const n = 5 
for(let i = 1; i <= n; i++)
{
    console.log("this is the for loop")
}

// by using the loop displaying numbers
let strTemp = ''
for(let i = 1; i <= n; i++)
{
    strTemp += i.toString()
}

console.log(strTemp)
// or we cando like this
/* for(let i = 1; i <= n; i++)
{
    console.log(i)
} */


//                                      while loop
/* Syntax
while(conditions)
{
    code
}
*/

let i=0
while(i <= n)
{
    console.log(i);
    i += 1;
}

//                                      do while loop
/* Syntax
do 
{
    code
}while(conditions)
*/
let z= 0

//                                      for in loop 
/*
syntax of foor in loop 

for(let variable_name in )
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}