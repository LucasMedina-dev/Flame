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
    const refreshCart=(product, quantity, doAction)=>{
        // eslint-disable-next-line
        switch (doAction){
            case "cart":
<<<<<<< HEAD
                const data= [...dataCart]
                const copiedProduct= data.find(e=> e.id===product.id)
                const index= data.findIndex((e)=> e.id===product.id)
                if(isInCart(product)){
                    copiedProduct.quantity= quantity 
                    data.splice(index,1,copiedProduct)     
=======
                alert(`Se agregaron ${quantity} productos al carrito`)
                const data= [...dataCart]
                const copiedProduct= data.find(e=> e.id===product.id)
                let index= data.findIndex((e)=> e.id===product.id)
                if(isInCart(product) && copiedProduct.quantity<product.stock){
                    copiedProduct.quantity= copiedProduct.quantity+quantity
                    data.splice(index,1,copiedProduct)           
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
                }
                if(!isInCart(product)){
                    product.quantity=quantity
                    data.push(product)
                }
                setDataCart(data)
<<<<<<< HEAD
                alert(`Usted tiene ${quantity} unidades al carrito`)
=======
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
            break;
            case "buy":
                product.quantity=quantity
                setDataBuy(product)
            break;
        }
<<<<<<< HEAD
    }
    
    let totalAmount
    if (dataCart.length>0){
        totalAmount=dataCart.map(e=>e.price*e.quantity).reduce((a,b)=>{
            return a+b
        })
=======
        console.log(dataCart)
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    }
    const Clear=()=>{
        setDataCart([])
    }
<<<<<<< HEAD
    const deleteItem=(product)=>{
        const data= [...dataCart]
        const index= dataCart.findIndex((e)=> e.id===product.id)
        data.splice(index, 1)
        setDataCart(data)
        console.log(dataCart)
    }
    const quantityInCart=dataCart.length
    
=======
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    const valueContext={
        database,
        dataCart,
        dataBuy,
<<<<<<< HEAD
        totalAmount,
        quantityInCart,
        refreshCart,
        isInCart,
        Clear,
        deleteItem
=======
        refreshCart,
        isInCart,
        Clear
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    }
    

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
export default CartProvider
