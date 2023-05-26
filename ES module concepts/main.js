import User, { printAge, printName } from "./User";
// import U, { printAge, printName } from "./User"; we can make the default export name aliasing
// and we have to export the simple export function and classes inside the curly braces 
const user1 = new User('Abhishek', 23)
printName(user1)
printAge(user1)