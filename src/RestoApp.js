import { useState } from 'react'

import ItemBox from './RestoApp/ItemBox'
import OrderBox from './RestoApp/OrderBox'
import ItemForm from './RestoApp/ItemForm'
import Pagination from './components/Pagination'

import Filters from './RestoApp/Filters'

const RestoApp = () => {

    const initItem = {
        id: 0,
        name: '',
        category: '',
        price: '',
        image: ''
    }
    const [item, setItem] = useState({...initItem})    
    const [items, setItems] = useState([
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
    ])
    const [orders, setOrders] = useState([])
    const [onEdit, setOnEdit] = useState(false)
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)

    const perPage = 6

    const addItem = (formItem) => {
        const copyItems = [...items]
        formItem.id = items.length + 1
        copyItems.push(formItem)
        setItems(copyItems)
        setItem({...initItem})
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

    let start = page * perPage
    let end = start + perPage
    const paginatedDisplay = itemsDisplay.slice(start,end)
    let totalPages = Math.ceil(itemsDisplay.length / perPage)
    if (itemsDisplay.length<perPage) totalPages = 1

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
                    <div className="grid grid-cols-3 gap-0 place-items-center">
                        {paginatedDisplay}
                    </div>
                    {itemsDisplay.length>perPage && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
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