import Item from './Item'
import { useEffect, useState } from 'react'
const ItemList = (props) => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
      setTimeout(()=>{
        setProducts([{
            "id": 1,
            "name": "prueba1",
            "price": 1000,
            "stock": 10
          },
          {
            "id": 2,
            "name": "prueba2",
            "price": 1000,
            "stock": 5
          },
          {
            "id": 3,
            "name": "prueba3",
            "price": 1000,
            "stock": 20
          },
          {
            "id": 4,
            "name": "prueba4",
            "price": 1000,
            "stock": 0
          }
        ]) 
      }, 2000)
    },[])
    console.log(products)
    return (
        <>
            {products.map(x=> <Item id={x.id} name={x.name} price={x.price} stock={x.stock} />)}
        </>
    )
}

export default ItemList
