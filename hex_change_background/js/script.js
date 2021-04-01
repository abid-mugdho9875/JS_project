//Select tag
let button = document.querySelector(".btn")
let body = document.querySelector("body")
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hex_text = document.querySelector("#hex-value")

//Before clicking

body.style.backgroundColor="#00bfff";
hex_text.innerHTML="#00bfff"


//Add event listener

button.addEventListener('click',addColor)

//Function
function addColor(){
    let color='#'
    for(i = 0; i < 6;i++){
        const value = parseInt(Math.random()*hexValues.length)
        color += hexValues[value]
    }
    
    hex_text.textContent = color
    body.style.backgroundColor = color
    
}