import InputField from '../components/InputField'
import ButtonPrimary from '../components/ButtonPrimary'
// import { useEffect, useState } from 'react'

import useValidations from './useValidations'

const ItemForm = ({item, addItem, updateItem, onEdit, cancel}) => {

    const schema = {
        name: {
            required: true,
            message: "Name is required",
        },
        category: {
            required: true,
            message: "Category is required"
        },
        price: {
            required: true,
            message: "Price is required"
        },
        image: {
            required: false,
            message: "Image is required"
        }
    }

    const {
        handleField,
        values,
        errors,
        submitForm,
        resetValidations
    } = useValidations({
        schema,
        initValues: item,
        handler: addItem
    })

    const cancelForm = () => {
        resetValidations()
        cancel()
    }

    return (
        <div className="grid grid-cols-5 gap-2">
            <InputField
                className=""
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleField}
                invalid={errors.name?.invalid}
                invalidMessage={errors.name.message}
            />
            <InputField
                className=""
                type="text"
                label="Category"
                name="category"
                value={values.category}
                onChange={handleField}
                invalid={errors.category?.invalid}
                invalidMessage={errors.category.message}            
            />
            <InputField
                className=""
                type="number"
                label="Price"
                name="price"
                value={values.price}
                onChange={handleField}
                invalid={errors.price?.invalid}
                invalidMessage={errors.price.message}
            />
            <InputField
                className=""
                type="text"
                label="Image"
                name="image"
                value={values.image}
                onChange={handleField}
                invalid={errors.image?.invalid}
                invalidMessage={errors.image.message}                
            />
            {
                onEdit
                ?
                <div>
                    <ButtonPrimary className="mt-4" onClick={() => updateItem(values)}>Update</ButtonPrimary>
                    <ButtonPrimary className="mt-4 ml-1" onClick={cancelForm}>Cancel</ButtonPrimary>
                </div>
                :
                <ButtonPrimary className="mt-4" onClick={() => submitForm()}>Add</ButtonPrimary>
            }
        </div>
    )

}

export default ItemForm