import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect, useContext } from 'react'
import { context } from '../Contexts/CartProvider'
import {doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const ItemDetailContainer = () => {
    const {id}= useParams()
    const {refreshCart}=useContext(context)
    const [product, setProducts]=useState([])
    useEffect(()=>{
        const producto=doc(db, "Producto", `${id}`)
        const promise= getDoc(producto)
        promise
        .then((element)=>{
            setProducts(element.data())
        })
        // eslint-disable-next-line
    },[])
    if(product){
        return (
            <>
                <ItemDetail product={product} id={id} refreshCart={refreshCart}/>
            </>
        )
    }else{
        return(
            <h1>Cargando</h1>
        )
        
    }
    
}

export default ItemDetailContainer
