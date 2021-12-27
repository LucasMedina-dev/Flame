import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import SearchContainer from '../SearchContainer/SearchContainer'

const ItemListContainer = (props) => {
    const categories=(["Mother", "Ram", "Procesador", "Video"])
    const [products, setProducts]=useState([])
    useEffect(()=>{
      fetch('https://my-json-server.typicode.com/LucasMedina-dev/dbserver/productos')
      .then((res)=>{
        const data= res.json()
        return data
      })
      .then((data)=>{
        setProducts(data)
      })
    },[])
  
    if (!products){
      return(
        <div className="main_introduce">
          <p>Cargando...</p>
        </div>
      )
    }else{
      return(
        <>
          <SearchContainer categories={categories}/>
          <div className="product">
            <ItemList products={products}/>
          </div>
        </>
        
       )
    }
}

export default ItemListContainer