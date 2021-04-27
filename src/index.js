import './sass/main.scss';
import colors from './colors'



const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

let timerId = null


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function startRandomBcgColorChange() {
if (refs.startBtn.hasAttribute('active')) {
      return
  }

 refs.startBtn.setAttribute('active',true)
    timerId = setInterval(() => {
 
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
console.log(refs.startBtn.getAttribute('active'));
}
function stopRandomBcgColorChange() {
    clearInterval(timerId)
    refs.startBtn.removeAttribute('active')
   
}

refs.startBtn.addEventListener('click', startRandomBcgColorChange)

refs.stopBtn.addEventListener('click', stopRandomBcgColorChange)
