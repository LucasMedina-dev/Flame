import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [product, setProducts]=useState([])
    useEffect(()=>{
      fetch('https://my-json-server.typicode.com/LucasMedina-dev/dbserver/productos/'+id)
      .then((res)=>{
        const data= res.json()
        return data
      })
      .then((data)=>{
        setProducts(data)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer
