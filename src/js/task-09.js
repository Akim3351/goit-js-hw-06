const bodyEl = document.body;
const switchBtn = document.querySelector("button[type=button]");
const colorSpan = document.querySelector("span[class=color]");
switchBtn.addEventListener('click', onBtnClick);

function onBtnClick() {

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const backGrndColor = getRandomHexColor();
  colorSpan.textContent = `${backGrndColor}`;
  bodyEl.setAttribute('style', `background-color: ${backGrndColor}`)
}

