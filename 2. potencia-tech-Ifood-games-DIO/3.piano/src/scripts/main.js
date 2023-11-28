const pianoKeys = document.querySelectorAll('.piano-keys .key')
const volumeSlider = document.querySelector('#volume')
const keysCheck = document.querySelector('.keys-check input')

let audio = new Audio('src/tunes/a.wav')
let mapedKeys = []

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')

    setTimeout(()=> {
        clickedKey.classList.remove('active')
    }, 150)

}

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const showHiddenKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle('hidden'))
}


pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedKeys.push(key)
})


document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key)
    }
})

volumeSlider.addEventListener('input', handleVolume)
keysCheck.addEventListener('click', showHiddenKeys)
