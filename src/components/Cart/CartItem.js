import {Link} from 'react-router-dom'
import { context } from '../Contexts/CartProvider'
import { useContext } from 'react'

const CartItem = ({item}) => {
    const {deleteItem}=useContext(context)
    const deleteSelf=()=>{
        deleteItem(item)
    }
    return (
        <div className="cart_item">
            <img className="cart_image" src={item.img} alt={"item"+item.id}></img>
            <div className="cart_descriptiom-area">
                <p className="cart_title">{item.name}</p>
                <p className="cart_description">{item.description}</p>
                <p className="cart_quantity">{item.quantity} unidades</p>
                <p>Total: ${item.quantity*item.price}</p>
            </div>
            <div className="cart_options">
                <span className='cart_options-green'><Link to={`/Productos/${item.id}`}>Modificar cantidad</Link></span>
                <span className='cart_options-red' onClick={deleteSelf}>Eliminar producto</span>
            </div>
            
        </div>
    )
}

export default CartItem
