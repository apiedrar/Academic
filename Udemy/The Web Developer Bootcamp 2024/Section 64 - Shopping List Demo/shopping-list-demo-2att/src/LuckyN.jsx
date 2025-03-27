import { useState } from 'react';
import { getRoll } from './utils.js';
import Dice from './Dice.jsx';
import Button from './Button.jsx';
function LuckyN({ title, numDice = 2, winCheck, color = 'slateblue', label }) {
    const [dice, setDice] = useState(getRoll(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRoll(numDice));
    return (
        <main className='Lucky'>
            <h1>{title} {isWinner && ' | You Win!'}</h1>
            <Dice dice={dice} color={color} />
            {/* <button onClick={roll}>Re-roll dice</button> */}
            <Button clickFunc={roll} label={label} />
        </main>
    );
}

export default LuckyN;