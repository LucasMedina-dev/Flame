import {Link} from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="product_item">
            <div className="product_description">
                <p>{props.name}</p>
                <p>Precio: {props.price}</p>
                <p>Categoria: {props.category}</p>
            </div>
            <div className="product_image">
                <Link to={`/Productos/id/${props.id}`}><img className="product_image-size" src={props.img} alt={`product${props.id}`}></img></Link>  
            </div>
        </div>

    )
}

export default Item