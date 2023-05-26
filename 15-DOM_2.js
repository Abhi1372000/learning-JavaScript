// In this dom mainpulation is basically about the traversing the DOM tree

let ul = document.querySelector('ul')
let div_container = document.getElementById("container")
console.log(ul.parentNode) // by using the parent node we can acess the parent elemaent of the present element
console.log(ul.parentElement.parentElement)// same but access the parent of the parent

 
 console.log(ul.childNodes)
 console.log(ul.firstChild)
 console.log(ul.lastChild)
 console.log(ul.firstElementChild)

ul.childNodes[1].style.backgroundColor = 'blue';

// to select the previous sibiling .previousElemntSibling 
// to select the next sibling .nextsibling