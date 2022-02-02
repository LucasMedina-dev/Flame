import {useState, useEffect} from 'react'
const QuantityCounter = ({quantity, stock, refreshQuantity, id}) => {
    const [purchase, setPurchase]=useState()
    useEffect(() => {
        setPurchase(quantity)
    }, [])
    const addPurchase=()=>{
        if(purchase<=stock){
            setPurchase(purchase+1)
            refreshQuantity(purchase)
        }
    }
    const removePurchase=()=>{
        if (purchase>=1){
            setPurchase(purchase-1)
            refreshQuantity(purchase)
        }
    }
    return (
        <div className="amount">
            <button id={"buttonRemove"+id} style={{"display":"none"}} onClick={removePurchase}></button>
            <button id={"buttonAdd"+id} style={{"display":"none"}} onClick={addPurchase}></button>
            <label htmlFor={"buttonRemove"+id} className="amount_button fas fa-minus"></label>
            <span className="amount_number">{quantity}</span>
            <label htmlFor={"buttonAdd"+id} className="amount_button fas fa-plus"></label>
        </div>
    )
}
export default QuantityCounter
