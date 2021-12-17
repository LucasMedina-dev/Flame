import { Route, Routes} from 'react-router'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import SearchContainer from './SearchContainer/SearchContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import HomeContainer from './Home/HomeContainer'

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
                        <SearchContainer/>
                        <ItemListContainer/>
                    </>
                }>
                </Route>
                <Route path="/Productos/:id" element={
                    <ItemDetailContainer/>
                }>  
                </Route>
                <Route path="/Cart" element={
                    <h1>Carrito</h1>
                }>
                </Route>
                <Route path="/Buy" element={
                    <h1>Proceder con la compra</h1>
                }>
                </Route>
            </Routes>
            
        </div>
    )
}

export default Main
