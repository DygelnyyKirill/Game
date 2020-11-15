
function timerStart () {
        let display = document.querySelector('#countdown .display') // меняющаяся цифра
        let timeLeft = parseInt(display.innerHTML) // оставшееся время
        
        let timer = setInterval(function() {
            if (--timeLeft >= 0) { // если таймер всё еще больше нуля
                display.innerHTML = timeLeft // обновляем цифру
            } else {
                document.querySelector('#countdown h1').style.display = 'none' // прячем теекст
                // document.querySelector('#countdown div').style.display = 'block' // показываем кнопку
                clearInterval(timer) // удаляем таймер
            }
        }, 1000)  // таймер срабатывает каждые 1000 msec (1 sec)
}
btn.addEventListener('click', timerStart);
