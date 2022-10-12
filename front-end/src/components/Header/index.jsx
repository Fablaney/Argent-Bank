// import react
import React from "react"
import { NavLink } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

// import perso
import logo from "../../designs/img/argentBankLogo.png"
import "./style.scss"

// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"

// import { logout } from "../../features/auth/authSlice"
// import { reset } from "../../features/auth/authSlice"
// import { useNavigate } from "react-router-dom"


/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const {user} = useSelector((state) => state.auth)

    // const onLogout = () => {
    //     dispatch(logout())
    //     dispatch(reset())
    //     navigate('/')
    // }

    return (

        <header className='d-flex align-items-center'>
         
            <nav className="main-nav">

                <NavLink className="main-nav-logo" to="/">

                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />

                    <h1 className="sr-only">Argent Bank</h1>

                </NavLink>

                <div className="navbar-nav ml-auto">

                    {/* {user ?
                        (    */}
                        <>
                            <li className="nav-item">
                                <button className="btn"
                                    // onClick={onLogout}
                                >
                                    <FaSignOutAlt/>
                                    Logout
                                </button>
                            </li>
                            </>

                        {/* // )
                        // :
                        // (    */}
                        <>
                            <li className="nav-item">
                                <NavLink to={"/login"} className="nav-link">
                                    <FaSignInAlt/>
                                    Login
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/register"} className="nav-link">
                                    <FaSignInAlt/>
                                    Register
                                </NavLink>
                            </li>
                            </>
                    {/* //     )
                    // } */}

                </div>
    
            </nav>

        </header>
    )
}
    
export default Header