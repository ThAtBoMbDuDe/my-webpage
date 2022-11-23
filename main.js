const body = document.getElementsByTagName("body")
const display = document.querySelector("#input")
const numBtn = document.querySelectorAll(".numButton");
const funBtn = document.querySelectorAll(".funButton");
const clear = document.querySelector("#clear");
const backSpace = document.querySelector("#delete");
const compute = document.querySelector(".compButton");
const buttonArr = Array.from(document.getElementsByTagName('button'));
const rng = document.querySelector("#RNG");



buttonArr.map(button => {
  button.addEventListener('click', (v) => {
    switch(v.target.innerText){
      case 'AC':
        display.innerText = "";
          break;
      case 'DEL':
        display.innerText = display.innerText.slice(0,-1);
          break;
      case '=':
        display.innerText = Math.round(math.evaluate(display.innerText) * 1000000) / 1000000;
          break;
      case 'RNG':
        display.innerText = Math.round(display.innerText * Math.random());
          break;
      default:
        display.innerText += v.target.innerText;
    }
  })
})





