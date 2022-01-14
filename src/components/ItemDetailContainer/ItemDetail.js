import { useState, useEffect } from 'react'
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
<<<<<<< HEAD
            <ItemCount maxPurchase={product.stock} onAdd={onAdd} id={product.id} quantity={quantity}/>
=======
            <ItemCount maxPurchase={product.stock-quantity} onAdd={onAdd} id={product.id} quantity={quantity}/>
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
        </div>
    )
}

<<<<<<< HEAD
export default ItemDetail
=======
export default ItemDetail
//<{purchased>0 ? <p>Si</p> : null}>
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
