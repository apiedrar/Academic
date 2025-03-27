import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
function randomEmoji() {
    const choices = ['🤑', '🤬', '😎', '🥹', '🤣', '🤨', '😏'];
    return choices[Math.floor(Math.random() * choices.length)];
}
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuidv4(), emoji: randomEmoji() }]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuidv4(), emoji: randomEmoji() }]);
    };
    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter(e => e.id !== id);
        })
    }
    const makeAllHearts = () => {
        setEmojis((previEmojis) => {
            return previEmojis.map((e) => {
                return {...e, emoji: '❤️'}
            })
        })
    }
    return (
        <div>
            {emojis.map((e) => (
            <span 
            onClick={() => deleteEmoji(e.id)} 
            key={e.id} 
            style={{fontSize: '4em'}}
            >
                {e.emoji}
            </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeAllHearts}>Make 'em All hearts</button>
        </div>
    )
}