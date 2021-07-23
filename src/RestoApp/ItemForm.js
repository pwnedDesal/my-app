import InputField from '../components/InputField'
import ButtonPrimary from '../components/ButtonPrimary'
import { useEffect, useState } from 'react'

const ItemForm = ({item, addItem, updateItem, onEdit, cancel}) => {

    const [formItem, setFormItem] = useState(item)
    const [validations, setValidations] = useState({
        name: false,
        category: false,
        price: false,
        image: false,
    })
    const [isFormValid, setIsFormValid] = useState(false)

    const validate = (validateForm,field = null) => {

        const updateValidations = {...validations}

        if (field!=null) { // validate single field only
            updateValidations[field] = validateForm[field] === ""
        } else {
            let valids = []
            Object.keys(updateValidations).forEach(function(key) {
                const isValid = validateForm[key] !== ""
                valids.push(isValid)
                updateValidations[key] = !isValid
            });
            setIsFormValid(valids.every(valid => valid))      
        }

        setValidations(updateValidations)
    }

    const handleChange = (e) => {
        const formItemCopy = {...formItem}
        formItemCopy[e.target.name] = e.target.value
        validate(formItemCopy,e.target.name)
        setFormItem(formItemCopy)
    }    

    const cancelForm = () => {
        const updateValidations = {...validations}

        Object.keys(updateValidations).forEach(function(key) {
            updateValidations[key] = false
        });

        setIsFormValid(false)
        setValidations(updateValidations)
        
        cancel()
    }

    useEffect(() => {
        // No need to check if item is not undefined or null since it has properties with initial values
        setFormItem(item)
        if (item.id>0) validate(item)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                invalid={validations.name}
                invalidMessage="Name is required"
            />
            <InputField
                className=""
                type="text"
                label="Category"
                name="category"
                value={formItem.category}
                onChange={handleChange}
                invalid={validations.category}
                invalidMessage="Category is required"                
            />
            <InputField
                className=""
                type="number"
                label="Price"
                name="price"
                value={formItem.price}
                onChange={handleChange}
                invalid={validations.price}
                invalidMessage="Price is required"                
            />
            <InputField
                className=""
                type="text"
                label="Image"
                name="image"
                value={formItem.image}
                onChange={handleChange}
                invalid={validations.image}
                invalidMessage="Image is required"                
            />
            {
                onEdit
                ?
                <div>
                    <ButtonPrimary className="mt-4" onClick={() => updateItem(formItem)}>Update</ButtonPrimary>
                    <ButtonPrimary className="mt-4 ml-1" onClick={cancelForm}>Cancel</ButtonPrimary>
                </div>
                :
                <ButtonPrimary className="mt-4" onClick={() => {
                    validate(formItem)
                    if (isFormValid) addItem(formItem)
                }}>Add</ButtonPrimary>
            }
        </div>
    )

}

export default ItemForm