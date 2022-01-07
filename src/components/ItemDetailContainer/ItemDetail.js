import { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({product, refreshCart}) => {
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
    return (
        <div className="item">
            <div className="item_image"><img src={product.img} alt={"product"+product.id}></img></div>
            <div className="item_title">{product.name}</div>
            <div className="item_description">{product.description}</div>
            <ItemCount maxPurchase={product.stock-quantity} onAdd={onAdd} id={product.id} quantity={quantity}/>
        </div>
    )
}

export default ItemDetail
//<{purchased>0 ? <p>Si</p> : null}>