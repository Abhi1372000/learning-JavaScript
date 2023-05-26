// this is the Event listeners

const div_3 = document.getElementById("div-3");

function changeBgColor(){
    div_3.style.backgroundColor = 'blue'
};

div_3.addEventListener("mouseover", changeBgColor);