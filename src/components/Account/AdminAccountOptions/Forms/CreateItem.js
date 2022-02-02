import { useContext } from "react";
import { formContext } from "../../../Contexts/FormContext";
const CreateItem = () => {
  const {formData, handleChange, submitItem, alertSucess, alertErr}=useContext(formContext)
  const sucess=(e)=>{
    e.preventDefault()
    if (formData.length===7){
        alertSucess("Producto agregado con exito!")
        submitItem(e)
    }else{
      alertErr("LLene los campos vacios")
    }
  }
  
  
  return (
      <form className="form">
          <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={formData.id} onChange={handleChange}/>
          <input className="form_option" type="text"  name="name" placeholder="Nombre del producto" value={formData.name} onChange={handleChange}/>
          <input className="form_option" type="text"  name="description" placeholder="Descripcion" value={formData.description} onChange={handleChange}/>
          <input className="form_option" type="text"  name="category" placeholder="Categoria" value={formData.category} onChange={handleChange}/>
          <input className="form_option" type="number"  name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange}/>
          <input className="form_option" type="text"  name="img" placeholder="Imagen del producto" value={formData.imagen} onChange={handleChange}/>
          <input className="form_option" type="number"  name="price" placeholder="Ingrese precio" value={formData.price} onChange={handleChange}/>
          <input className="form_option" type="submit" value="Crear producto" onClick={sucess}/>
      </form>
  )
};

export default CreateItem;
