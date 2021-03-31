//Select necessary Element
let button = document.querySelector('#click')
let body = document.querySelector('body')
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

//let color = [red,green,blue,navyblue];
body.style.backgroundColor = 'violet'
button.addEventListener('click',addColor)

//Add event listener to this button



function addColor(){
    let colorindex = parseInt(Math.random()*6)
    body.style.backgroundColor = colors[colorindex]
    
}