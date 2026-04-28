let number = 0
let cron
let h1 = document.querySelector('h1')

let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')

btnStop.style.display = 'none'

function start() {
    clearInterval(cron)

    number = 0

    btnStart.style.display = 'none'
    btnStop.style.display = 'inline-block'

    cron = setInterval(function() {
        number++

        let horas = Math.floor(number / 3600)
        let minutos = Math.floor((number % 3600) / 60)
        let segundos = number % 60

        if (horas < 10) horas = '0' + horas
        if (minutos < 10) minutos = '0' + minutos
        if (segundos < 10) segundos = '0' + segundos

        h1.innerHTML = horas + ':' + minutos + ':' + segundos
    }, 10)
}

function stop() {
    clearInterval(cron)

    h1.classList.remove('piscar')
    
      setTimeout(function() {
        h1.classList.add('piscar')
    }, 10)

    btnStop.style.display = 'none'
    btnStart.style.display = 'inline-block'
    
    btnStart.innerHTML = 'Restart'
}
