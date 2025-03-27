let plyrOneScr = document.querySelector('#ply1Score');
let plyrTwoScr = document.querySelector('#ply2Score');
let scoreInput = document.querySelector('#playscore');
let plusPlyr1Bttn = document.querySelector('#pointtoply1');
let plusPlyr2Bttn = document.querySelector('#pointtoply2');
let gameStatus = document.querySelector('#status')
let resetBttn = document.querySelector('#reset');
let allBttns = document.querySelectorAll('button');

function beginMatch () {
    if (scoreInput.value === '') {
        plusPlyr1Bttn.disabled = true;
        plusPlyr2Bttn.disabled = true;
        resetBttn.disabled = true;
    } else {
        scoreInput.disabled = true;
        plusPlyr1Bttn.disabled = false;
        plusPlyr2Bttn.disabled = false;
    }
}

function ongoingMatch () {
    plyrOneScr = 0;
    plyrTwoScr = 0;

    plusPlyr1Bttn.addEventListener('click', function () {
        plyrOneScr += 1;
        plyrOneScr.textContent = plyrOneScr;
    })
    plusPlyr2Bttn.addEventListener('click', function () {
        plyrTwoScr += 1;
        plyrTwoScr.textContent = plyrTwoScr;
    })
}

function matchSettlement () {
    while (plyrOneScr < scoreInput.value && plyrTwoScr < scoreInput.value) {
        if (plyrOneScr > plyrTwoScr) {
            plyrOneScr.classList.add('color', 'green');
            plyrTwoScr.classList.add('color', 'red');
        } else if (plyrTwoScr > plyrOneScr) {
            plyrTwoScr.classList.add('color', 'green');
            plyrOneScr.classList.add('color', 'red');
        } else {
            plyrOneScr.classList.remove('color');
            plyrTwoScr.classList.remove('color');
        }
    }   resetBttn.disabled = false;
        plusPlyr1Bttn.disabled = true;
        plusPlyr2Bttn.disabled = true;
        resetBttn.addEventListener('click', restart());
}

function restart() {
    location.reload();
}

window.addEventListener('load', (beginMatch));
