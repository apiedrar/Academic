import ListItem from './ListItem.jsx'
function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ListItem item={i} key={i.id} />
            ))}
        </ul>
    )
}

export default ShoppingList