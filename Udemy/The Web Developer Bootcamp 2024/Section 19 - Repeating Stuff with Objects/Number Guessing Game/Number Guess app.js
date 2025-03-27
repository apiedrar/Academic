let maximum = parseInt(prompt('Enter the maximum number! 😁'));

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number! 🤨'));
}

const targetNum = Math.floor(Math.random() * maximum) +1;

let guess = prompt('Enter your first guess! Or type "Q" to quit');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'Q') break;
    guess = parseInt(guess);
    if (guess < targetNum) {
        guess = prompt('Too LOW. Try a higher number');
        attempts++;
    }
    else if (guess > targetNum) {
        guess = prompt('Too HIGH. Try a lower number');
        attempts++;
    }
    else {
        guess = prompt('Invalid guess. Try a valid number or type "Q" to quit.');
    }
}

if (guess === 'Q') {
    console.log('Ok... quitter');
} else {
    console.log('Congrats, you win!');
    console.log(`You got it! It took you ${attempts} guesses.`)
}
