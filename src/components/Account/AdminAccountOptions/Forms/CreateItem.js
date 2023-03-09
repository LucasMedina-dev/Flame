import { useContext } from "react";
import { formContext } from "../../../Contexts/FormContext";
const CreateItem = () => {
  const {handleChange, submitItem, alertSucess, setFormData}=useContext(formContext)
  const sucess=(e)=>{
    e.preventDefault();
    alertSucess("Producto agregado con exito!");
    submitItem(e);
    setFormData({});
  }
  return (
      <form className="form">
          <input className="form_option" type="number"  name="id" placeholder="Id numerico" onChange={handleChange}/>
          <input className="form_option" type="text"  name="name" placeholder="Nombre del producto" onChange={handleChange}/>
          <input className="form_option" type="text"  name="description" placeholder="Descripcion" onChange={handleChange}/>
          <input className="form_option" type="text"  name="category" placeholder="Categoria" onChange={handleChange}/>
          <input className="form_option" type="number"  name="stock" placeholder="Stock" onChange={handleChange}/>
          <input className="form_option" type="text"  name="img" placeholder="Imagen del producto" onChange={handleChange}/>
          <input className="form_option" type="number"  name="price" placeholder="Ingrese precio" onChange={handleChange}/>
          <input className="form_option" type="submit" value="Crear producto" onClick={sucess}/>
      </form>
  )
};

export default CreateItem;
