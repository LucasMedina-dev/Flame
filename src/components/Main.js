import ItemListContainer from './ItemListContainer/ItemListContainer'

const Main = (prop) => {
    return (
        <div className="main">
            <ItemListContainer greeting={prop.userName}/>
        </div>
    )
}

export default Main
