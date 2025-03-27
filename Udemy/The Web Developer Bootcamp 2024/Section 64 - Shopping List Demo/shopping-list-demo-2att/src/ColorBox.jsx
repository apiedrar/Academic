import { useState } from 'react';
import './ColorBox.css';

function flipColor(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}


function ColorBox({ colors }) {
    const [color, setColor] = useState(flipColor(colors));
    const switchColor = () => {
        const randomColor = flipColor(colors);
        setColor(randomColor)
    }
    return (
        <div 
            className='ColorBox' 
            onClick={switchColor} 
            style={{backgroundColor : color}}
        ></div>
    )
}

export default ColorBox