import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Contexts/AccountContext";

const AccountContainer = () => {
    const {user}=useContext(userContext)
    if (user){
        return (
            <div className="account">
                <div className="account_options">
                    <p className="account_title">Existencias</p>
                    <Link to="/Cuenta/CreateItem" className="account_option">Crear productos</Link>
                    <Link to="/Cuenta/DeleteItem" className="account_option">Eliminar productos</Link>
                    <Link to="/Cuenta/ModifyItem" className="account_option">Modificar productos</Link>
                </div>
                <div className="account_options">
                    <p className="account_title">Ofertas</p>
                    <Link to="/Cuenta/ModifyOffer" className="account_option">Crear o modificar ofertas</Link>
                </div>
            </div>
        ) 
    }else{
        return(
            <div><img src="https://i.ibb.co/k8nWjQ9/sale.jpg" alt="no entra" />Logueese por favor</div>
        )
    }
     
};

export default AccountContainer;
