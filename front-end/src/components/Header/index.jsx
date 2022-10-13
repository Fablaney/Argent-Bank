// import react
import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

// import perso
import logo from "../../designs/img/argentBankLogo.png"
import "./style.scss"
import { userActions } from "../../store/user"

/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const handleLogout = async (e) => {

        // On appelle la fonction du reducer "logout" qui passera les données user à null
        dispatch(userActions.logout())
  
        console.log("on deconnecte et retour à la page d'accueil")
    }

    return (
        <header className='d-flex align-items-center'>
         
            <nav className="main-nav">

                <NavLink className="main-nav-logo" to="/">

                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

                    <h1 className="sr-only">Argent Bank</h1>

                </NavLink>

                <div className="navbar-nav ml-auto">

                    <li className="nav-item">
                    {
                        // selon si on à un user connecté on affiche l'onglet logout ou login
                        user.id != null ? 
                        ( 
                            <NavLink to={"/"} className="nav-link" onClick={handleLogout}>
                                <FaSignOutAlt/>
                                Logout
                            </NavLink>
                        )
                        :
                        (
                            <NavLink to={"/login"} className="nav-link">
                                <FaSignInAlt/>
                                Login
                            </NavLink>
                        )
                    }
                    </li>

                </div>
    
            </nav>

        </header>
    )
}
    
export default Header