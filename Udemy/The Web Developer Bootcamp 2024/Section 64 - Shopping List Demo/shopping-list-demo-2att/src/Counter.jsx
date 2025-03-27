import { useState } from 'react';

export default function Counter() {
    const [num, setNum] = useState(0);
    return (
        <div>
            <p>
                The count is: {num}
            </p>
            <button 
            onClick={() => (setNum(num + 1))}>
                Increment
            </button>
        </div>
    )
}