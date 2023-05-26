export default class User{
    constructor (name, age){
        this.name = name
        this.age = age 
    }
}

export function printName(user){
    console.log(`user name is ${user.name}`)
}

export function printAge(age){
    console.log(`The user age is ${age}`)
}

// the second way is to export is 

/*
export default User
export {printName, printAge}  from a file we can export only one default esle all other things we have to follow the this second thing 
*/



