import Die from './Die.jsx';
import './Dice.css';
function Dice({ dice, color }) {
    return (
        <section className='Dice'>
            {dice.map((v, i) => (
                <Die key={i} value={v} color={color} />
            ))}
        </section>
    );
}

export default Dice;