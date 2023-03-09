<<<<<<< HEAD
//import ItemCount from "./ItemCount"
import {Link} from 'react-router-dom'



=======
import {Link} from 'react-router-dom'

>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
const Item = (props) => {
    let img=props.img;
    if(!props.img){
        img="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg";
    }
    return (
        <div className="product_item">
            <div className="product_description">
                <p>{props.name}</p>
                <p>Precio: {props.price}</p>
                <p>Categoria: {props.category}</p>
            </div>
            <div className="product_image">
<<<<<<< HEAD
                <Link className='product_image-link' to={`/Productos/${props.id}`}><img src={img} alt={`product${props.id}`}></img></Link>  
=======
                <Link to={`/Productos/id/${props.id}`}><img className="product_image-size" src={props.img} alt={`product${props.id}`}></img></Link>  
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
            </div>
        </div>

    )
}

export default Item