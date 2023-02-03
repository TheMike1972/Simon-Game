// Establishing a few essentials variable:
let order = [];
let playerOrder = [];
let amountOfNotes = 1
let counter = 0
let intervalId; 

const startButton = document.querySelector('#start-btn');
const allPanel = document.querySelectorAll('.panel')

// declaring an object of colors, from which the changing aspect of the panel can be chosen from
const lightColors = {
    green: "#49b749",
    red: "#b74953",
    yellow: "#cdb543",
    blue: "#476cc1"
}

// declaring an object of audio clips for the interaction with the panels
const playSounds = {
    green: document.querySelector('.greensound'),
    red: document.querySelector('.redsound'),
    yellow: document.querySelector('.yellowsound'),
    blue: document.querySelector('.bluesound'),
    fail: document.querySelector('.failsound')
}

// the function that starts it all:
startButton.addEventListener('click', (event) => {
    play();
    startButton.disabled = true;
    startButton.classList.add('disabled');
    document.querySelector("#turn").textContent = "-";
});

// a loop to build two arrays : the sequence built by the program, and the sequence played by the player
allPanel.forEach(panel => {
    console.log(panel)
    panel.addEventListener('click', () => {
            select(panel)
            playerOrder.push(panel);
            const selectionName = playerOrder[counter].getAttribute('name');
            const computerName = order[counter].getAttribute('name');

// the two arrays are being compared below and gives the instruction...
            if (selectionName === computerName) {
                counter++
                document.querySelector("#turn").textContent = order.length;
// ...to stop the game if the player reaches 20 correct answers...
                if (playerOrder.length === order.length) {
                    if (playerOrder.length === 20) {
                        winGame ();
                        return;
                    }
// ...to continue if the player is correct...
                    counter = 0
                    playerOrder = []
                    setTimeout(() => {
                        play()
                    }, 1500);
                }
// ...or to stop the game if the player makes a mistake.
            } else {
                failGame ();
                console.log('you lose');
            }
    })
})

// the building of the program's array, with a delay in-between each action so that the player can see each lit-up panel clearly, without overlapsing
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

// the function declaring how the panel changes aspect when selected, and the sound that goes along with it.
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
 // the function that builds the program sequence with randomness:
function generateSequence () {
    order.push(allPanel[Math.floor(Math.random() * allPanel.length)])
}

// what happens when the player wins:
function winGame() {
    document.querySelector("#turn").textContent = "WIN!";
    document.querySelector("#turn").style.fontSize = "1.5em";
    startButton.disabled = false;
    startButton.classList.remove('disabled');
    counter = 0;
    order = [];
    playerOrder = [];
}
// what happens when the player loses:
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
