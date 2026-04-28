let number = 0
let cron
let h1 = document.querySelector('h1')

let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')
let gif = document.getElementById('gif')

btnStop.style.display = 'none'

let btnReset = document.getElementById('btnReset')
btnReset.style.display = 'none'

function start() {
    clearInterval(cron)

    number = 0
    

    btnStart.style.display = 'none'
    btnStop.style.display = 'inline-block'
    btnReset.style.display = 'none'

    cron = setInterval(function() {
        number++

        let horas = Math.floor(number / 360000)
        let minutos = Math.floor((number % 360000) / 6000)
        let segundos = Math.floor((number % 6000) / 100)
        let milesimos = number % 100

        if (horas < 10) horas = '0' + horas
        if (minutos < 10) minutos = '0' + minutos
        if (segundos < 10) segundos = '0' + segundos
        if (milesimos < 10) milesimos = '0' + milesimos

        h1.innerHTML = horas + ':' + minutos + ':' + segundos + '<span>.' + milesimos + '</span>'
    }, 10)
}

function reset() {
    clearInterval(cron)

    number = 0
    h1.innerHTML = '00:00:00<span>.00</span>'

    btnStop.style.display = 'none'
    btnReset.style.display = 'none'
    btnStart.style.display = 'inline-block'
    btnStart.innerHTML = 'Start'
}


function stop() {
    clearInterval(cron)

    h1.classList.remove('piscar')
    
      setTimeout(function() {
        h1.classList.add('piscar')
    }, 10)

    btnStop.style.display = 'none'
    btnReset.style.display = 'inline-block'
    btnStart.style.display = 'none'

}
