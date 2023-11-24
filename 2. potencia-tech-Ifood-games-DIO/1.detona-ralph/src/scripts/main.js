const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score:  document.querySelector('#score')
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    }, actions: {
        countDownTimeId: setInterval(countDownTime, 1000),
    }
}


const randomSquare = () => {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy')
    })

    let randomNumber = Math.floor(Math.random() * 9)
    let randomSquare = state.view.squares[randomNumber]
    randomSquare.classList.add('enemy')

    state.values.hitPosition = randomSquare.id
}

const moveEnemy = () => {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}

const playSound = (sound) => {
    let audio = new Audio(`./src/assets/audios/${sound}.mp3`)
    // audio.volume = 0.2
    audio.play()

}

const addListenerHitbox = () => {
    state.view.squares.forEach((square) => {
        square.addEventListener('click', () => {
            if(square.id === state.values.hitPosition) {
                state.values.result++
                state.view.score.textContent = state.values.result
                state.values.hitPosition = null
                playSound('hit')
            }
        })
    })
}

const init = () => {
    moveEnemy()
    addListenerHitbox()
}

function countDownTime() {
    state.values.currentTime--
    state.view.timeLeft.textContent = state.values.currentTime

    if (state.values.currentTime <= 0) {
        alert(`GAME OVER! O seu resultado foi ${state.values.result}! Prepare-se para começar novamente!`)
        state.values.currentTime = 60
        state.view.timeLeft.textContent = state.values.currentTime
    }
}

init()
