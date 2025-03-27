import { useState } from "react";
function BetterSignupForm() {
    const [formData, setFormData] = useState(
        {firstName: '', 
        lastName: '', 
        password: ''});
    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
            [evt.target.name]: evt.target.value
        };
        })
    };
    const handleSubmit = () => {
        console.log(`Welcome, ${formData.firstName} ${formData.lastName}! You entered the correct Password`);
    }
    return (
        <div>
            <h4 htmlFor='firstname'>Enter your First name</h4>
            <input 
            type="text" 
            placeholder="First name" 
            value={formData.firstName} 
            onChange={handleChange} 
            name='firstName' 
            id='firstname'
             />
             <br />
            <h4 htmlFor='lastname'>Enter your Last name</h4>
            <input 
            type="text" 
            placeholder="Last name" 
            value={formData.lastName} 
            onChange={handleChange}
            name='lastName' 
            id='lastname'
             />
             <br />
            <h4 htmlFor='password'>Enter your Password</h4>
            <input 
            type='password' 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange}
            name='password' 
            id='password'
             />
             <br />
             <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BetterSignupForm;