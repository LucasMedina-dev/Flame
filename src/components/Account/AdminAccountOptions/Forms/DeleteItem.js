import { deleteDoc, doc } from "firebase/firestore";
import { useState, useContext } from "react";
import { db } from "../../../../firebase";
import { formContext } from "../../../Contexts/FormContext";

const DeleteItem = () => {
<<<<<<< HEAD
    const {alertSucess, setFormData}=useContext(formContext)
=======
    const {alertSucess, alertErr}=useContext(formContext)
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
    const [deleteId, setDeleteId]=useState()
    const handleChange=(e)=>{
        setDeleteId(e.target.value)
    }
    const deleteItem=(e)=>{
        e.preventDefault()
<<<<<<< HEAD
        console.log(deleteId)
        deleteDoc(doc(db, "Productos", `${deleteId}`))
        alertSucess("Producto eliminado correctamente")
        setFormData({})
=======
        if(deleteId){
          deleteDoc(doc(db, "Productos", `${deleteId}`))
          alertSucess("Producto eliminado correctamente")  
        }else{
            alertErr("Ingrese id")
        }
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
    }
    return(
        <form className="form">
            <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={deleteId} onChange={handleChange}/>
            <input className="form_option" type="submit" value="Eliminar producto" onClick={deleteItem}/>
        </form>
    )
};

export default DeleteItem;



