export default function DoubleCheck() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return (
        <div>
            <h2>
                Dice Double Check! (Go ahead, you can double check)
            </h2>
            {die1 === die2 ? <h3>You Win! :D</h3> : null}
            <p>Your roll: {die1}</p>
            <p>CPU's roll: {die2}</p>
        </div>
    );
}