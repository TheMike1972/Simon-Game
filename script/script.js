let order = [];
let playerOrder = [];
let amountOfNotes = 1
let userClicks = 0
let flash;
let turn;
let good;
let compTurn;
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



function select(panel) {
    const name = panel.getAttribute('name')
    document.body.style.setProperty('--light-color', lightColors[name])
    panel.classList.add('selected')

    setTimeout(() => {
        panel.classList.remove('selected')
    }, 500)
}
function generateSequence () {
    order.push(allPanel[Math.floor(Math.random() * allPanel.length)])
}
function playersTurn() {

}

// 

allPanel.forEach(panel => {
    panel.addEventListener('click', () => {
        select(panel)
        playerOrder.push(panel);
        const selectionName = playerOrder[userClicks].getAttribute('name')
        const computerName = order[userClicks].getAttribute('name')
        // console.log(selectionName === computerName);
        if (selectionName === computerName) {
            userClicks++
            if (playerOrder.length === order.length) {
                userClicks = 0
                playerOrder = []
                play()
            }

        } else {
            console.log('you lose')
        }
    })
})


function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}


// function gameTurn () {
    //     on = false;
    //     if (flash === turn) {
    //         clearInterval(intervalId);
    //         compTurn = false;
    //         clearColor();
    //         on = true;
    //     }
    //     if (compTurn) {
    //         clearColor();
    //         setTimeout(() => {
    //             if (order[flash] === 1) one();
    //             if (order[flash] === 2) two();
    //             if (order[flash] === 3) three();
    //             if (order[flash] === 4) four();
    //             flash++
    //         }, 200);
    //     }
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
// }
    // function one() {
    //     if(noise) {
    //         let audio = document.getElementById("clip1");
    //         audio.play();
    //     }
    //     noise = true;
    //     // topLeft.style...
    // }
    
    // function two() {
    //     if(noise) {
    //         let audio = document.getElementById("clip2");
    //         audio.play();
    //     }
    //     noise = true;
    //     // topRight.style...
    // }
    
    // function three() {
    //     if(noise) {
    //         let audio = document.getElementById("clip3");
    //         audio.play();
    //     }
    //     noise = true;
    //     // bottomLeft.style...
    // }
    
    // function four() {
    //     if(noise) {
    //         let audio = document.getElementById("clip4");
    //         audio.play();
    //     }
    //     noise = true;
    //     bottomRight.style
    // }
    
    // function clearColor() {
        
    // }
    
    // function flashColor (){
    //     topLeft.style
    //     topRight.style
    //     bottomLeft.style
    //     bottomRight.style  
    // }

// topLeft.addEventListener('click', (event) => {
//     document.body.style.setProperty('--light-color', lightColors.green)
//     topLeft.classList.add('selected')
//     setTimeout(() => {
//         topLeft.classList.remove('selected')
//     }, 500)
// })

// topRight.addEventListener('click', (event) => {
//     document.body.style.setProperty('--light-color', lightColors.red)
//     topRight.classList.add('selected')
//     setTimeout(() => {
//         topRight.classList.remove('selected')
//     }, 500)
// })


// bottomLeft.addEventListener('click', (event) => {
//     document.body.style.setProperty('--light-color', lightColors.yellow)
//     bottomLeft.classList.add('selected')
//     setTimeout(() => {
//         bottomLeft.classList.remove('selected')
//     }, 500)
// })

// bottomRight.addEventListener('click', (event) => {
//     document.body.style.setProperty('--light-color', lightColors.blue)
//     bottomRight.classList.add('selected')
//     setTimeout(() => {
//         bottomRight.classList.remove('selected')
//     }, 500)
// })

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

// onButton.addEventListener('click', (event) => {
//     if (onButton.checked) {
//         on = true;
//         turnCounter.innerHTML = "-";
//     } else {
//         on = false;
//         turnCounter.innerHTML = "";
//         // clearColor();
//         clearInterval(intervalId);
//     }
// });