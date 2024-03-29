import '../styles/css/style.css';
import Header from './Header';
import Main from './Main'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Contexts/CartProvider';
import AccountContext from './Contexts/AccountContext';
import FormContext from './Contexts/FormContext';

const App = ()=> {
    return (
        <BrowserRouter>
            <CartProvider>
                <AccountContext>
                    <FormContext>
                            <Header className="header"/> 
                            <Main/> 
                    </FormContext>
                </AccountContext>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;
//Crear contexto para que pulse las 3 barritas del header y abra algo en el main, el menu mas bien, capaz haga falta hacer otro nav, o no