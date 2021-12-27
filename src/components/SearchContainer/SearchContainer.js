import { Link } from "react-router-dom"

const SearchContainer = ({categories}) => {

    return (
        <div className="search">
            <p className="search_title">Categorias</p>
            <ul>
                {categories.map(e=>{
                    return(
                        <Link to={"/Category/"+e}><li className="search_category" id={e}>{e}</li></Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchContainer
