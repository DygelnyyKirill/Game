let box = document.querySelector('.box'),
    wrapp = document.querySelector('.wrapper'),
    fildBlock = document.querySelector('.fildGames'),
    btn = document.querySelector('.button19');

function displeyBox () {
    fildBlock.style.display = 'block';
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function klickWrapp () {
    let w = wrapp.offsetWidth,
        h = wrapp.offsetHeight,
        dx = randomInteger(0, w - 100),
        dy = randomInteger(0, h - 100);
    box.style.position = 'relative';
    box.style.display = 'block';
    box.style.top = dy + 'px';
    box.style.left = dx + 'px';
}
btn.addEventListener('click', displeyBox);
box.addEventListener('click', klickWrapp);



