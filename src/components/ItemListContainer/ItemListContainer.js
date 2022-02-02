import ItemList from './ItemList';
import SearchContainer from '../SearchContainer/SearchContainer'
import { itemListContext } from '../Contexts/ItemListContext';
import { useContext } from 'react';

const ItemListContainer = () => {
  const {categories, products, divRef }=useContext(itemListContext)
  return(
    <>
      <SearchContainer categories={categories}/>
      <div className="product" ref={divRef}>
        <ItemList products={products}/>
      </div>

    </>
  )
}

export default ItemListContainer
