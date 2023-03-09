import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { db } from "../../../../firebase";
import { formContext } from "../../../Contexts/FormContext";

const ModifyOffer = () => {
    const {handleChange, formData, setFormData, alertSucess, alertErr }=useContext(formContext)
    const updateOffer=  (e)=>{
        e.preventDefault()
<<<<<<< HEAD
        const producto=doc(db, "Productos", `${formData.id}`)
        const promise= getDoc(producto)
        promise
        .then((element)=>{
            if(element.data() && formData.inoffer>=0 && formData.inoffer<100){
                updateDoc(producto, {inoffer: formData.inoffer});
                alertSucess("Oferta realizada con exito");
            }else if(!element.data()){
                alertErr("No existe producto correspondiente al id");
            }else if(!formData.inoffer){
                alertErr('No ingreso porcentaje de oferta');
            }
            setFormData({})
        })
=======
        if(formData.id && formData.inoffer){
            const producto=doc(db, "Productos", `${formData.id}`)
            const promise= getDoc(producto)
            promise
            .then((element)=>{
                if(element.data()){
                    updateDoc(producto, {inoffer: formData.inoffer})
                    alertSucess("Oferta realizada con exito")
                }else{
                    alertErr("No existe producto correspondiente al id")
                }
            })
        }else{
            alertErr("Llene los campos vacios")
        }
        
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
    }
    return (
        <form className="form">
            <input className="form_option" type="number"  name="id" placeholder="Id numerico" value={formData.id} onChange={handleChange}/>
            <input className="form_option" type="text"  name="inoffer" placeholder="Porcentaje de oferta" value={formData.inoffer} onChange={handleChange}/>
            <input className="form_option" type="submit" value="Modificar producto" onClick={updateOffer}/>
        </form>
    )
};
export default ModifyOffer;
