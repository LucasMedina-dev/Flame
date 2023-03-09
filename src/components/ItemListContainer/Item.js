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
                <Link className='product_image-link' to={`/Productos/${props.id}`}><img src={img} alt={`product${props.id}`}></img></Link>  
            </div>
        </div>

    )
}

export default Item