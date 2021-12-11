import ItemList from './ItemList';
import { useState, useEffect } from 'react'

const ItemListContainer = (prop) => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res)=>{
        const data= res.json()
        return data
      })
      .then((data)=>{
        setProducts(data)
      })
    },[])
    if (products.length===0){
      return(
        <div className="main_introduce">
          Bienvenid@ {prop.greeting}
          <p>Cargando...</p>
        </div>
      )
    }else{
      return(
        <>
          <div className="main_introduce">
            Bienvenid@ {prop.greeting}
          </div>
          <ItemList products={products}/>
        </>
      )
    }
}

export default ItemListContainer