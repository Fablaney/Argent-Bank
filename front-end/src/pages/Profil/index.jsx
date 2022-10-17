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

    let token = localStorage.getItem("userToken")

    useEffect(() => {
        // si on à pas d'utilisateur on redirige sur login
        // if (user.id == null)
        // {
        //     navigate("/login")
        // }
        if (token == null)
        {
            navigate("/login")
        }

        if(token)
        {
            axios.post("http://localhost:3001/api/v1/user/profile").then(response => {

                // on appelle la fonction "login" le l'user reducer
                dispatch(userActions.login(response.data.body))
            })
        }

    },[token])

    const [updateFirstName, setUpdateFirstName] = useState()
    const [updateLastName, setUpdateLastName] = useState()

    const newuser = (newFirstname, defaultFirstName, newLastName, defaultLastName) => {
        if (newFirstname != defaultFirstName)
        {
            return newuser
        }
        if (newLastName != defaultLastName)
        {
            return newuser
        }
        if(newFirstname === defaultFirstName)
        {
            return defaultFirstName
        }  
        if(newFirstname === defaultFirstName)
        {
            return defaultFirstName
        }
    }

    // on recupere le form quand il est envoyé
    const updateSubmit = async (e) => {
        e.preventDefault()

        newuser(updateFirstName, user.firstName, updateLastName, user.lastName)

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

            // on appelle la fonction "updateUser" le l'user reducer
            dispatch(userActions.updateUser(response.data.body))
        })
    }

    return (
        <main className="main bg-dark">

            {   
                // par défaut le header simple avec le bouton edit
                user.isEditing == false ?
                (
                    <div className="header">

                        <h1>
                            Welcome back
                            <br/>
                            
                            {user.firstName} {user.lastName}
                        </h1>
        
                        <button className="edit-button" onClick={() => dispatch(userActions.isEdit())}>Edit Name</button>
        
                    </div>
                )
                :
                (
                    // si on à cliqué sur edit pour modifier le nom et prenom de l'utilisateur
                    <div className="header-edit">

                        <form className="edit-user-form"
                            onSubmit={updateSubmit}
                        >
        
                            <div className='edit-user-form-imputs'>
        
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={user.firstName}
                                    placeholder={user.firstName}
                                    onChange={e => setUpdateFirstName(e.target.value)}
                                />
        
                                <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={user.lastName}
                                    placeholder={user.lastName}
                                    onChange={e => setUpdateLastName(e.target.value)}
                                />
        
                            </div>
                            
                            <div className='edit-user-form-buttons'>
                                <button type="submit" className="save-button">Save</button>
                                <button className="cancel-button" onClick={() => dispatch(userActions.isCancel())}>Cancel</button>
                            </div>
                            
                        </form>
                    
                    </div>
                )
            }

            <h2 className="sr-only">Accounts</h2>

            {/* datas mockées */}
            <TransactionWrapper/>

        </main>
    )
}

export default Profil