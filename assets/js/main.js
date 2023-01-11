const text = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    text.classList.toggle("HeadlineStyle");
})