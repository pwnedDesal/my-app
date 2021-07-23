import InputField from './InputField'
import ButtonPrimary from './ButtonPrimary'
import { useEffect, useState } from 'react'

const ItemForm = ({item, addItem, updateItem, onEdit, cancel}) => {

    const [formItem, setFormItem] = useState(item)

    const handleChange = (e) => {
        const formItemCopy = {...formItem}
        formItemCopy[e.target.name] = e.target.value
        setFormItem(formItemCopy)
    }

    useEffect(() => {
        // No need to check if item is not undefined or null since it has properties with initial values
        setFormItem(item)
    },[item])

    return (
        <div className="grid grid-cols-5 gap-2">
            <InputField
                className=""
                type="text"
                label="Name"
                name="name"
                value={formItem.name}
                onChange={handleChange}
            />
            <InputField
                className=""
                type="text"
                label="Category"
                name="category"
                value={formItem.category}
                onChange={handleChange}
            />
            <InputField
                className=""
                type="number"
                label="Price"
                name="price"
                value={formItem.price}
                onChange={handleChange}
            />
            <InputField
                className=""
                type="text"
                label="Image"
                name="image"
                value={formItem.image}
                onChange={handleChange}
            />
            {
                onEdit
                ?
                <div>
                    <ButtonPrimary className="mt-4" onClick={() => updateItem(formItem)}>Update</ButtonPrimary>
                    <ButtonPrimary className="mt-4 ml-1" onClick={cancel}>Cancel</ButtonPrimary>
                </div>
                :
                <ButtonPrimary className="mt-4" onClick={() => addItem(formItem)}>Add</ButtonPrimary>
            }
        </div>
    )

}

export default ItemForm