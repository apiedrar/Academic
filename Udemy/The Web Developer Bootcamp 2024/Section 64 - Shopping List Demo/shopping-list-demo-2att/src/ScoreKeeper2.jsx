import { useState } from 'react';
export default function ScoreKeeper2({numPlayers=4, target=10}) {
    const [game, setGame] = useState(new Array(numPlayers).fill(0));
    const addPoints = (id) => {
        setGame((prevPnts) => {
            return prevPnts.map((score, idx) => {
                if (id === idx) {
                    return score += 1;
                } else {
                    return score;
                }
            })
        })
    }
    const reset = () => {
        setGame(new Array(numPlayers).fill(0));
    }
    return (
        <div>
            <h1>Dominoes Score Keeper</h1>
            <ul>
                {game.map((scr, idx) => {
                    return (
                    <li key={idx}
                    >Player {idx + 1}: {scr} 
                    <button 
                    onClick={() => addPoints(idx)}
                    >+ 1</button>
                    {scr >= target && 'WINNER!'}
                    </li>
                    )
                })}
            </ul>
            <button 
            onClick={reset}
            >Reset
            </button>
        </div>
    )
 }