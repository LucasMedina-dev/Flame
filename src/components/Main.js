import { Route, Routes} from 'react-router'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import HomeContainer from './Home/HomeContainer'
import CartContainer from './Cart/CartContainer'
import CartProvider from './Contexts/CartProvider'
import CategoryDetailContainer from './CategoryDetailContainer/CategoryDetailContainer'

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/Inicio" element={
                    <HomeContainer />
                }>
                </Route>
                <Route path="/Productos" element={
                    <>
                        <ItemListContainer/>
                    </>
                }>
                </Route>
                <Route path="/Productos/:id" element={
                    <ItemDetailContainer/>
                }>  
                </Route>
                <Route path="/Cart" element={
                    <CartProvider>
                        <CartContainer/>
                    </CartProvider>
                }>
                </Route>
                <Route path="/Buy/:id" element={
                    <CartProvider>
                        <CartContainer/>
                    </CartProvider>
                }>
                </Route>
                <Route path="Category/:categoryId" element={
                    <CategoryDetailContainer/>
                }>
                </Route>
            </Routes>
            
        </div>
    )
}

export default Main
