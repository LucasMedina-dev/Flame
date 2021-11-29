import ItemCount from './ItemCount'

const ItemListContainer = (prop) => {
    let stock=5;
    let minPurchase;
    stock>0 ? minPurchase=1 : minPurchase=0
    return (
        <>
            <div className="main_introduce">
                Bienvenid@ {prop.greeting}
            </div>
            <ItemCount minPurchase={minPurchase} maxPurchase={stock}/>
        </>
    )
}

export default ItemListContainer
