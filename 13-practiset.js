
let runAgain = true;

const canDrive = (age) =>{
    return age >= 18 ? true : false
}

while(runAgain){
    let age = Number.parseInt(prompt("Enter your age :"))
    if (age<0){
        console.error("please Enter the Valid age")
        break;
    }
    if (canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you Cannot Drive")
    }
    runAgain = confirm("Do you want to run again")
}