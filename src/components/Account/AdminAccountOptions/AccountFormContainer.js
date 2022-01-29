import CreateItem from './Forms/CreateItem';
import ModifyItem from './Forms/ModifyItem';
import DeleteItem from './Forms/DeleteItem';
import ModifyOffer from './Forms/ModifyOffer';
import { useParams } from 'react-router-dom';

const AccountFormContainer = () => {
    const {option}=useParams()

    if(option==="CreateItem"){
        return(<CreateItem/>)
    }
    if(option==="ModifyItem"){
        return(<ModifyItem/>)
    }
    if(option==="DeleteItem"){
        return(<DeleteItem/>)
    }
    if(option==="ModifyOffer"){
        return(<ModifyOffer/>)
    }
};

export default AccountFormContainer;
