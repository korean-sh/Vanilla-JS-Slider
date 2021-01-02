//Current DIV
let current = 1;

//Call by btn class
const btnPre = document.querySelector(".pre"),
btnNext = document.querySelector(".next");

//button Next
function handleNextEvent(){
    let target = document.querySelector(`.slider__0${current}`);
    let circle = document.querySelector(`.circle__0${current}`);
    target.classList.remove("showing");
    circle.classList.remove("showing__circle");

    current = current + 1 < 6 ? current + 1 : 1;
    
    target = document.querySelector(`.slider__0${current}`);
    circle = document.querySelector(`.circle__0${current}`);
    target.classList.add("showing");
    circle.classList.add("showing__circle");
}
btnNext.addEventListener("click", handleNextEvent);

//button Pre
function handlePreEvent(){
    let target = document.querySelector(`.slider__0${current}`);
    let circle = document.querySelector(`.circle__0${current}`);
    target.classList.remove("showing");
    circle.classList.remove("showing__circle");
    
    current = current - 1 > 0 ? current - 1 : 5;
    
    target = document.querySelector(`.slider__0${current}`);
    circle = document.querySelector(`.circle__0${current}`);
    target.classList.add("showing");
    circle.classList.add("showing__circle");
}
btnPre.addEventListener("click", handlePreEvent);

function init(){
    setInterval(handleNextEvent, 5000);
}

init();