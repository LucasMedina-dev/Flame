import { useContext } from "react"
import { context } from "../Contexts/CartProvider"

const BuyContainer = () => {
    const {dataBuy}=useContext(context)
    return (
        <div>
          <h1>Proceder con la compra de {dataBuy.name}, por una cantidad de {dataBuy.quantity} unidades, a un precio de {dataBuy.price*dataBuy.quantity} pesito ({dataBuy.price} por unidad)</h1>  
        </div>
    )
}

export default BuyContainer
