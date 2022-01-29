import { useParams } from 'react-router-dom'
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import SearchContainer from '../SearchContainer/SearchContainer'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../firebase';

const ItemListContainer = () => {
    const {id}= useParams()
    const categories=["Mother", "Ram", "Procesador", "Placa de video", "Discos", "Refrigeracion", "Gabinete", "Teclado", "Mouse", "Monitor"]
    const [products, setProducts]=useState([])
    useEffect(()=>{
      if(id){
        showResultsFiltered()
      }else{
        showResultsUnfiltered()        
      }
      // eslint-disable-next-line
    },[id])
    const productsCollection=collection(db, 'Productos')
    const showResultsUnfiltered=()=>{
        const getProducts = getDocs(productsCollection)
        const data=[]
        getProducts
        .then((result)=>{
            result.forEach((doc)=>{
                data.push(doc.data())
            })
            data.sort((a,b)=>(a.id - b.id))
            setProducts(data)
        })
    }
    const showResultsFiltered= async ()=>{
        const filter= where("category", "==", id.toLowerCase())
        const customQuery= query(productsCollection, filter)
        const docQuery= await getDocs(customQuery)
        const ref= docQuery.docs
        const data=ref.map(doc=>{
            return doc.data()
        })
        setProducts(data)      
  }
  return(
    <>
      <SearchContainer categories={categories}/>
      <div className="product">
        <ItemList products={products}/>
      </div>
    </>
  )
}

export default ItemListContainer
