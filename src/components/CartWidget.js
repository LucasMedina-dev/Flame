import { useContext } from "react"
import { Link } from "react-router-dom"
import {context} from './Contexts/CartProvider'

const CartWidget = (props) => {
    const {quantityInCart}=useContext(context)    
    return (
        <>
            
            <button id="botonUsuario" style={{display:"none"}}></button>
            
            <Link to="/Cart">
                <label htmlFor="botonUsuario" className="header_nav-button fas fa-shopping-cart"></label>
                <span className="header_quantity">{quantityInCart}</span>
            </Link>
        </>
    )
}

export default CartWidget
