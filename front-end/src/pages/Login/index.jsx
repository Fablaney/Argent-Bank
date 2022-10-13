import React from "react";
import { useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import { userActions } from "../../store/user"
import { useDispatch } from "react-redux";
// import perso
import "./style.scss"

function Login()
{

    // const ApiUrl = "http://localhost:3001/api/v1/"

    const navigate = useNavigate()

    const [userEmail, setUserEmail] = useState()
    const [userPassword, setPassword] = useState()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // requete post pour envoyer le mail et mdp
        axios.post("http://localhost:3001/api/v1/user/login", {
            email: userEmail, password: userPassword
        }).then(response => {
            console.log(response.data)

            // modifie les autorisations avec le token
            axios.defaults.headers["Authorization"] = `Bearer ${response.data.body.token}`

            // on met le token en localstorage
            localStorage.token = response.data.body.token

            // requete pour récuperer les données de l'utilisateur
            axios.post("http://localhost:3001/api/v1/user/profile").then(response => {
                console.log(response.data)

                dispatch(userActions.login(response.data.body))

                navigate("/profil")
            })
        })

        console.log("mail et mdp")
        console.log(userEmail, userPassword)
    }
 
    return (
        <main className="main bg-dark login">

            <section className="sign-in-content">

                <i className="fa fa-user-circle sign-in-icon"></i>

                <h1>Sign In</h1>

                <form
                    onSubmit={handleSubmit}
                >

                    <div className="input-wrapper">

                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Entrez votre E-mail"
                            name="email"
                            onChange={e => setUserEmail(e.target.value)}
                        />

                    </div>

                    <div className="input-wrapper">

                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Entrez votre mot de passe"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />

                    </div>

                    <div className="input-remember">

                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>

                    </div>

                    <button type="submit" className="sign-in-button">Sign In</button>    

                </form>

            </section>

        </main>
    )
}

export default Login