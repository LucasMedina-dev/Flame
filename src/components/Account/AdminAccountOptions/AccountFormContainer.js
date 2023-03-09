import CreateItem from './Forms/CreateItem';
import ModifyItem from './Forms/ModifyItem';
import DeleteItem from './Forms/DeleteItem';
import ModifyOffer from './Forms/ModifyOffer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../Contexts/AccountContext';
const AccountFormContainer = () => {
    const {option}=useParams()
<<<<<<< HEAD
    if(option==="CreateItem"){
=======
    const {status}=useContext(userContext)
    let redirect
    if (!status){
        return <></>
    }else{
        redirect=option
    }
    if(redirect==="CreateItem"){
>>>>>>> f31927b6e2246c1e0770ba1b28d979dbb2b44935
        return(<CreateItem/>)
    }
    if(option==="ModifyItem"){
        return(<ModifyItem/>)
    }
    if(redirect==="DeleteItem"){
        return(<DeleteItem/>)
    }
    if(redirect==="ModifyOffer"){
        return(<ModifyOffer/>)
    }
};

export default AccountFormContainer;
