const boxesField = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type=number]");

let boxes = [];
let markup = "";

createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);

function onCreateClick() {

    boxes[0] ={
      height: 30,
      width: 30,
    };

  while (boxes.length < input.value) {

    boxes.push({
      height: boxes[boxes.length - 1].height + 30,
      width: boxes[boxes.length - 1].width + 30,
    })
    }

  markup = boxes
    .map(box => {
    const randomColor = getRandomHexColor();
      return `<div 
      style="
      height: ${box.height}px; 
      width: ${box.width}px; 
      background-color: ${randomColor}; 
      margin: 10px">
      </div>`;
  })
    .join(" ");
  
  boxesField.insertAdjacentHTML('beforeend', markup);
  };

function onDestroyClick() {
  boxes = [];
  markup = "";
  boxesField.innerHTML = '';
};


function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };













