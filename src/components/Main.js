import { Route, Routes} from 'react-router'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import HomeContainer from './Home/HomeContainer'
import CartContainer from './Cart/CartContainer'
import BuyContainer from './Buy/BuyContainer'
import Contact from './Contact'
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
                    <Route path="/Contacto" element={
                        <Contact/>
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
