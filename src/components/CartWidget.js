<<<<<<< HEAD
import { useContext } from "react"
import { Link } from "react-router-dom"
import {context} from './Contexts/CartProvider'

const CartWidget = (props) => {
    const {quantityInCart}=useContext(context)    
=======
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const CartWidget = (props) => {
    const [cart, setCartAmount]=useState()
    
    useEffect(() => {
        props.cartAmount && setCartAmount(props.cartAmount)
        // eslint-disable-next-line
    }, [])
    
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    return (
        <>
            
            <button id="botonUsuario" style={{display:"none"}}></button>
            
<<<<<<< HEAD
            <Link to="/Cart">
                <label htmlFor="botonUsuario" className="header_nav-button fas fa-shopping-cart"></label>
                <span className="header_quantity">{quantityInCart}</span>
            </Link>
=======
            <Link to="/Cart"><label htmlFor="botonUsuario" className="header_nav-button fas fa-shopping-cart"></label></Link>
            <span>{cart}</span>
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
        </>
    )
}

export default CartWidget
