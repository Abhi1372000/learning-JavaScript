let countries = ['india', 'america', 'afarica', 'italy']



console.log(countries) // how to access the whole array



let states = new Array('Chhattisgarh', 'Bihar', 'Andhara', 'Teleangana')// now arrays is declared like 

// now accessing the array using the index position
// in java script the index count start with 0(zero)
console.log(states[0], countries[2])

console.log(states.length)// this length function is used find number of elements present in array

// replacing the values in array
states[1] = 'Tamil nadu'
console.log(states[1], states)  // or it is resigned

const user = ['korlapu', 'korlapu@gmail.com', 34, true];
console.log(user)

user.pop() // pop is inbuilt method of array used to pop or delet the last value of from array and from last index position

console.log(user)

user.unshift('abhishek')  // unshift is inbuilt method of array used to add the value in the array at the starting index position
console.log(user)

user.shift()
console.log(user)

console.log(user.indexOf(34)) // indexOf is inbuilt method of array used for finding the index position of given element
// if the element is not present in the array the inbuilt method throughs or gives output as -1


const z="ABHISHEK"
convArr = Array.from(z) //Array.form is used to split the string into the array in sigle letters
console.log(convArr)


function isEven(num){
    return num % 2 === 0
}
const eleSet = [8,4,2,6]
console.log(eleSet.every(isEven)) // the every method executes a function for each array element


// Splicing the array 
// syntax of splicing is arrayname.splice(statingindex, noof elements to remove, values to add in removed place) 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits.splice(2, 2);
console.log(fruits)

fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)

// creating a array with given size 
/*

var arr = new Array(6); 

var arr = Array(6);

var arr = [];
arr.length = 6;

*/
