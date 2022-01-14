import ItemList from './ItemList';
import { useState, useEffect, useContext } from 'react'
import SearchContainer from '../SearchContainer/SearchContainer'
import { context } from '../Contexts/CartProvider';

const ItemListContainer = () => {
    const {database}=useContext(context)
    const categories=(["Mother", "Ram", "Procesador", "Video"])
    const [products, setProducts]=useState([])
<<<<<<< HEAD
    const [filter, setFilter]=useState("")
    const search=(e)=>{
      setFilter(e.target.id.toLowerCase())
    }
=======
    const search=(e)=>{
      setFilter(e.target.id.toLowerCase())
    }
    const [filter, setFilter]=useState("")
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    useEffect(()=>{
        if(!filter){
          setProducts(database)
        }else{
          setProducts(database.filter(product=> product.category===filter))
        }
        // eslint-disable-next-line
    },[filter])
<<<<<<< HEAD
    if (products.lenght>0){
=======
    
    if (!products){
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
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
<<<<<<< HEAD
        )
    }   
=======
        
       )
    }
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
}

export default ItemListContainer