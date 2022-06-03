// //Choose a random color

const button = document.querySelector(".btn");
const page = document.querySelector("body");
const colors = ["purple", "blue", "red", "green"];

page.style.backgroundColor = "purple";

button.addEventListener("click", function(){
    const aleaColor = parseInt(Math.random() * colors.length)
    page.style.backgroundColor = colors[aleaColor] ;
})
    




































































