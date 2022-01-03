import { useState } from "react"
import { Link } from "react-router-dom"

const CartWidget = (props) => {
    const [cart, setCartAmount]=useState()
    props.cartAmount && setCartAmount(props.cartAmount)
    return (
        <>
            
            <button id="botonUsuario" style={{display:"none"}}></button>
            
            <Link to="/Cart"><label htmlFor="botonUsuario" className="header_nav-button fas fa-shopping-cart"></label></Link>
            <span>{cart}</span>
        </>
    )
}

export default CartWidget
