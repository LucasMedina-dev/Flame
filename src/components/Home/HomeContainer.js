import ItemList from "../ItemListContainer/ItemList"
import { db } from "../../firebase";
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";


const HomeContainer = () => {
    const [products, setProducts]=useState([]);
    const productsCollection=collection(db, 'Productos');
    const saveProductsInOffer=()=>{
        const getProducts=getDocs(productsCollection);
        const data=[];
        getProducts
        .then((docs)=>{
            docs.forEach((doc)=>{
                if(doc.data().inoffer>0){
                    data.push(doc.data());
                }
            })
            data.sort((a,b)=>(a.id - b.id))
            setProducts(data)
        })
    }
    useEffect(()=>{
        saveProductsInOffer();
        // eslint-disable-next-line
    },[])
    return (
<<<<<<< HEAD
        <>
            <div className='product'>
                <ItemList products={products}/>
            </div>
            
        </>
        
=======
        <span className="flame">Bienvenido a Flame</span>
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
    )
}

export default HomeContainer
