let order = [];
let playerOrder = [];
let amountOfNotes = 1
let counter = 0

let turn;

let intervalId; 
let strict = false;
let noise = true;
let win;

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

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#top-left-panel');
const topRight = document.querySelector('#top-right-panel');
const bottomLeft = document.querySelector('#bottom-left-panel');
const bottomRight = document.querySelector('#bottom-right-panel');

const strictButton = document.querySelector('#strict-btn');

const startButton = document.querySelector('#start-btn');
const strictInput = document.querySelector('input.checkbox.strict')
const allPanel = document.querySelectorAll('.panel')



startButton.addEventListener('click', (event) => {
    play();
});

function play() {
    for (let i= 0; i < amountOfNotes; i++) {
    generateSequence();
    }
    for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
        select(order[i])
    }, i * 1200)  
}
    console.log("computer", order);
}
// can I include a sound action if there is a different sound if the player clicks on the wrong panel?
// 

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
    }, 1100)
}

function generateSequence () {
    order.push(allPanel[Math.floor(Math.random() * allPanel.length)])
}

allPanel.forEach(panel => {

    panel.addEventListener('click', () => {
        select(panel)
        playerOrder.push(panel);

        console.log("player", playerOrder);

        const selectionName = playerOrder[counter].getAttribute('name')
        const computerName = order[counter].getAttribute('name')

        if (selectionName === computerName) {
            console.log('ok');
            counter++

// can I add here the part where the count adds up?
            document.querySelector("#turn").textContent = order.length + 1;

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

function winGame() {
    document.querySelector("#turn").textContent = "WIN!";
    counter = 0;
    order = [];
    playerOrder = [];
}

function failGame() {
    document.querySelector("#turn").textContent = "OUPS!";
    playSounds.fail.play();

    counter = 0;
    order = [];
    playerOrder = [];
}

// 3) then it is the player's turn - same display, and same sound.  - seems to be done as well. -> sound 


//     everytime the player succeeds at passing a round, the count turn gets + 1;
//     if the player reaches a serie of 20, he wins. // fct win?
// 4c) or the game stops and the players loses (display of a failing sound)
// 5) ideally, there would be three settings: easy, medium and fast, for faster games.
// }
    
// function play() {
    // win = false;
    // order = [];
    // playerOrder = [];
    // flash = 0;
    // intervalId = null;
    // turn = 1;
    // turnCounter.innerHTML = 1;
    // good = true;
    // for (let i = 0; i < 20; i++) {
    //     order.push(Math.floor(Math.random() * 4) + 1);
    // }
    // compTurn = true;
    // intervalId = setInterval(gameTurn, 800);
    // generateSequence();
    // let i = 0
    // intervalId = setInterval(() => {
    //     select(order[i])
    //     i++
    //     if (i === order.length) {
    //         clearInterval(intervalId)
    //         playersTurn()
    //     }
    // }, 800);

// function check() {
//     if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
//     good = false;
//     if (playerOrder.length === 3 && good) {
//         winGame ();
//     }
//     if (good === false) {
//         flashColor();
//         turnCounter.innerHTML = "NO!";
//         setTimeout(() => {
//             turnCounter.innerHTML = turn;
//             clearColor();

//             if (strict) {
//                 play();
//             } else {
//                 compTurn = true;
//                 flash = 0;
//                 playerOrder = [];
//                 good = true;
//                 intervalId = setInterval(gameTurn, 800);
//             }
//         }, 800);
//         noise = false;
//     }
//     if (turn === playerOrder.length && good && !win) {
//         turn++; 
//         playerOrder = [];
//         compTurn = true;
//         flash = 0;
//         turnCounter.innerHTML = turn;
//         intervalId = setInterval(gameTurn, 800);
//     }
// }

// console.log(strictInput.checked)
// strictButton.addEventListener('click', (event) => {
//     if (strictInput.checked) {
//         strict = true;
//     } else {
//         strict = false;
//     }
// });
