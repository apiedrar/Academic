import { useState } from "react";
import './ShoppingListForm.css';
function ShoppingListForm({ submit }) {
    const [formData, setFormData] = useState({product: '', quantity: 0});
    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            }
        })
    }
    const handleSubmit = (evet) => {
        evet.preventDefault();
        submit(formData);
        setFormData({ product: '', quantity: 0 });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input 
            type="text" 
            placeholder="Product Name" 
            name="product" 
            id="product" 
            onChange={handleChange} 
            value={formData.product}
            />
            <br />
            <label htmlFor="product">Product Quantity</label>
            <input 
            type="number" 
            placeholder="Qty" 
            name="quantity" 
            id="quantity" 
            onChange={handleChange} 
            value={formData.quantity}
            />
            <br />
            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;