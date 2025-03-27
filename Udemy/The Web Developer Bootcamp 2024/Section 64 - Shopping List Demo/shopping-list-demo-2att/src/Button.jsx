import './App.css';

function Button({ clickFunc, label = 'Click Me!' }) {
    return <button onClick={clickFunc}>{label}</button>
}

export default Button;