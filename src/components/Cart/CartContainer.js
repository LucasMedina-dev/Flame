import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'
<<<<<<< HEAD
import CartItemList from './CartItemList'
import { Link } from "react-router-dom";

const CartContainer = () => {
    const {dataCart, Clear,totalAmount} = useContext(context)
    console.log(dataCart)
    if(dataCart.length>0){
        return(
            <>
                <div className='product'>
                    <CartItemList products={dataCart}/>
                </div>
                
                <div className="options">
                    <div className="options_resume">
                        <p className="options_resume-style">TOTAL ${totalAmount}</p>
                    </div>
                    <span className="cut"></span>
                    <span className="options_button options_button-red" onClick={Clear}>Elminar todos los productos</span>
                </div>
            </>
        )
    }else{
        return(
            <div className='alert'>
                <h1>No hay productos en su carrito</h1>
                <Link to='/Productos'><span className='alert_return'>Ir al buscador</span></Link>
            </div>
        )
    }
=======
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
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
}

export default CartContainer
