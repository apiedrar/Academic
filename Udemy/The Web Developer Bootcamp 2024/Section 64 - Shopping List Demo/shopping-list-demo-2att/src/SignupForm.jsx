import { useState } from "react";
function SignupForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const updateFirstname = (evt) => {
        setFirstname(evt.target.value);
    };
    const updateLastname = (evt) => {
        setLastname(evt.target.value);
    };
    return (
        <div>
            <h4 htmlFor='firstname'>Enter your First name</h4>
            <input 
            type="text" 
            placeholder="First name" 
            value={firstname} 
            onChange={updateFirstname}
            id='firstname'
             />
             <br />
            <h4 htmlFor='lastname'>Enter your Last name</h4>
            <input 
            type="text" 
            placeholder="Last name" 
            value={lastname} 
            onChange={updateLastname}
            id='lastname'
             />
             <br />
             <button>Submit</button>
        </div>
    )
}

export default SignupForm;