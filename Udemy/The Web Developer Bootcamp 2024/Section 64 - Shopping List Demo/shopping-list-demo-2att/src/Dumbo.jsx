import { useState } from 'react';

function generateInitialState() {
    console.log('Booting initial state');
    return Array(5000);
}

export default function Dumbo() {
    const [status, setStatus] = useState(generateInitialState);
    return (
        <button 
        onClick={() => setStatus('System Booted')}
        >Click to change State</button>
    )
}