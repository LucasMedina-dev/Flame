import { useState } from "react";

const ItemCount = (prop) => {
    let minPurchase=prop.minPurchase;
    let maxPurchase=prop.maxPurchase;
    const [purchase, setPurchase] = useState(minPurchase)
    const addPurchase= ()=>{
        (minPurchase!==0 && purchase<maxPurchase) && setPurchase(purchase + 1)
    }
    const removePurchase= ()=>{
        (minPurchase!==purchase) && setPurchase(purchase -1)
    }
    const proceedBuy = ()=>{
        console.log(`Proceder con la compra de ${purchase} productos`)
    }
    const proceedCart= ()=>{
        console.log(`Se agregaron ${purchase} productos al carrito`)
    }
    // Se debe recargar o salir de la pagina para volver a cargar el stock y evitar comprar mas del stock disponible
    return (
        <div className="purchase">
            <div className="amount">
                <button id="buttonRemove" style={{"display":"none"}} onClick={removePurchase}></button>
                <button id="buttonAdd" style={{"display":"none"}} onClick={addPurchase}></button>
                <label htmlFor="buttonRemove" className="amount_button fas fa-minus"></label>
                <span className="amount_number">{purchase}</span>
                <label htmlFor="buttonAdd" className="amount_button fas fa-plus"></label>   
            </div>
            <button id="buttonBuy" style={{"display":"none"}} onClick={proceedBuy}></button>
            <button id="buttonCart" style={{"display":"none"}} onClick={proceedCart}></button>
            <label htmlFor="buttonBuy" className="purchase_buy">Comprar</label>
            <label htmlFor="buttonCart" className="purchase_cart fas fa-cart-plus"></label>
        </div>
    )
}

export default ItemCount
