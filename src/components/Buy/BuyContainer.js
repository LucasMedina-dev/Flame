<<<<<<< HEAD
=======
import { useParams } from "react-router-dom"
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
import { useContext } from "react"
import { context } from "../Contexts/CartProvider"

const BuyContainer = () => {
<<<<<<< HEAD
    const {dataBuy}=useContext(context)
=======
    const {id}=useParams()
    console.log(id)
    const {dataBuy}=useContext(context)
    console.log(dataBuy)
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
    return (
        <div>
          <h1>Proceder con la compra de {dataBuy.name}, por una cantidad de {dataBuy.quantity} unidades, a un precio de {dataBuy.price*dataBuy.quantity} pesito ({dataBuy.price} por unidad)</h1>  
        </div>
    )
}

export default BuyContainer
