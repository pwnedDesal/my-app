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

        const getOrder = this.state.orders.filter(row =>
            row.id === order.id  
        )
        const isNewOrder = getOrder.length === 0

        const copyOrders = this.state.orders
        if (isNewOrder) {
            const newOrder = {
                ...order,
                quantity: 1
            }            
            copyOrders.push(newOrder)
        } else {
            copyOrders.map(row => {
                if (row.id === order.id) {
                    row.quantity = getOrder[0].quantity + 1
                }
                return row
            })            
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
            <div>
                <h1 className="text-2xl py-7 text-center">Restaurant App</h1>            
                <AddItemForm addItem={this.addItem} />
                <div className="grid grid-cols-2 gap-2 divide-x-2">
                    <div className="p-2">
                        <h3>Items</h3>
                        <div className="grid grid-cols-3 gap-0 place-items-center">
                            {items}
                        </div>
                    </div>
                    <div className="pt-2 pl-4">
                        <h3>Cart</h3>
                        {orders.length > 0
                        ?
                        <div className="grid grid-cols-3 gap-0 place-items-center">
                            {orders}
                        </div>
                        : <h3 className="text-center">Your cart is empty</h3>
                        }
                    </div>
                </div>
            </div>
        )

    }

}

export default RestoApp