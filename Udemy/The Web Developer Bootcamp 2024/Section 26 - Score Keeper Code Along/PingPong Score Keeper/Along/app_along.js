const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetBttn = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#playto');
let winScore = 6;
let gamesOver = false;

const reset = () => (location.reload());

function updateScores (player, opponent) {
    if (!gamesOver) {
        player.score += 1;
        if (player.score === winScore) {
            gamesOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
        
}

p1.button.addEventListener('click', () => (updateScores(p1, p2)))

p2.button.addEventListener('click', () => (updateScores(p2, p1)))

winScoreSelect.addEventListener('change', function () {
    gamesOver = false;
    winScore = parseInt(this.value);
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
})

resetBttn.addEventListener('click', reset)