import { useState } from 'react'

import ItemBox from './RestoApp/ItemBox'
import OrderBox from './RestoApp/OrderBox'
import ItemForm from './RestoApp/ItemForm'
import PaginateList from './components/PaginateList'

import Filters from './RestoApp/Filters'

import { item as initItem, items as itemsData } from './RestoApp/Data'
const perPage = 6

const RestoApp = () => {

    const [item, setItem] = useState({...initItem})    
    const [items, setItems] = useState(itemsData)
    const [orders, setOrders] = useState([])
    const [onEdit, setOnEdit] = useState(false)
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)

    const addItem = (formItem) => {
        const copyItems = [...items]
        formItem.id = items.length + 1
        copyItems.push(formItem)
        setItems(copyItems)
        setItem({...initItem})
    }

    const editItem = (selectedItem) => {

        setItem(selectedItem)
        setOnEdit(true)

    }

    const updateItem = (selectedItem) => {

        const index = items.findIndex(item => item.id === selectedItem.id)

        const itemsCopy = [...items]
        itemsCopy[index] = {...selectedItem}

        setItems(itemsCopy)
        setItem({...initItem})
        setOnEdit(false)

    }
    
    const deleteItem = (id) => {

        const index = items.findIndex(item => item.id === id)

        const itemsCopy = [...items]
        itemsCopy.splice(index,1)

        setItems(itemsCopy)
        if (itemsCopy.length<=perPage) setPage(0)

    }

    const cancel = () => {
        setItem({...initItem})
        setOnEdit(false)
    }    

    const handleOrder = (order) => {

        const index = orders.findIndex(row =>
            row.id === order.id
        )
        const isNewOrder = index < 0

        const copyOrders = [...orders]
        if (isNewOrder) {
            const newOrder = {
                ...order,
                quantity: 1
            }
            copyOrders.push(newOrder)
        } else {
            copyOrders[index].quantity++
        }

        setOrders(copyOrders)
    }

    const deleteOrder = (id) => {

        const index = orders.findIndex(row =>
            row.id === id
        )

        if (index < 0) {
            return
        }

        const copyOrders = [...orders]

        if (copyOrders[index].quantity > 1) {
            copyOrders[index].quantity--
        } else {
            copyOrders.splice(index,1)
        }

        setOrders(copyOrders)

    }

    const filteredItems = (filter==="All") ? [...items] : items.filter(item => item.category === filter)

    const itemsDisplay = filteredItems.filter(item => 
        search===""
        ?
        true
        :
        item.name.toLowerCase().includes(search.toLowerCase()))
        .map(item => 
            <ItemBox
                item={item}
                handleOrder={handleOrder}
                editItem={editItem}
                deleteItem={deleteItem}
                key={item.id}
            />
    )

    const ordersDisplay = orders.map(order =>
        <OrderBox item={order} deleteOrder={deleteOrder} key={order.id} />
    )

    return (
        <div>
            <h1 className="text-2xl py-7 text-center">Restaurant App</h1>            
            <ItemForm addItem={addItem} updateItem={updateItem} item={item} onEdit={onEdit} cancel={cancel} />
            <Filters setFilter={setFilter} search={search} setSearch={setSearch} />
            <div className="mt-4 grid grid-cols-2 gap-2 divide-x-2">
                <div className="p-2">
                    <h3 className="text-gray-300">Items</h3>
                    <PaginateList page={page} setPage={setPage} perPage={perPage} data={itemsDisplay} />
                </div>
                <div className="pt-2 pl-4">
                    <h3 className="text-gray-300">Cart</h3>
                    {ordersDisplay.length > 0
                    ?
                    <div className="grid grid-cols-3 gap-0 place-items-center">
                        {ordersDisplay}
                    </div>
                    : <h3 className="text-center text-gray-300">Your cart is empty</h3>
                    }
                </div>
            </div>
        </div>
    )

}

export default RestoApp