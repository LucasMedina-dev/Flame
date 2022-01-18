import {createContext, useState, useEffect} from 'react'
import {collection, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase'
export const context = createContext()
const {Provider} = context

const CartProvider = ({children}) => {
    const [database, setDatabase]=useState([])
    useEffect(()=>{
        const productos=collection(db, 'Producto')
        const promesa = getDocs(productos)
        const data=[]
        promesa
        .then((resultado)=>{
            console.log(resultado)
            resultado.forEach((doc)=>{
                data.push(doc.data())
            })
        })
        setDatabase(data)
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
                const data= [...dataCart]
                const copiedProduct= data.find(e=> e.id===product.id)
                const index= data.findIndex((e)=> e.id===product.id)
                if(isInCart(product)){
                    copiedProduct.quantity= quantity 
                    data.splice(index,1,copiedProduct)     
                }
                if(!isInCart(product)){
                    product.quantity=quantity
                    data.push(product)
                }
                setDataCart(data)
                alert(`Usted tiene ${quantity} unidades al carrito`)
            break;
            case "buy":
                product.quantity=quantity
                setDataBuy(product)
            break;
        }
    }
    
    let totalAmount
    if (dataCart.length>0){
        totalAmount=dataCart.map(e=>e.price*e.quantity).reduce((a,b)=>{
            return a+b
        })
    }
    const Clear=()=>{
        setDataCart([])
    }
    const deleteItem=(product)=>{
        const data= [...dataCart]
        const index= dataCart.findIndex((e)=> e.id===product.id)
        data.splice(index, 1)
        setDataCart(data)
        console.log(dataCart)
    }
    const quantityInCart=dataCart.length
    
    const valueContext={
        database,
        dataCart,
        dataBuy,
        totalAmount,
        quantityInCart,
        refreshCart,
        isInCart,
        Clear,
        deleteItem
    }
    

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
export default CartProvider
