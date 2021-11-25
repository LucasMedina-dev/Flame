/* eslint-disable */
import CartWidget from './CartWidget'
import Nav from './Nav'

const Header = (params) => {
    return (
        <header className={params.className}>
            <div className="header_title">
                <a href="#" className="header_title-style">Noose</a>
            </div>
            <div className="header_nav">
                <Nav/>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header