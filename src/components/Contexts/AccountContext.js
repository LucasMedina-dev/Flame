import { createContext, useState } from "react";
import Swal from "sweetalert2";
export const userContext = createContext()
const {Provider} = userContext


const AccountContext = ({children}) => {
    const [status, setStatus]=useState(false)
    const [user, setUser]=useState(false)
    const statusLogued=(userName)=>{
        setStatus(true)
        setUser(userName)
    }
    const alertErr=(mensaje)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: mensaje,
            footer: 'No pasa nada profe'
        })
    }
    const alertSucess=(mensaje)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
          })
    }
    const valueContext={
        status,
        user,
        statusLogued,
        alertSucess,
        alertErr
    }
    
    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
};

export default AccountContext;
