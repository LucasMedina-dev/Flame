import { createContext, useState } from "react";
import { setDoc, doc} from 'firebase/firestore'
import { db } from "../../firebase";
import Swal from 'sweetalert2'

export const formContext = createContext()
const {Provider} = formContext

const FormContext = ({children}) => {
    console.log('compilo')
    const [formData, setFormData]=useState({})
    const [idSearched, setIdSearched]=useState(false)
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const setRequestedItem=(item)=>{
        setFormData(item)
    }
    const submitItem=(e)=>{
        e.preventDefault()
        addDoc(formData)
        setIdSearched(false)
    }
    async function addDoc(document){
        // eslint-disable-next-line
        const docRef= setDoc(doc(db, "Productos", `${document.id}`), document)
    }
    
    const queryIdSearched=(e)=>{
        setIdSearched(e)
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
        formData,
        setFormData,
        handleChange,
        submitItem,
        addDoc,
        setRequestedItem,
        idSearched,
        queryIdSearched,
        alertErr,
        alertSucess
    }

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
};

export default FormContext;
