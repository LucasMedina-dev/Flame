import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'
import ItemList from '../ItemListContainer/ItemList'

const CartContainer = () => {
    const {dataCart, Clear} = useContext(context)
    console.log(dataCart)
    
    return (
        <>
            <div className='product'>
                <ItemList products={dataCart}/>
            </div>
            <div className="options">
                <span className="options_button options_button-red" onClick={Clear}>Elminar todos los productos</span>
            </div>
        </>
        
    )
}

export default CartContainer
