import React, { useRef, Component } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink


const Navbar = () => {




    return (
        <nav className="nav-bar">

            <div className="nav-bar__logo-container">
                <img src="img/logo.jpg" alt="" />

            </div>
            <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item">
                    <Link to="section-cards" spy={true} smooth={true} offset={0} duration={1000} className="nav-bar__nav-link">
                        Inicio
                    </Link>
                </li>
                {/* <li className="nav-bar__nav-item">
                    <NavLink to="/alta" className="nav-bar__nav-link">
                        Alta
                    </NavLink>
                </li> */}
                <li className="nav-bar__nav-item">
                    <Link to="nosotros" spy={true} smooth={true} offset={0} duration={1000} className="nav-bar__nav-link">
                        Nosotros
                    </Link>
                </li>
                <li className="nav-bar__nav-item">
                    <Link to="contactos" spy={true} smooth={true} offset={0} duration={1000} className="nav-bar__nav-link">
                        Contacto
                    </Link>
                </li>
                {/* <li className="nav-bar__nav-item">
                    <Link to="calendario" spy={true} smooth={true} offset={50} duration={1000} className="nav-bar__nav-Link">
                        Calendar
                    </Link>
                </li> */}
            </ul>
        </nav>/* <!-- nav-bar --> */
    )
}

export default Navbar