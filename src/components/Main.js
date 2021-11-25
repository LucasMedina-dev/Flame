import ItemListContainer from './ItemListContainer'

const Main = (prop) => {
    return (
        <div className="main">
            <ItemListContainer greeting={prop.userName}/>
            
        </div>
    )
}

export default Main
