import ItemList from './ItemList';
import { useState, useEffect, useContext } from 'react'
import SearchContainer from '../SearchContainer/SearchContainer'
import { context } from '../Contexts/CartProvider';

const ItemListContainer = () => {
    const {database}=useContext(context)
    const categories=(["Mother", "Ram", "Procesador", "Video"])
    const [products, setProducts]=useState([])
    const search=(e)=>{
      setFilter(e.target.id.toLowerCase())
    }
    const [filter, setFilter]=useState("")
    useEffect(()=>{
        if(!filter){
          setProducts(database)
        }else{
          setProducts(database.filter(product=> product.category===filter))
        }
        // eslint-disable-next-line
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