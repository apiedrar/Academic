export default function Clicker({ message, buttonText }) {
    const greet = () => (alert(message));
    return (
    <button onClick={greet}>{buttonText}</button>
    )
}