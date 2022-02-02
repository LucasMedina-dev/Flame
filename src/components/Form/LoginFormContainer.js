import { useState, useContext } from "react";
import { userContext } from "../Contexts/AccountContext";
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase';
import {useNavigate} from 'react-router-dom'
const LoginFormContainer = () => {
    let navigate= useNavigate()
    const {statusLogued, status}=useContext(userContext)
    const [formData, setFormData]=useState({})
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const consulta=async ()=>{
        const userData=collection(db, "Cuentas")
        const q= query(userData, where("user", "==", formData.user))
        const q2= query(userData, where("pass", "==", formData.pass))
        const querySnapshotQ= await getDocs(q)
        const querySnapshotQQ=await getDocs(q2)
        querySnapshotQ.forEach(user=>{
            querySnapshotQQ.forEach(pass=> {
                statusLogued(user.data())
                navigate('/')
                
            });
        })
    }
    const submitData=(e)=>{
        e.preventDefault()
        consulta()
    }
    if (!status){
       return (
        <div className="login">
            <form className="login_form">
                <input className="login_input" type="text" id="userLogin" placeholder="Nombre de usuario" value={formData.user} name="user" onChange={handleChange}/>
                <input className="login_input" type="password" id="passwordLogin" placeholder="Contraseña" value={formData.pass} name="pass" onChange={handleChange}/>
                <input className="login_input" type="submit" onClick={submitData}/>
            </form>
        </div>
        )
    }else{
        return(
            <></>
        )
    }
    
};

export default LoginFormContainer;
