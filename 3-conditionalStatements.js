const temp = 31

// if-else statments
// syntax
// if(condition){
//     code
// }
// else{
//    code
// }
if (temp > 29){
    console.log("temprature is High")
}
else{
    console.log("temprature is Low")
}


//if...elseif...if statement
// syntax
// if(condition){
//     code
// }
// else if(condition){
//     code
// }
// else{
//    code
// }

if (temp > 29){
    console.log("temprature is High")
}
else if(temp === 31){
    console.log("perfect temp")
}
else{
    console.log("temprature is Low")
}
// terranary operator

const authen = false;

authen ? console.log("show Sign out") : console.log("show logIn");

// var ? it runs if true : it runs if false;

let age = 21

age >= 10 ? console.log("u can drive") : console.log("u cannot drive");