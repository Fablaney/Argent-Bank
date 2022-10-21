import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useStore } from "react-redux"
import { useSelector } from "react-redux"
import axios from "axios"

// import perso
import "./style.scss"
import { userActions } from "../../store/user"

function Login()
{
    // const ApiUrl = "http://localhost:3001/api/v1/"

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userEmail, setUserEmail] = useState()
    const [userPassword, setPassword] = useState()

    // on recupere le form quand il est envoyé
    const handleSubmit = async (e) => {
        e.preventDefault()

        // requete post pour envoyer le mail et mdp
        axios.post("http://localhost:3001/api/v1/user/login", {
            // l'api attend un email et un password on lui passe ceux des champs du formulaire
            email: userEmail, password: userPassword
        }).then(response => {

            // modifie les autorisations avec le token
            axios.defaults.headers["Authorization"] = `Bearer ${response.data.body.token}`

            // on met le token en localstorage
            localStorage.setItem("userToken", response.data.body.token)                

            // requete pour récuperer les données de l'utilisateur
            axios.post("http://localhost:3001/api/v1/user/profile").then(response => {

                // on appelle la fonction "login" le l'user reducer
                dispatch(userActions.login(response.data.body))
          
                console.log("on est connecté")

                // on redirige sur la page profil
                navigate("/profil")
            })
        })
    }

    const user = useSelector(state => state.user)
    
    useEffect(() => {
        
        console.log(user.isLogged)

        if(user.isLogged == true)
        {
            navigate("/profil")
        }
    },[])
   

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