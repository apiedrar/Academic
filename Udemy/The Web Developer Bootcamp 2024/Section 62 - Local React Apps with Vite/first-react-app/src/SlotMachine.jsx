export default function SlotMachine({ val1, val2, val3 }) {
    const values = [val1, val2, val3];
    const isWin = val1 === val2 && val1 === val3;
    return (
        <div>
            <h1>{values}</h1>
            <h2 style={{color: isWin ? 'green' : 'red'}}>{isWin ? 'You Win! 🤑' : 'You Loose :('}</h2>
            {isWin && <h3>Congrats!</h3>}
        </div>
    );
}