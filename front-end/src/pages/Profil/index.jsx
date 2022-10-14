// import react
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

// axios
import axios from 'axios'

// import perso
import "./style.scss"
import TransactionWrapper from '../../components/TransactionWrapper'
import { userActions } from '../../store/user'

/**
 * Render of Profil page
 * @function Profil
 * @param {*}
 * @returns {jsx}
 */
function Profil()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    // console.log(user)

    const userFromSessionStorage = sessionStorage.getItem("userSession")
    console.log(userFromSessionStorage)
    
    useEffect(() => {
        // si on à pas d'utilisateur on redirige sur login
        if (user.id == null)
        {
            navigate("/login")
        }

        
        // on fait apparaitre le form pour update l'user
        document.querySelector(".edit-button").addEventListener("click", () => {
            console.log("toogle open edit")
            document.querySelector(".header").classList.add("d-none")
            document.querySelector(".header-edit").classList.remove("d-none")
        })
        // on ferme le form pour update l'user et on envoie les nouvelles données
        document.querySelector(".save-button").addEventListener("click", () => {
            console.log("toogle close edit")
            document.querySelector(".header").classList.remove("d-none")
            document.querySelector(".header-edit").classList.add("d-none")
        })
        // on ferme le form pour update l'user
        document.querySelector(".cancel-button").addEventListener("click", () => {
            console.log("toogle close edit")
            document.querySelector(".header").classList.remove("d-none")
            document.querySelector(".header-edit").classList.add("d-none")
        })

    },[])

    const [updateFirstName, setUpdateFirstName] = useState()
    const [updateLastName, setUpdateLastName] = useState()

    // on recupere le form quand il est envoyé
    const updateSubmit = async (e) => {
        e.preventDefault()


        // requete post pour envoyer le mail et mdp
        axios.put("http://localhost:3001/api/v1/user/profile", {
            // l'api attend un firstname et lastname on lui passe ceux des champs du formulaire
            firstName: updateFirstName, lastName: updateLastName

        }).then(response => {
            // console.log(response.data)

            // modifie les autorisations avec le token
            axios.defaults.headers["Authorization"] = `Bearer ${response.data.body.token}`

            // on met le token en localstorage
            localStorage.token = response.data.body.token

            // on appelle la fonction "login" le l'user reducer
            dispatch(userActions.updateUser(response.data.body))

            // console.log("on est connecté")
        })
    }

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

            <div className="header-edit d-none">

                <form className="edit-user-form"
                    onSubmit={updateSubmit}
                >

                    <div className='edit-user-form-imputs'>

                        <input
                            type="text"
                            name="firstName"
                            // value={user.firstName}
                            placeholder={user.firstName}
                            onChange={e => setUpdateFirstName(e.target.value)}
                        />

                        <input
                            type="text"
                            name="lastName"
                            // value={user.lastName}
                            placeholder={user.lastName}
                            onChange={e => setUpdateLastName(e.target.value)}
                        />

                    </div>
                    
                    <div className='edit-user-form-buttons'>
                        <button type="submit" className="save-button">Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                    
                </form>
                
            </div>

            <h2 className="sr-only">Accounts</h2>

            {/* datas mockées */}
            <TransactionWrapper/>

        </main>
    )
}

export default Profil