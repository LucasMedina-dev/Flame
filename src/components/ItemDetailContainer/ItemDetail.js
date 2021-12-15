import ItemCount from '../ItemListContainer/ItemCount'
const ItemDetail = (props) => {
    const product= props.product
    return (
        <div className="item">
            <div className="item_image"><img src={product.img} alt={"product"+product.id}></img></div>
            <div className="item_title">{product.name}</div>
            <div className="item_description">{product.description}</div>
            <ItemCount maxPurchase={10}/>
            <div className="item_"></div>
            <div className="item_"></div>
            
        </div>
    )
}

export default ItemDetail
