

console.log(2+2)
console.log(2+'2')// here it is type coercion is taking place means implicitly conversion or automatic typecasting
console.log('2'+2)// here it is type coercion is taking place means implicitly conversion or automatic typecasting
console.log("2"+"2")// here it is type coercion is taking place means implicitly conversion or automatic typecastings

var temp = "34"

if (temp == 34){ // here the type coercion is taking place implicitly coversion and her normal comparision
    console.log('temp outside is '+temp)
}


x = Number(temp) // now here we doing type conversion and manually conversion
if(x === 34){  // here the strict comparion is taking place
    console.log('temp outside is '+temp)
}