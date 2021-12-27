import {createContext} from 'react'
import { useParams } from 'react-router-dom'

export const context = createContext()
const {Provider} = context
const CartProvider = (props, {children}) => {
    console.log(props)
    const {id}= useParams()
    const valueContext={
        id
    }
    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}

export default CartProvider
