import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { formContext } from "../Contexts/FormContext";

const ItemCount = ({maxPurchase, onAdd, quantity, id}) => {
    const {alertSucess, alertErr}=useContext(formContext)
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
    }
    const proceedBuy = ()=>{
        onAdd(purchase, "buy")
    }
    const proceedCart= ()=>{
        if (purchase<=maxPurchase){
            onAdd(purchase, "cart")
            alertSucess(`Usted tiene ${purchase} productos en su carrito`)
        }
        if (purchase===maxPurchase){
            alertErr("No hay mas stock para este producto")
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
 