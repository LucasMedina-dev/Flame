import {createContext, useState, useEffect} from 'react'

export const context = createContext()
const {Provider} = context
const CartProvider = ({children}) => {
    const [database, setDatabase]=useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/LucasMedina-dev/dbserver/productos')
        .then((res)=>{
          const data= res.json()
          return data
        })
        .then((data)=>{
          setDatabase(data)
        })
    },[])
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
                const copiedProduct= data.find(e=> e.id===product.id)
                let index= data.findIndex((e)=> e.id===product.id)
                if(isInCart(product) && copiedProduct.quantity<product.stock){
                    copiedProduct.quantity= copiedProduct.quantity+quantity
                    data.splice(index,1,copiedProduct)           
                }
                if(!isInCart(product)){
                    product.quantity=quantity
                    data.push(product)
                }
                setDataCart(data)
            break;
            case "buy":
                product.quantity=quantity
                setDataBuy(product)
            break;
        }
        console.log(dataCart)
    }
    const Clear=()=>{
        setDataCart([])
    }
    const valueContext={
        database,
        dataCart,
        dataBuy,
        refreshCart,
        isInCart,
        Clear
    }
    

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
export default CartProvider
