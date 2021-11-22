const input = document.getElementById("font-size-control");
const textToAdjust = document.getElementById("text");

input.addEventListener('input', fontAdjust)

function fontAdjust() {

textToAdjust.setAttribute('style', `font-size: ${input.value}px`);
};