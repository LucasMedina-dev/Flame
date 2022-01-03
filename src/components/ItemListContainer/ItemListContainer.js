import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import SearchContainer from '../SearchContainer/SearchContainer'

const ItemListContainer = (props) => {
    const categories=(["Mother", "Ram", "Procesador", "Video"])
    const [products, setProducts]=useState([])
    const search=(e)=>{
      setFilter(e.target.id.toLowerCase())
    }
    const [filter, setFilter]=useState("")
    useEffect(()=>{
      fetch('https://my-json-server.typicode.com/LucasMedina-dev/dbserver/productos')
      .then((res)=>{
        const data= res.json()
        return data
      })
      .then((data)=>{
        if(!filter){
          setProducts(data)
        }else{
          setProducts(data.filter(product=> product.category===filter))
        }
        
      })
    },[filter])
    
    if (!products){
      return(
        <div className="main_introduce">
          <p>Cargando...</p>
        </div>
      )
    }else{
      return(
        <>
          <SearchContainer categories={categories} search={search}/>
          <div className="product">
            <ItemList products={products}/>
          </div>
        </>
        
       )
    }
}

export default ItemListContainer