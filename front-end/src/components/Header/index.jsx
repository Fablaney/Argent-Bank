// import react
import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useEffect } from "react"
import axios from "axios"

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

    // fonction logout
    const handleLogout = () => {

        // On appelle la fonction du reducer "logout" qui passera les données user à null
        dispatch(userActions.logout())

    }

    // use effect, on vérifie si il y à un token et on récupere les données de l'utilisateur on refresh le store avec
    useEffect(() => {

        let token = localStorage.getItem("userToken")

        if(token)
        {
            // modifie les autorisations avec le token
            axios.defaults.headers["Authorization"] = `Bearer ${token}`

            // requete pour récuperer les données de l'utilisateur si il est déja connecté
            axios.post("http://localhost:3001/api/v1/user/profile").then(response => {
   
                // on appelle la fonction "login" le l'user reducer
                dispatch(userActions.login(response.data.body))
            })
        }

    },[])

    return (
        <header className='d-flex align-items-center'>
         
            <nav className="main-nav">

                <NavLink className="main-nav-logo" to="/">

                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

                    <h1 className="sr-only">Argent Bank</h1>

                </NavLink>

                <div className="navbar-nav ml-auto">

                    {
                        // selon si on à un user connecté on affiche l'onglet logout ou login
                        user.id != null ? 
                        ( 
                            <>
                            <NavLink to={"/profil"} className="nav-link">
                                <FaUser/>
                                Profil
                            </NavLink>
                            <NavLink to={"/"} className="nav-link" onClick={handleLogout}>
                                <FaSignOutAlt/>
                                Logout
                            </NavLink>
                            </>
                        )
                        :
                        (
                            <NavLink to={"/login"} className="nav-link">
                                <FaSignInAlt/>
                                Login
                            </NavLink>
                        )
                    }

                </div>
    
            </nav>

        </header>
    )
}
    
export default Header