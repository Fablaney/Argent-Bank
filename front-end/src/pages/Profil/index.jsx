// import react
import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { Link, Navigate } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux'

// import perso
import "./style.scss"
// import Loader from "../../components/Loader"

// import authService from '../../features/auth/authService'
// import { editUser, setProfile } from '../../features/auth/authSlice'

/**
 * Render of Profil page
 * @function Profil
 * @param {*}
 * @returns {jsx}
 */
function Profil()
{
    // const dispatch = useDispatch()

    // useEffect( () => {

    //     authService.getProfil().then((data) => {
    //         console.log(data)
    //         dispatch(setProfile(data))
    //     })

    // }, [])

    // const { user: currentUser } = useSelector((state) => state.auth)
    // // const { user: currentUser } = useSelector((state) => state.user)

    // const [formData, setFormData] = useState({
    //     firstName: currentUser.firstName,
    //     lastName: currentUser.lastName,
    // })

    // const { firstName, lastName } = formData

    // // console.log(formData)

    // function onSubmit(e)
    // {
    //     e.preventDefault()

    //     const userData = {firstName,lastName}

    //     dispatch(editUser(userData))
    // }

    // function onChange(e)
    // {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    // if (!currentUser)
    // {
    //     return <Navigate to="/login" />;
    // }
    
    // if (isLoading === true)
    // {
    //     return (
    //         <Loader/>
    //     )
    // }
    
    // else
    // {
        return (
            <main className="main bg-dark">
    
                <div className="header">

                    <h1>
                        Welcome back
                        <br/>
                        {/* {currentUser.firstName} {currentUser.lastName} */}
                    </h1>

                    <button className="edit-button">Edit Name</button>

                </div>

                <div className="header-edit">

                    <form className="edit-user-form"
                        // onSubmit={onSubmit}
                    >

                        <div className='edit-user-form-imputs'>

                            <input
                                type="text"
                                name="firstName"
                                // value={firstName}
                                // placeholder={currentUser.firstName}
                                // onChange={onChange}
                            />

                            <input
                                type="text"
                                name="lastName"
                                // value={lastName}
                                // placeholder={currentUser.lastName}
                                // onChange={onChange}
                            />

                        </div>
                        
                        <div className='edit-user-form-buttons'>
                            <button type="submit" className="save-button">Save</button>
                            <button className="cancel-button">Cancel</button>
                        </div>
                        
                    </form>
                    
                </div>

                {/* {
                    document.querySelector(".edit-button").addEventListener("click", () => {
                        console.log("click")
                        document.querySelector(".header").classList.add("d-none")
                        document.querySelector(".header-edit").classList.remove("d-none")
                    })
                }
                {
                    document.querySelector(".save-button").addEventListener("click", () => {
                        console.log("click")
                        document.querySelector(".header").classList.remove("d-none")
                        document.querySelector(".header-edit").classList.add("d-none")
                    })
                } */}

                <h2 className="sr-only">Accounts</h2>
    
                <section className="account">
    
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
    
                    <div className="account-content-wrapper cta">
                        <Link className="main-nav-item" to="/transactions">
                            <button className="transaction-button">View transactions</button>
                        </Link>
                    </div>
    
                </section>
    
                <section className="account">
    
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
    
                    <div className="account-content-wrapper cta">
                        
                        <Link className="main-nav-item" to="/transactions">
                            <button className="transaction-button">View transactions</button>
                        </Link>
                    </div>
    
                </section>
    
                <section className="account">
    
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
    
                    <div className="account-content-wrapper cta">
                        <Link className="main-nav-item" to="/transactions">
                            <button className="transaction-button">View transactions</button>
                        </Link>
                    </div>
    
                </section>
    
            </main>
        )
    // }
}

export default Profil