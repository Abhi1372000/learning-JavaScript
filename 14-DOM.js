const demo = document.getElementById("demo").innerHTML = "Hello World!"; // this the innerHTML 
// the above element is got by refrence of ID

const lst_itm = document.getElementsByClassName("lst-itm")
// the refrece is class name

const li_tag = document.getElementsByTagName("li")
//the refrence is using Tag name

const ul_1 = document.getElementById("ul-1")


const lst_itm_2 = document.querySelector("lst-itm-2")
// the element is selected by using query selector

const div_container_2 = document.querySelectorAll("cotainer-2>li")
// this is using the refrence of css selectors and combinators
const ul_2_lst = document.querySelectorAll("ul-2 li")
const allDiv = document.querySelectorAll("body div")

const ul_2 = document.getElementById("ul-2")

const lst_itm_21 = document.querySelector("lst-itm-21")

console.log(demo)
console.log(lst_itm)
console.log(li_tag)
console.log(lst_itm_2)

console.log(ul_1)

console.log(div_container_2)

console.log(ul_2_lst)

console.log(allDiv)

//              DOM Mainpulation 


// Styling the elements
ul_2.style.color = 'red'
ul_2.style.backgroundColor = 'black'

for(let i = 0; i<lst_itm.length; i++){
    lst_itm[i].style.fontSize = '2rem'
}

// Creating the elements
li_1 = document.createElement("li")
li_1.innerText = 'StarWars'
ul_2.append(li_1) // 1st method to add 

//.removeAttribute is used to remove the attributes of the html elements
//.setAttribute