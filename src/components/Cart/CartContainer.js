import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'
import CartItemList from './CartItemList'
import { Link } from "react-router-dom";

const CartContainer = () => {
    const {dataCart, Clear,totalAmount} = useContext(context)
    
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
}

export default CartContainer
