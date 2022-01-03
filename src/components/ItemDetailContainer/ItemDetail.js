import { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import { context } from '../Contexts/CartProvider'
import { useParams } from 'react-router-dom'

const ItemDetail = (props) => {
    const {id}= useParams()
    const product= props.product
    const {refreshCart, dataCart}=useContext(context)
    const onAdd = (quantity, action)=>{
        refreshCart(product, quantity, action)
    }
    console.log(product)
    let quantity
    if (!product.quantity){
        quantity=0
    }else{
        quantity=product.quantity
    }
    return (
        <div className="item">
            <div className="item_image"><img src={product.img} alt={"product"+product.id}></img></div>
            <div className="item_title">{product.name}</div>
            <div className="item_description">{product.description}</div>
            <ItemCount maxPurchase={props.product.stock-quantity} onAdd={onAdd} id={product.id} quantity={product.quantity}/>
        </div>
    )
}

export default ItemDetail
//<{purchased>0 ? <p>Si</p> : null}>