import { createContext, useRef, useEffect, useState  } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query, startAt, limit, orderBy } from 'firebase/firestore'
import { db } from '../../firebase';
export const itemListContext = createContext()
const {Provider} = itemListContext

const ItemListContext = ({children}) => {
    const {category}= useParams()
    const categories=["Mother", "Ram", "Procesador", "Gpu", "Discos", "Refrigeracion", "Gabinete", "Teclado", "Mouse", "Monitor"]
    const [products, setProducts]=useState([])

    // Al buscar una categoria se detecta mediante useParams y asi se elije que pedido hacer
    useEffect(()=>{
        if(category){
            showResultsFiltered()
        }else{
            showResultsUnfiltered()        
        }
        // eslint-disable-next-line
    },[category])
    //--------------------------------------------------------------------------------------


    const productsCollection=collection(db, 'Productos')
    // Si se abre la seccion productos se hace un pedido sin filtros
    const showResultsUnfiltered=(more)=>{
        if(!more){more=0}
        const limitedQuery= query(productsCollection, orderBy("id"), startAt(1), limit(10+more))
        const getProducts = getDocs(limitedQuery)  
        const data=[]
        getProducts
        .then((result)=>{
            result.forEach((doc)=>{
                data.push(doc.data())
            })
            data.sort((a,b)=>(a.id - b.id))
            setProducts(data)
        })
    }//-------------------------------------

    // Si se elije una categoria a buscar, se hace el pedido con los filtros correspondientes
    const showResultsFiltered= async ()=>{
        const filter= where("category", "==", category.toLowerCase(), orderBy("id"), startAt(), limit(10))
        const customQuery= query(productsCollection, filter)
        const docQuery= await getDocs(customQuery)
        const ref= docQuery.docs
        const data=ref.map(doc=>{
            return doc.data()
        })
        setProducts(data)      
    }//-------------------------------------


    // ------ Show more products
    const divRef=useRef()
    useEffect(()=>{
        const handleScroll=()=>{
            const div= divRef.current
            const yPosition=div.getBoundingClientRect().y
            const end= div.getBoundingClientRect().height
            const bottom= div.getBoundingClientRect().bottom
            if(bottom+(-yPosition)===end){
                setTimeout(() => {
                    if(category){
                        showResultsFiltered(products.length)
                    }else{
                        showResultsUnfiltered(products.length)        
                    } 
                }, 1300);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return()=>{window.removeEventListener('scroll', handleScroll)}
        // eslint-disable-next-line
    },[products])
    //------------------------------


    const valueContext={
        categories,
        products,
        divRef
    }
    return(
        <Provider value={valueContext}>
            {children}
        </Provider>
    );
};

export default ItemListContext;
