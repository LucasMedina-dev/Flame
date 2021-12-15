/* eslint-disable */
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <ul>
            <li><Link to="/Inicio">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="#">Contacto</Link></li>
            <li><Link to="#">Carrito</Link></li>
        </ul>
    )
}

export default Nav
