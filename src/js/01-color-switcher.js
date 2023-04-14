


const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
   

let idInt = null;

stop.disabled = true;
start.addEventListener('click', startColor);
stop.addEventListener('click', stopColor);


function startColor() {
    start.disabled = true;
    stop.disabled = false;
   

    idInt = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function stopColor() {
    start.disabled = false;
    stop.disabled = true;
 

    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }