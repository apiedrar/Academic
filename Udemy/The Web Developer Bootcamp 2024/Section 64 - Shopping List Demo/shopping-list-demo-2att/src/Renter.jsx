function RentMe() {
    alert('Please, log in first to book!')
}

export default function Renter() {
    return <button onMouseOver={RentMe}>Rent</button>
}