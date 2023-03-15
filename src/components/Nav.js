import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import { userContext } from './Contexts/AccountContext'

const Nav = (props) => {
    const {status, user}=useContext(userContext)
    const switchTab=()=>{
        return props.tab?'header_nav-open':'header_nav-close'
    }
    console.log(props.tab)
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
        <ul className={'header_nav-list '+switchTab()}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            {userActive()}
            <CartWidget/>
        </ul>
    )
}

export default Nav
