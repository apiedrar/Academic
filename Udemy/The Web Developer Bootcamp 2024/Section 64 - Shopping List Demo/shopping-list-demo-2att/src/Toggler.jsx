import { useState } from 'react';
import './Toggler.css';

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    return (
        <button 
        className='Toggler' 
        onClick={() => setIsHappy(!isHappy)}>
            {isHappy ? '🤑' : '🤬'}
        </button>
    )
}