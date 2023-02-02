let order = [];
let playerOrder = [];
let amountOfNotes = 1
let counter = 0

let intervalId; 

const lightColors = {
    green: "#49b749",
    red: "#b74953",
    yellow: "#cdb543",
    blue: "#476cc1"
}
const playSounds = {
    green: document.querySelector('.greensound'),
    red: document.querySelector('.redsound'),
    yellow: document.querySelector('.yellowsound'),
    blue: document.querySelector('.bluesound'),
    fail: document.querySelector('.failsound')
}

const topLeft = document.querySelector('#top-left-panel');
const topRight = document.querySelector('#top-right-panel');
const bottomLeft = document.querySelector('#bottom-left-panel');
const bottomRight = document.querySelector('#bottom-right-panel');

const startButton = document.querySelector('#start-btn');
const allPanel = document.querySelectorAll('.panel')


startButton.addEventListener('click', (event) => {
    play();
    startButton.disabled = true;
    startButton.classList.add('disabled');
    document.querySelector("#turn").textContent = "-";
    allPanel.forEach(panel => {
        panel.addEventListener('click', () => {
            select(panel)
            playerOrder.push(panel);
            const selectionName = playerOrder[counter].getAttribute('name');
            const computerName = order[counter].getAttribute('name');
            if (selectionName === computerName) {
                counter++
                document.querySelector("#turn").textContent = order.length;
    
                if (playerOrder.length === order.length) {
                    if (playerOrder.length === 20) {
                        winGame ();
                        return;
                    }
                    counter = 0
                    playerOrder = []
                    setTimeout(() => {
                        play()
                    }, 1500);
                }
            } else {
                failGame ();
                console.log('you lose');
            }
        })
    })
});

function play() {
    for (let i= 0; i < amountOfNotes; i++) {
    generateSequence();
    }
    for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
        select(order[i])
    }, i * 1000);
    }
}

function select(panel) {
    allPanel.forEach(panel => {
        panel.classList.remove('selected') 
    })
    const name = panel.getAttribute('name')
    document.body.style.setProperty('--light-color', lightColors[name])
        panel.classList.add('selected')
        playSounds[name].pause();
        playSounds[name].currentTime = 0;
        playSounds[name].play()
    setTimeout(() => {
        panel.classList.remove('selected')
    }, 800)
}

function generateSequence () {
    order.push(allPanel[Math.floor(Math.random() * allPanel.length)])
}

function winGame() {
    document.querySelector("#turn").textContent = "WIN!";
    document.querySelector("#turn").style.fontSize = "1.5em";
    startButton.disabled = false;
    startButton.classList.remove('disabled');
    counter = 0;
    order = [];
    playerOrder = [];
}

function failGame() {
    document.querySelector("#turn").textContent = "OUPS!";
    document.querySelector("#turn").style.fontSize = "1.5em";
    playSounds.fail.play();
    startButton.disabled = false;
    startButton.classList.remove('disabled');
    counter = 0;
    order = [];
    playerOrder = [];
}
