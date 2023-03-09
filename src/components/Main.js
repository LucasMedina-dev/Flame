import { Route, Routes } from 'react-router'
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
import ItemListContext from './Contexts/ItemListContext'
const Main = () => {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={
                        <HomeContainer />
                    }/>
                    <Route path="/Productos" element={
                        <ItemListContext>
                            <ItemListContainer/>
                        </ItemListContext>
                    }/>
                    <Route path="/Productos/categoria/:category" element={
                        <ItemListContext>
                            <ItemListContainer/>
                        </ItemListContext>
                    }/>
                    <Route path="/Productos/:id" element={
                        <ItemDetailContainer/>
                    }/>
                    <Route path="/Contacto" element={
                        <Contact/>
                    }/>
                    <Route path="/Login" element={
                        <LoginFormContainer/>
                    }/>
                    <Route path="/Cuenta" element={
                        <AccountContainer/>
                    }/>
                    <Route path="/Cuenta/:option" element={
                        <>
                            <FormContext>
                                <AccountContainer/>
                                <AccountFormContainer/>
                            </FormContext>
                        </>
                    }/>
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
