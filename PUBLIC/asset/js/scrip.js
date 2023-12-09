


const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
let loop;

document.querySelector(".start").addEventListener("click", stopwatch)

window.onload = () => {
    createTime.bind(minutes)()
    createTime.bind(seconds)()
}

function createTime() {
    for (let index = 0; index < 60; index++) {
        this.innerHTML += `<option value="${index}">${index}</option>`
    }
}
function stopwatch() {
    const display = document.querySelector(".display")
    const m = minutes.value
    const s = seconds.value
    counter.bind(display)(m, s)
    this.removeEventListener("click", stopwatch)
}

function counter(min, sec) {
    loop = setInterval(() => {
        let timeMinute = min
        let timeSeconds = sec
        if (min < 10) {
            timeMinute = `0${min}`
        }
        if (sec < 10) {
            timeSeconds = `0${sec}`
        }
        this.children[0].innerText = `${timeMinute}:${timeSeconds}`
        sec--
        if (sec < 0) {
            sec = 59
            min--
        }
        if (min < 0) {
            clearInterval(loop)
            this.classList.add("time-is-up")
            document.querySelector('audio').play()
        }
    }, 1000)
}

