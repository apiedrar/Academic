function ListItem({ item }) {
    const styles = {
        color: item.completed ? 'grey' : 'red',
        textDecoration: item.completed ? 'line-through' : 'none'
    };
    return (
        <li style={styles}>
            {item.item} - {item.quantity}
        </li>
    )
}

export default ListItem