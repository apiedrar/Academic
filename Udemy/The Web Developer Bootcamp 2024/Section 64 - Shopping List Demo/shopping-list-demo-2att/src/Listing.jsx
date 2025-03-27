import Renter from './Renter'
import './Listing.css'

function Listing({ name, price, rating }) {
    return (
        <div className='Property'>
            <h2>
                {name}
            </h2>
            <h3>
                {`US$ ${price}.00 per Night`}
            </h3>
            <h4>
                {`⭐️ ${rating}`}
            </h4>
            <Renter />
        </div>
    )
}

export default Listing