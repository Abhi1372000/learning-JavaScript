/*
map fiter reduce are higher order functuons of array
*/


// map function
const arr = [12,4,8]
let resultarr = arr.map((value,index,arrayn)=>{
    console.log(index,value,arrayn)
    return value*value
})

console.log(resultarr)

// filter function

let resultarr2 = arr.filter((a)=>{
    return a<10
})
console.log(resultarr2)

//reduce function

let resultarr3 = arr.reduce((v1,v2)=>{
    return v1+v2
})
console.log(resultarr3)
