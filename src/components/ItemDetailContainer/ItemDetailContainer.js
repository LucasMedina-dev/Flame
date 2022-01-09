import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect, useContext } from 'react'
import { context } from '../Contexts/CartProvider'

const ItemDetailContainer = () => {
    const {id}= useParams()
    const identifier= parseInt(id)
    const {refreshCart, database}=useContext(context)

    const [product, setProducts]=useState([])
    useEffect(() => {
        setProducts(database.filter(e=>e.id===identifier)[0])
        // eslint-disable-next-line
    }, [database])
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
