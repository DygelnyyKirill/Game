
stopTimer = document.querySelector('.button1');

function timerStart () {
        let display = document.querySelector('#countdown .display') // меняющаяся цифра
        let timeLeft = parseInt(display.innerHTML) // оставшееся время
        
        let timer = setInterval(function() {
            if (--timeLeft >= 0) { // если таймер всё еще больше нуля
                display.innerHTML = timeLeft // обновляем цифру
            } else {
                document.querySelector('#countdown h1').style.display = 'none' // прячем текст
                // document.querySelector('#countdown div').style.display = 'block' // показываем кнопку
                clearInterval(timer) // удаляем таймер
            }
        }, 1000)  // таймер срабатывает каждые 1000 msec (1 sec)

        stopTimer.addEventListener('click', function() {
            clearTimeout(timer);
            openWin();
        })
}

btn.addEventListener('click', timerStart);


let modal = document.querySelector('.modal');
let overflow = document.createElement('div');

function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    let height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 + "px";
    modal.style.top = "50%";
}

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

overflow.addEventListener('click', function () {
    modal.style.top = "-100%";
    overflow.remove();
})
