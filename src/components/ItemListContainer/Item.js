import ItemCount from "./ItemCount"
import { useState, useEffect } from 'react'

const Item = (props) => {
    console.log(props)
    return (
        <div className="product_item">
            <div className="product_description">
                <p>Id: {props.id}</p>
                <p>Nombre de producto: {props.name}</p>
                <p>Precio: {props.price}</p>
            </div>
            <div className="product_image">

            </div>
            <ItemCount maxPurchase={props.stock} id={props.id}/>
        </div>
    )
}

export default Item
