import './PropertyList.css'
import Listing from './Listing.jsx'
function PropertyList({ properties }) {
    return (
        <div className='PropertyList'>
            {properties.map((p) => {
               return <Listing key={p.id} property {...p} />
            })}
        </div>
    )
}

export default PropertyList