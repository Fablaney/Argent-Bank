// import react
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react'

// import perso
import "./style.scss"

/**
 * Render of Profil page
 * @function Profil
 * @param {*}
 * @returns {jsx}
 */
function Profil()
{
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
    console.log(user)

    useEffect(() => {
        if (user.id == null)
        {
            navigate("/login")
        }

        
    },[])

    return (
        <main className="main bg-dark">

            <div className="header">

                <h1>
                    Welcome back
                    <br/>
                    
                    {user.firstName} {user.lastName}
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
}

export default Profil