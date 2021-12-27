import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemList from "../ItemListContainer/ItemList"
const CategoryDetailContainer = () => {
    const param=useParams()
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/LucasMedina-dev/dbserver/productos')
        .then((res)=>{
          const data= res.json()
          return data
        })
        .then(data=>{
            const filtered = data.filter(e=>e.category===param.categoryId.toLowerCase())
            setProducts(filtered)
        })
    },[])
    return (
        <div className="product">
            <ItemList products={products}/>
        </div>
    )
}

export default CategoryDetailContainer
