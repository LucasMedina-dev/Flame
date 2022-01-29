import { Link } from "react-router-dom"

const SearchContainer = ({categories, search}) => {

    return (
        <div className="search">
            <p className="search_title">Categorias</p>
            <ul>
                {categories.map(e=>{
                    return(
                        <Link to={`/Productos/${e}`}><li className="search_category" id={e}>{e}</li></Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchContainer
