import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../firebase";
const DeleteItem = () => {
    const [deleteId, setDeleteId]=useState()
    const handleChange=(e)=>{
        setDeleteId(e.target.value)
    }
    const deleteItem=(e)=>{
        e.preventDefault()
        console.log(deleteId)
        deleteDoc(doc(db, "Productos", `${deleteId}`))
    }
    return(
        <form className="form">
            <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={deleteId} onChange={handleChange}/>
            <input className="form_option" type="submit" value="Eliminar producto" onClick={deleteItem}/>
        </form>
    )
};

export default DeleteItem;



