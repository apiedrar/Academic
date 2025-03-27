let playerAttack
let opponentAttack
let playerPet
let opponentPet
let playerHp = 3
let opponentHp = 3
let deadEmoji = '💀'

function startGame() {
        let attackSelect = document.getElementById('attack-selection')
        attackSelect.style.display = 'none'
        let redo = document.getElementById('restart')
        redo.style.display = 'none'

    let petButton = document.getElementById('player-pet-button')
        petButton.addEventListener('click' , choosePet)

    let fireButton = document.getElementById('fire-button')
        fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('water-button')
        waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('earth-button')
        earthButton.addEventListener('click', earthAttack)
    let restartButton = document.getElementById('restart-button')
        restartButton.addEventListener('click', restartGame)
        
}

function choosePet() {
        let petSelect = document.getElementById('pet-selection')
        petSelect.style.display = 'none'
        let attackSelect = document.getElementById('attack-selection')
        attackSelect.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanPlayerPet = document.getElementById('player-pet')
    
    if (inputHipodoge.checked) {
        playerPet = 'Hipodoge'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Hipodoge! 🐶')
    }   else if (inputCapipepo.checked) {
        playerPet = 'Capipepo'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Capipepo! 🐹')
    }   else if (inputRatigueya.checked) {
        playerPet = 'Ratigueya'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Ratigueya! 🐀')
    }   else if (inputLangostelvis.checked) {
        playerPet = 'Langostelvis'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Langostelvis! 🦞')
    }   else if (inputTucapalma.checked) {
        playerPet = 'Tucapalma'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Tucapalma! 🌴')
    }   else if (inputPydos.checked) {
        playerPet = 'Pydos'
        spanPlayerPet.innerHTML = playerPet
            alert('You chose Pydos! 🐲')
    }   else {
            alert('You have to choose a Pet')
            restartGame()
    }
    chooseOpponentPet()
}

function chooseOpponentPet() {
        let randomPet = random(1,6)
        let spanOpponentPet = document.getElementById('opponent-pet')

        if (randomPet == 1) {
                opponentPet = 'Hipodoge'
               spanOpponentPet.innerHTML = opponentPet
        } else if (randomPet == 2) {
                opponentPet = 'Ratigueya'
                spanOpponentPet.innerHTML = opponentPet
        } else if (randomPet == 3) {
                opponentPet = 'Capipepo'
                spanOpponentPet.innerHTML = opponentPet
        } else if (randomPet == 4) {
                opponentPet = 'Langostelvis'
                spanOpponentPet.innerHTML = opponentPet
        } else if (randomPet == 5) {
                opponentPet = 'Tucapalma'
                spanOpponentPet.innerHTML = opponentPet
        } else {
                opponentPet = 'Pydos'
                spanOpponentPet.innerHTML = opponentPet
        }
}

function fireAttack() {
        playerAttack = '🔥'
        opponentRandomAttack()
}
function waterAttack() {
        playerAttack = '💧'
        opponentRandomAttack()
}
function earthAttack() {
        playerAttack = '⛰️'
        opponentRandomAttack()
}

function opponentRandomAttack(){
      let randomAttack = random(1,3)
      
      if (randomAttack == 1) {
        opponentAttack = '🔥'
      } else if (randomAttack == 2) {
        opponentAttack = '💧'
      } else {
        opponentAttack = '⛰️'
      }

      combat()
}

function combat() {
        let spanPlayerHp = document.getElementById('player-hp')
        let spanOpponentHp = document.getElementById('opponent-hp')

        if(opponentAttack == playerAttack) {
                createMessage("DRAW!")
            } else if(playerAttack == '🔥' && opponentAttack == '⛰️' || playerAttack == '💧' && opponentAttack == '🔥' || playerAttack == '⛰️' && opponentAttack == '💧') {
                createMessage("HIT! 🙌")
                opponentHp--
                spanOpponentHp.innerHTML = opponentHp
            } else {
                createMessage("DAMAGE! 🤕")
                playerHp--
                spanPlayerHp.innerHTML = playerHp
            }

            hpCheck()
}

function hpCheck() {
        let spanPlayerEmoji = document.getElementById('player-emoji')
        let spanOpponentEmoji = document.getElementById('opponent-emoji')

        if (opponentHp == 0) {
                createFinalMessage("YOU WIN! 🎉🏆")
                spanOpponentEmoji.innerHTML = deadEmoji
        } else if (playerHp == 0) {
                createFinalMessage("You Lost 😵")
                spanPlayerEmoji.innerHTML = deadEmoji
        }

}

function createMessage(combatResult) {
        let battleNotification = document.getElementById('result')
        let playerAttNotification = document.getElementById('player-attack')
        let opponentAttNotification = document.getElementById('opponent-attack')
        
        //let playerNewAttack = document.createElement('p')
        playerAttNotification.innerHTML = playerAttack
        //let opponentNewAttack = document.createElement('p')
        opponentAttNotification.innerHTML = opponentAttack

        //let paragraph = document.createElement('p')
        //paragraph.innerHTML = 'Your ' + playerPet + ' made a ' + playerAttack + ' attack. Opponent`s ' + opponentPet + ' made a ' + opponentAttack + ' attack - ' + combatResult
        
        battleNotification.innerHTML = combatResult
        //playerAttNotification.appendChild(playerNewAttack)
        //opponentAttNotification.appendChild(opponentNewAttack)

}

function createFinalMessage(finalResult) {
        let messagesSection = document.getElementById('result')

        messagesSection.innerHTML = finalResult

    let fireButton = document.getElementById('fire-button')
        fireButton.disabled = true
    let waterButton = document.getElementById('water-button')
        waterButton.disabled = true
    let earthButton = document.getElementById('earth-button')
        earthButton.disabled = true

        let redo = document.getElementById('restart')
        redo.style.display = 'flex'

}

function restartGame() {
        location.reload()
}

function random(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load' , startGame)