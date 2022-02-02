import { deleteDoc, doc } from "firebase/firestore";
import { useState, useContext } from "react";
import { db } from "../../../../firebase";
import { formContext } from "../../../Contexts/FormContext";

const DeleteItem = () => {
    const {alertSucess, alertErr}=useContext(formContext)
    const [deleteId, setDeleteId]=useState()
    const handleChange=(e)=>{
        setDeleteId(e.target.value)
    }
    const deleteItem=(e)=>{
        e.preventDefault()
        if(deleteId){
          deleteDoc(doc(db, "Productos", `${deleteId}`))
          alertSucess("Producto eliminado correctamente")  
        }else{
            alertErr("Ingrese id")
        }
    }
    return(
        <form className="form">
            <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={deleteId} onChange={handleChange}/>
            <input className="form_option" type="submit" value="Eliminar producto" onClick={deleteItem}/>
        </form>
    )
};

export default DeleteItem;



