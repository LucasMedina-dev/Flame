import ItemList from './ItemList';
import { useState, useEffect } from 'react'
const ItemListContainer = (props) => {
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
        <div className="product">
          <ItemList products={products}/>
        </div>
       )
    }
}

export default ItemListContainer