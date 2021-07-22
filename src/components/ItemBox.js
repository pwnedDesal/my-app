import React from 'react';

import Button from './Button'

class ItemBox extends React.Component {

    handleOrder = (order) => {
        this.props.handleOrder(order)
    }

    render() {

        const { item: { image, name, category, price } } = this.props

        return (
            <div className="flex p-1 w-44 my-2 bg-gray-700 rounded-xl shadow-md items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-14 w-14" src={image} alt={name} />
                </div>
                <div className="text-gray-300">
                    <div className="text-lg font-medium">{name}</div>
                    <p className="text-sm">{category}</p>
                    <p className="text-sm">Php {price}</p>
                    <Button className="mt-2" onClick={() => this.handleOrder(this.props.item)}>Order</Button>
                </div>
            </div>
        )

    }

}

export default ItemBox