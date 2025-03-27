import './ColorBoxGrid.css';
import ColorBox from './ColorBox.jsx';

function ColorBoxGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++){
        boxes.push(<ColorBox colors={colors} />);
    }
    return (
        <div className='grid'>
            {boxes}
        </div>
    )
}

export default ColorBoxGrid