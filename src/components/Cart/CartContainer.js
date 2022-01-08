import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'
import ItemList from '../ItemListContainer/ItemList'

const CartContainer = (props) => {
    const {dataCart, Clear} = useContext(context)
    console.log(dataCart)
    
    return (
        <>
            <div className='product'>
                <ItemList products={dataCart}/>
            </div>
            <div className="options">
                <span className="options_clear" onClick={Clear}>Elminar todos los productos</span>
            </div>
        </>
        
    )
}

export default CartContainer
