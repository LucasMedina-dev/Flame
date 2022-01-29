import { useContext } from "react";
import { formContext } from "../../../Contexts/FormContext";
import {doc, getDoc} from 'firebase/firestore'
import { db } from "../../../../firebase";


const ModifyItem = () => {
  const {formData, handleChange, submitItem, setRequestedItem, idSearched, queryIdSearched, alertErr, alertSucess}=useContext(formContext)
  
  const handleIdChange=(e)=>{
    queryIdSearched(e.target.value)
  }
  const query=(id)=>{
    const producto=doc(db, "Productos", `${id}`)
    const promise= getDoc(producto)
    promise
    .then((element)=>{
      if(element.data()){
        setRequestedItem(element.data())
      }else{
        alertErr("No existe la id requerida")
      }
      
    })
  }
  const queryId=(e)=>{
    e.preventDefault()
    query(idSearched)
  }
  const newQuery=(e)=>{
    e.preventDefault()
    queryIdSearched(false)
  }
  const sucess=(e)=>{
    e.preventDefault()
    submitItem(e)
    alertSucess("Producto modificado con exito")
    
  }
  console.log(idSearched)
  console.log(formData.id)
  if(parseInt(idSearched)===parseInt(formData.id)){
    return (
      <form className="form">
          <input className="form_option" type="text"  name="name" placeholder="Nombre del producto" value={formData.name} onChange={handleChange}/>
          <input className="form_option" type="text"  name="description" placeholder="Descripcion" value={formData.description} onChange={handleChange}/>
          <input className="form_option" type="text"  name="category" placeholder="Categoria" value={formData.category} onChange={handleChange}/>
          <input className="form_option" type="number"  name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange}/>
          <input className="form_option" type="text"  name="img" placeholder="Imagen del producto" value={formData.img} onChange={handleChange}/>
          <input className="form_option" type="number"  name="price" placeholder="Ingrese precio" value={formData.price} onChange={handleChange}/>
          <input className="form_option" type="submit" value="Modificar producto" onClick={sucess}/>
          <input className="form_option" type="submit" value="Nueva consulta" onClick={newQuery}/>
      </form>
    )
  }else{
    return(
      <form className="form">
          <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={idSearched} onChange={handleIdChange}/>
          <input className="form_option" type="submit" value="Consultar producto" onClick={queryId}/>
          {alertErr}
      </form>
    )
  }
  
};

export default ModifyItem;
