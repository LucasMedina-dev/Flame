import ItemDetail from './ItemDetail'
import { useState } from 'react'

const ItemDetailContainer = (props) => {
    let category= props.category
    let description=props.description
    
    const [showMore, setShowMore]=useState(false)
    const compare=()=>{
        showMore? setShowMore(false) : setShowMore(true)
    }
    return (
        <>
            <button onClick={compare}>ver mas</button>
            {showMore && <ItemDetail category={category} description={description}/>}
            
        </>
    )
}

export default ItemDetailContainer
