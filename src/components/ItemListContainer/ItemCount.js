import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = (prop) => {
    let minPurchase;
    let maxPurchase=prop.maxPurchase;
    maxPurchase>0 ?  minPurchase=1 : minPurchase=0 
    const [purchase, setPurchase] = useState(minPurchase)
    const addPurchase= ()=>{
        (minPurchase!==0 && purchase<maxPurchase) && setPurchase(purchase + 1)
    }
    const removePurchase= ()=>{
        (minPurchase!==purchase) && setPurchase(purchase -1)
    }
    const proceedBuy = ()=>{
        prop.onAdd(purchase)
    }
    const proceedCart= ()=>{
        prop.onAdd(purchase)
    }

    return (
        <>
            <div className="purchase">
                <div className="amount">
                    <button id={"buttonRemove"+prop.id} style={{"display":"none"}} onClick={removePurchase}></button>
                    <button id={"buttonAdd"+prop.id} style={{"display":"none"}} onClick={addPurchase}></button>
                    <label htmlFor={"buttonRemove"+prop.id} className="amount_button fas fa-minus"></label>
                    <span className="amount_number">{purchase}</span>
                    <label htmlFor={"buttonAdd"+prop.id} className="amount_button fas fa-plus"></label>   
                </div>
                <button id="buttonBuy" style={{"display":"none"}} onClick={proceedBuy}></button>
                <button id="buttonCart" style={{"display":"none"}} onClick={proceedCart}></button>
                <Link to={"/Buy/"+prop.id}><label htmlFor="buttonBuy" className="purchase_buy">Comprar</label></Link>
                <Link to="/Cart" className="purchase_cart-flex"><label htmlFor="buttonCart" className="purchase_cart fas fa-cart-plus"></label></Link> 
            </div>            
        </>
        
    )
}

export default ItemCount
 