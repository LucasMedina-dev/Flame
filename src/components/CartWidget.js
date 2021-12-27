import { useState } from "react"
const CartWidget = (props) => {
    const [cart, setCartAmount]=useState()
    props.cartAmount && setCartAmount(props.cartAmount)
    return (
        <>
            <label htmlFor="botonUsuario" className="header_nav-button fas fa-shopping-cart"></label>
            <button id="botonUsuario" style={{display:"none"}}></button>
            <span>{cart}</span>
        </>
    )
}

export default CartWidget
