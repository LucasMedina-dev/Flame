import '../styles/css/style.css';
import Header from './Header';
import Main from './Main'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Contexts/CartProvider';
import AccountContext from './Contexts/AccountContext';
const App = ()=> {
    let userName="lucas"
    return (
        // Esto equivale a header({id:"header"}), por lo tanto si en Header.js
        // ejecuto un console.log(params), puedo ver las propiedades dadas desde App
        <BrowserRouter>
            <CartProvider>
                <AccountContext>
                    <Header className="header"/>
                    <Main userName={userName}/> 
                </AccountContext>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;
