import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ShoppingListForm from './ShoppingListForm';
function ShoppingList2() {
    const [items, setItems] = useState([]);
    const addItem = ((item) => {
        setItems((currItems) => {
            return [...currItems, 
                { ...item, id: uuidv4()}
            ]
        })
    })
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => {
                    return <li key={i.id}>
                            {i.product} - {i.quantity}
                            </li>
                })}
            </ul>
            <ShoppingListForm submit={addItem} />
        </div>
    )
}

export default ShoppingList2;