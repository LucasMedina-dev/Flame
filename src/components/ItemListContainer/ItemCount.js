import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

const ItemCount = ({maxPurchase, onAdd, quantity, id}) => {
    const [purchase, setPurchase]=useState(quantity)
    useEffect(() => {
        if (!quantity){
            setPurchase(1)
        }else{
            setPurchase(quantity)
        }
    }, [quantity])
    
    
    const addPurchase= ()=>{
        (purchase<maxPurchase ) && setPurchase(purchase + 1)
    }
    const removePurchase= ()=>{
        (purchase>1) && setPurchase(purchase -1)
=======
//import { Link } from "react-router-dom";

const ItemCount = ({maxPurchase, onAdd, quantity, id}) => {
    let minPurchase
    maxPurchase>0 ? minPurchase=1 : minPurchase=0
    const [purchase, setPurchase]=useState()
    useEffect(() => {
        setPurchase(minPurchase)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxPurchase])
    const addPurchase= ()=>{
        (minPurchase!==0 && purchase<maxPurchase ) && setPurchase(purchase + 1)
    }
    const removePurchase= ()=>{
        (minPurchase!==purchase) && setPurchase(purchase -1)
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    }
    const proceedBuy = ()=>{
        onAdd(purchase, "buy")
    }
    const proceedCart= ()=>{
<<<<<<< HEAD
        if (purchase<=maxPurchase){
            onAdd(purchase, "cart")
=======
        if (purchase<=maxPurchase || !quantity){
            purchase<=maxPurchase && onAdd(purchase, "cart")
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
        }
        if (purchase===maxPurchase){
            alert("No hay mas stock para este producto")
        }
    }
    return (
        <>
            <div className="purchase">
                <div className="amount">
                    <button id={"buttonRemove"+id} style={{"display":"none"}} onClick={removePurchase}></button>
                    <button id={"buttonAdd"+id} style={{"display":"none"}} onClick={addPurchase}></button>
                    <label htmlFor={"buttonRemove"+id} className="amount_button fas fa-minus"></label>
                    <span className="amount_number">{purchase}</span>
                    <label htmlFor={"buttonAdd"+id} className="amount_button fas fa-plus"></label>   
                </div>
                <button id="buttonBuy" style={{"display":"none"}} ></button>
                <button id="buttonCart" style={{"display":"none"}} ></button>
                <Link to={`/Buy/${id}`} onClick={proceedBuy}><label htmlFor="buttonBuy" className="purchase_buy">Comprar</label></Link>
                <label htmlFor="buttonCart" className="purchase_cart" onClick={proceedCart}>Agregar al carrito</label>
            </div>            
        </>
        
    )
}

export default ItemCount
 