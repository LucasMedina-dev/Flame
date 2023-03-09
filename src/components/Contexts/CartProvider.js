import {createContext, useState, useEffect } from 'react'
import { collection, setDoc, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase';
import Swal from 'sweetalert2';

export const context = createContext()
const {Provider} = context

const CartProvider = ({children}) => {
    const [dataCart, setDataCart]=useState([]) 
    const [dataBuy, setDataBuy]=useState([])
    const [quantityInCart, setQuantityInCart]=useState()

    // Contenedor de productos
    const data=[]
    const productsCollection=collection(db, 'Carrito')
    const pedido=()=>{
        const getProducts = getDocs(productsCollection)
        getProducts
        .then((result)=>{
            result.forEach((doc)=>{
                data.push(doc.data())
            })
            data.sort((a,b)=>(a.id - b.id))
            setDataCart(data)
            setQuantityInCart(data.length)
        })
    }//-------------------------------------

    // Pedido inicial al requerir productos
    useEffect(()=>{
        pedido()
        // eslint-disable-next-line
    },[])
    //-------------------------------------

    //Consulta si existe el producto en el carrito
    const isInCart=(product)=>{
        if(dataCart.find(e=>e.id===product.id)){
            return true
        }else{
            return false
        }
    }//-------------------------------------

    // Si el producto NO EXISTE en el carrito se ejecuta uploadCart
    async function uploadCart(document){
        // eslint-disable-next-line
        const docRef= setDoc(doc(db, "Carrito", `${document.id}`), document)
        pedido()
    }
    // Si el producto EXISTE en el carrito se ejecuta uploadCart
    async function updateCart(document){
        const docRef = doc(db, "Carrito", `${document.id}`);
        const newQuantity={quantity: document.quantity}
        updateDoc(docRef, newQuantity);
    }

    // Funciones al agregar al carrito o hacer compra de un producto
    const refreshCart=(product, quantity, doAction)=>{
        // eslint-disable-next-line
        switch (doAction){
            case "cart":
                if(isInCart(product)){
                    product.quantity= quantity 
                    updateCart(product)
                }
                if(!isInCart(product)){
                    product.quantity=quantity
                    uploadCart(product)
                }
            break;
            case "buy":
                product.quantity=quantity
                setDataBuy(product)
            break;
        }
    }//---------------------------------------


    // Suma de precios de productos del carrito
    let totalAmount
    if (dataCart.length>0){
        totalAmount=dataCart.map(e=>e.price*e.quantity).reduce((a,b)=>{
            return a+b
        })
    }//---------------------------------------

    // Eliminar todos los productos del carrito
    const Clear=()=>{
        setDataCart([])
        // eslint-disable-next-line
        dataCart.map(document=>{
            deleteDoc(doc(db, "Carrito", `${document.id}`))
        })
        pedido()
        alertSucess("Carrito vaciado correctamente")
    }//---------------------------------------

    // Eliminar un producto especifico del carrito
    const deleteItem=(product)=>{
        deleteDoc(doc(db, "Carrito", `${product.id}`))
        pedido()
    }//---------------------------------------

    const alertSucess=(mensaje)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    const valueContext={
        dataCart,
        dataBuy,
        totalAmount,
        quantityInCart,
        refreshCart,
        isInCart,
        Clear,
        deleteItem,
        alertSucess
    }
    

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
export default CartProvider
