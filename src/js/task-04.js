const refs = {
    incrBtn: document.querySelector('button[data-action="increment"]'),
    decrBtn: document.querySelector('button[data-action="decrement"]'),
    countNmbr: document.getElementById("value"),
};

let counter = 0;

refs.incrBtn.addEventListener('click', () => {
    counter += 1;
    refs.countNmbr.textContent = counter;
});

refs.decrBtn.addEventListener('click', () => {
    counter -= 1;
    refs.countNmbr.textContent = counter;
});


