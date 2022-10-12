// import react
import React from "react"
import { NavLink } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

// import perso
import logo from "../../designs/img/argentBankLogo.png"
import "./style.scss"


/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    return (

        <header className='d-flex align-items-center'>
         
            <nav className="main-nav">

                <NavLink className="main-nav-logo" to="/">

                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

                    <h1 className="sr-only">Argent Bank</h1>

                </NavLink>

                <div className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link">
                            <FaSignOutAlt/>
                            Logout
                        </NavLink>
                    </li>
        
                    <li className="nav-item">
                        <NavLink to={"/login"} className="nav-link">
                            <FaSignInAlt/>
                            Login
                        </NavLink>
                    </li>

                </div>
    
            </nav>

        </header>
    )
}
    
export default Header