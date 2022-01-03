import {createContext, useState} from 'react'

export const context = createContext()
const {Provider} = context
const CartProvider = ({children}) => {
    const [dataCart, setDataCart]=useState([]) //Aca se va a guardar los productos del carrito
    const [dataBuy, setDataBuy]=useState([]) //Aca se va a guardar el producto de la compra actual
    const isInCart=(product)=>{
        if(dataCart.find(e=>e.id===product.id)){
            return true
        }else{
            return false
        }
    }
    const refreshCart=(product, quantity, action)=>{
        switch (action){
            case "cart":
                const data= [...dataCart]
                console.log(product.quantity)
                if (!product.quantity){
                    product.quantity=quantity
                }else{
                    product.quantity=product.quantity+quantity
                }
                if(isInCart(product)){
                    console.log("existe, se suma el purchased al quantity")
                    
                }else{
                    console.log("no existe, se agrega")
                    data.push(product)
                }
                setDataCart(data)
                console.log(data)
            break;
            case "buy":
                product.quantity=quantity
                setDataBuy(product)
            break;
        }
        
    }
    

    const valueContext={
        dataCart,
        dataBuy,
        refreshCart
    }


    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
export default CartProvider
