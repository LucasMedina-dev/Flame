/* eslint-disable */
import Nav from './Nav'

const Header = (params) => {
    return (
        <header className={params.className}>
            <div className="header_title">
                <a href="#" className="header_title-style">Noose</a>
            </div>
            <div className="header_nav">
                <Nav/>
                <label htmlFor="botonUsuario" className="header_nav-button far fa-user-circle"></label>
                <button id="botonUsuario" style={{display:"none"}}></button>
            </div>
        </header>
    )
}

export default Header