//import ItemCount from "./ItemCount"

import {Link} from 'react-router-dom'


const Item = (props) => {
    return (
        <div className="product_item">
            <div className="product_description">
                <p>{props.name}</p>
                <p>Precio: {props.price}</p>
                <>Categoria: {props.category}</>
            </div>
            <div className="product_image">
                <Link to={"/Productos/"+props.id}><img src={props.img} alt={"product"+props.id}></img></Link>  
            </div>
        </div>

    )
}

export default Item
//<ItemCount maxPurchase={props.stock} id={props.id}/>
//<ItemDetailContainer description={props.description} category={props.category}/>
