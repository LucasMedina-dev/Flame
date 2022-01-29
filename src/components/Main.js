import { Route, Routes} from 'react-router'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import HomeContainer from './Home/HomeContainer'
import CartContainer from './Cart/CartContainer'
import BuyContainer from './Buy/BuyContainer'
import Contact from './Contact'
import LoginFormContainer from './Form/LoginFormContainer'
import AccountContainer from './Account/AccountContainer'
import AccountFormContainer from './Account/AdminAccountOptions/AccountFormContainer'
import FormContext from './Contexts/FormContext'
const Main = () => {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={
                        <HomeContainer />
                    }>
                    </Route>
                    <Route path="/Productos" element={
                        <ItemListContainer/>
                    }>
                    </Route>
                    <Route path="/Productos/:id" element={
                        <ItemDetailContainer/>
                    }>  
                    </Route>
                    <Route path="/Contacto" element={
                        <Contact/>
                    }>  
                    </Route>
                    <Route path="/Login" element={
                        <LoginFormContainer/>
                    }>
                    </Route>
                    <Route path="/Cuenta" element={
                        <AccountContainer/>
                    }>
                    </Route>
                    <Route path="/Cuenta/:option" element={
                        <>
                            <FormContext>
                                <AccountContainer/>
                                <AccountFormContainer/>
                            </FormContext>
                        </>
                    }>
                    </Route>
                </Routes>

            </div>
            <div className='items'>
                <Routes>
                    <Route path="/Cart" element={
                        <CartContainer/>
                    }>
                    </Route>
                    <Route path="/Buy/:id" element={
                        <BuyContainer/>
                    }>
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default Main
