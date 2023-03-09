import Item from './Item'
const ItemList = ({products}) => {
  return (
      <>
          {products.map(x=>
              <Item key={"key"+x.id} id={x.id} name={x.name} price={x.price} stock={10} description={x.description} category={x.category} img={x.img} quantity={x.quantity}/>
          )}
      </>
  )
}

export default ItemList;
