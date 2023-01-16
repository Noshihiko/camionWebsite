'use strict';

let docTitle = document.title;
window.addEventListener("blur",() => {
    document.title = "Sad vroum :(";
})
window.addEventListener("focus", ()=> {
    document.title = docTitle;
})

let button = document.getElementById("honk");
let honk = document.getElementById("sound")
button.addEventListener("click", function (){
    button.classList.toggle("animate");
    honk.play();
})