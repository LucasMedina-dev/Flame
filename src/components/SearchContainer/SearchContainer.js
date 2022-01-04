const SearchContainer = ({categories, search}) => {

    return (
        <div className="search">
            <p className="search_title">Categorias</p>
            <ul>
                {categories.map(e=>{
                    return(
                        <li className="search_category" id={e} onClick={search}>{e}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchContainer
