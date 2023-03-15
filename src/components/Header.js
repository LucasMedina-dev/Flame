/* eslint-disable */
import { useState, useEffect } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = (params) => {
    const [tab, setTab]=useState(false);
    const tabSwitch=()=>{
        tab?setTab(false):setTab(true);
    }
    return (
        <header className={params.className}>
            <div className="header_nav">
                <FontAwesomeIcon className='header_button' icon={faBars} onClick={tabSwitch}/>
                <Nav tab={tab}/>
            </div>
            <div className="header_title">
                <Link to="/" className="header_title-style">
                    <img className="header_image-size" src='https://i.ibb.co/48bRsjf/icon.png'></img>
                    <h1>Flame</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header