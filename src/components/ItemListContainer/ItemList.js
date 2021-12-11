import Item from './Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { useEffect, useState } from 'react'

const ItemList = (props) => {
  return (
      <>
          {props.products.map(x=>
            <>
              <Item id={x.id} name={x.title} price={x.price} stock={x.stock}/>
              <ItemDetailContainer description={x.description} category={x.category}/>
            </>
          )}
      </>
  )
}

export default ItemList;
