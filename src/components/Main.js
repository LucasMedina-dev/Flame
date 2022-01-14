import { Route, Routes} from 'react-router'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import HomeContainer from './Home/HomeContainer'
import CartContainer from './Cart/CartContainer'
import BuyContainer from './Buy/BuyContainer'
<<<<<<< HEAD
import Contact from './Contact'
=======
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
const Main = () => {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/Inicio" element={
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
<<<<<<< HEAD
                    <Route path="/Contacto" element={
                        <Contact/>
                    }>  
                    </Route>
=======
>>>>>>> 6c265789a979c14a4d90158940c6954b5e371613
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
