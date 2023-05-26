
// this is the function expression
function myFun1(name)
{
    console.log(name)
    return 10,20,30 // it only returns the last value
}

var x = myFun1("abhishek")

console.log(myFun1)
console.log(x)
console.log(typeof(x)) // it is a number type

// variable function
var myFun2 = function(name, num){
    console.log(name)
    return num % 2 === 0        // return is used to return the values and the control from function space to main space
}
console.log(myFun2("yash"))


// arrow function

var a = (name) =>{
    console.log("Hi this is the arrow function " + name)
}

a("Abhishek") // calling of the arrow function

//              IIFE function

// The Immeditaly invoked function Expression 
/*
A JavaScript immediately invoked function expression is a 
function defined as an expression and executed immediately 
after creation. 
*/
// below it is mentioned
// syntax

// (function(){
//     //...
// })();

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);

//                      Recursion

// The function it sef is called recursion function

// program for Printing the numbers 1-10
function countDown(number) {

    console.log(number);
    if (number < 10) {
        countDown(number+1);
    }
    return 100
}

let afterCall = countDown(1);
console.log(afterCall)

// In below program we can see the example of closuer
function outer (){

    let indent1 = 10
    var indent2 = 30
    let inner = function(){
        console.log("Inner", indent1, indent2)
    }
    return inner
}

let runOuter = outer()
console.log(runOuter)// here the runOuter variable stores the inner function
runOuter(); // here the inner function is running and it is getting the variables also 
/* so that means the function remembers the it's own memory and the lexical or surrounding state
Basically called closure*/