import ButtonOutlined from './ButtonOutlined'

const ItemBox = ({item, handleOrder, editItem, deleteItem}) => {

    const { image, name, category, price } = item

    return (
        <div className="flex p-1 w-44 my-2 bg-gray-700 rounded-xl shadow-md items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-14 w-14" src={image} alt={name} />
            </div>
            <div className="text-gray-300">
                <div className="text-lg font-medium">{name}</div>
                <p className="text-sm">{category}</p>
                <p className="text-sm">Php {price}</p>
                <ButtonOutlined className="mt-2" onClick={() => handleOrder(item)}>Order</ButtonOutlined>
                <ButtonOutlined className="mt-2" onClick={() => editItem(item)}>Edit</ButtonOutlined>
                <ButtonOutlined className="mt-2" onClick={() => deleteItem(item.id)}>Delete</ButtonOutlined>
            </div>
        </div>
    )

}

export default ItemBox