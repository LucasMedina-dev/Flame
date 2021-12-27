import {useContext} from 'react'
import {context} from '../Contexts/CartProvider'

const CartContainer = (props) => {
    const resultado = useContext(context)
    console.log(resultado)
    return (
        <p>carrito{resultado.id}</p>
    )
}

export default CartContainer
