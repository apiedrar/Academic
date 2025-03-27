import { useState } from 'react';

export default function Counter2() {
    console.log('Re-rendered!')
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount((currentCount) => currentCount + 1);
    }
    const addThree = () => {
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    }
    const setToTen = () => {
        setCount(10);
    }
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to Ten</button>
        </div>
    )
}