import ItemList from './ItemList';
import { useState, useEffect } from 'react'

const ItemListContainer = (prop) => {

  
    return (
        <>
            <div className="main_introduce">
                Bienvenid@ {prop.greeting}
                
            </div>
            <ItemList/>

        </>
    )
}

export default ItemListContainer
