import CartItem from './CartItem'

const CartItemList = ({products}) => {
    return(
        <div className="cart">
            {products.map(item=>{
                return(
                    <CartItem key={"key"+item.id} item={item}/>
                )
            })}
        </div>
    )
}

export default CartItemList
