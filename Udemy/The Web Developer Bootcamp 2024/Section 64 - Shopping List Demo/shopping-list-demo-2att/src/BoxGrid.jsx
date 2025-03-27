import { useState } from 'react';
import Box from './Box.jsx';
import './BoxGrid.css';
function BoxGrid() {
    const [boxes, setBoxes] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]);
    };
    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((val, i) => {
                if (i === idx) {
                    return !val;
                } else {
                    return val;
                }
            })
        })
    }
    return (
        <div className='BoxGrid'>
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggle={() => toggleBox(idx)}/>
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default BoxGrid;