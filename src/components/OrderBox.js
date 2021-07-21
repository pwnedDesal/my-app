import React from 'react';

class ItemBox extends React.Component {

    handleOrder = (order) => {
        this.props.handleOrder(order)
    }

    render() {

        const { item: { image, name, price, quantity } } = this.props

        return (
            <div className="item">
                <div className="image"><img src={image} alt={name} /></div>
                <div className="details">
                    <strong>{name}</strong>
                    <small>Php {price}</small>
                    <small>Quantity: {quantity}</small>
                </div>
            </div>
        )

    }

}

export default ItemBox