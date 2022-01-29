import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { userContext } from './Contexts/AccountContext'

const Nav = () => {
    const {status, user}=useContext(userContext)
    const userActive=()=>{
        if(status){
            if(user){
                return(
                    <li><Link to="/Cuenta">Cuenta de {user.user}</Link></li>
                )
            }
        }else{
            return(
                <li><Link to="/Login">Iniciar sesión</Link></li>
            )
        }
    }
    return (
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            {userActive()}
        </ul>
    )
}

export default Nav
