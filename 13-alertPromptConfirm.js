alert("Enter your age")
let age = parseInt(prompt("Enter ur age:"))
let writeAge = confirm(`Confirm that your age is ${age}`)
if(writeAge){
    console.log(`So your age is ${age}`)
    document.write(`So your age is ${age}`)
    
}
else
{
    console.log("relod the page")
}

