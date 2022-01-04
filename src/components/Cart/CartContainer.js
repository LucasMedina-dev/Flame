import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'
import ItemList from '../ItemListContainer/ItemList'

const CartContainer = (props) => {
    const {dataCart} = useContext(context)
    console.log(dataCart)
    
    return (
        <div className='product'>
            <ItemList products={dataCart}/>
        </div>
    )
}

export default CartContainer
