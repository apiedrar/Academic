import { useState } from "react";
function UsernameForm() {
    const [username, setUsername] = useState('');
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    };
    return (
        <div>
            <h4 htmlFor='username'>Enter your username</h4>
            <input 
            type="text" 
            placeholder="username" 
            value={username} 
            onChange={updateUsername}
            id='username'
             />
             <br />
             <button>Submit</button>
        </div>
    )
}

export default UsernameForm;