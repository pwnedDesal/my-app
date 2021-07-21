import React from 'react';

import ItemBox from './ItemBox'
import OrderBox from './OrderBox'
import AddItemForm from './AddItemForm'

class RestoApp extends React.Component {

    state = {
        filter: 'All',
        items: [
            {
                id: 1,
                name: "Burger",
                price: 50,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
            },
            {
                id: 2,
                name: "Pizza",
                price: 100,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
            },
            {
                id: 3,
                name: "Fries",
                price: 25,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
            },
            {
                id: 4,
                name: "Coffee",
                price: 35,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
            },
            {
                id: 5,
                name: "Iced Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
            },
            {
                id: 6,
                name: "Hot Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
            },
        ],
        orders: []
    }

    addItem = (item) => {
        const copyItems = [...this.state.items]
        copyItems.push(item)
        this.setState({items: copyItems})
    }

    handleOrder = (order) => {
        alert(order.name)

        let quantity = 1

        const checkOrder = this.state.orders.filter(row =>
            row.id === order.id  
        )

        const sameOrder = checkOrder.length > 0

        const newOrder = {
            ...order,
            quantity
        }

        const copyOrders = this.state.orders
        if (sameOrder) {
            quantity = checkOrder[0].quantity + 1
            copyOrders.map(row => {
                if (row.id === order.id) {
                    row.quantity = quantity
                }
                return row
            })
        } else {
            copyOrders.push(newOrder)
        }

        this.setState({orders: copyOrders})
    }

    render() {

        const filteredItems = (this.state.filter==="All") ? this.state.items : this.state.items.filter(item => item.category === this.state.filter)

        const items = filteredItems.map(item => 
            <ItemBox item={item} handleOrder={this.handleOrder} key={item.id} />
        )

        const orders = this.state.orders.map(order =>
            <OrderBox item={order} key={order.id} />
        )

        return (
            <>
                <h1>Restaurant App</h1>
                <AddItemForm addItem={this.addItem} />
                <div className="items">
                    {items}
                </div>
                <hr />
                <h3>Cart</h3>                
                <div>
                <div className="items">
                    {orders}
                </div>
                </div>
            </>
        )

    }

}

export default RestoApp