import { useState, useEffect } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({product, refreshCart}) => {
    let price
    if(product.inoffer){
        price= product.price-(product.price*(product.inoffer/100))

    }else{
        price=product.price
    }
    const onAdd = (quantity, action)=>{
        refreshCart(product, quantity, action)
    }
    const [quantity, setQuantity]= useState()
    useEffect(()=>{
        if (!product.quantity){
            setQuantity(0)
        }else{
            setQuantity(product.quantity)
        }
    },[product])
    const productInOffer=()=>{
        if(product.inoffer){
            return(
                <span>Producto en oferta!</span>    
            )
        }else{
            <></>
        }
    }
    return (
        <div className="item">
            <div className="item_image"><img src={product.img} alt={"product"+product.id}></img></div>
            <div className="item_title">{product.name}</div>
            <div className="item_price">${price} {productInOffer()}</div>
            <div className="item_description">{product.description}</div>
            
            <ItemCount maxPurchase={product.stock} onAdd={onAdd} id={product.id} quantity={quantity}/>
        </div>
    )
}

export default ItemDetail