import CartItem from './CartItem'

const CartItemList = ({products}) => {
    return(
        <div className="cart">
            {products.map(item=>{
                return(
                    <CartItem item={item}/>
                )
            })}
        </div>
    )
}

export default CartItemList
