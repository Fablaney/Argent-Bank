// import react
import React, { Suspense } from 'react'
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
    // recup des données de l'user
    const user = useSelector(state => state.user)

    // initialisation de navigate et dispatch
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let token = localStorage.getItem("userToken")

    // si il n'y à pas de token = pas d'user => on redirige verse la page login
    useEffect(() => {

        if (token == null)
        {
            navigate("/login")
        }

    },[token])

    // je prépare les inputs firstname et lastname en leur mettant par défaut la valeur actuelle
    const [updateFirstName, setUpdateFirstName] = useState(user.firstName)
    const [updateLastName, setUpdateLastName] = useState(user.lastName)

    // on recupere le form quand il est envoyé
    const updateSubmit = async (e) => {
        e.preventDefault()

        // requete post pour envoyer le mail et mdp
        axios.put("http://localhost:3001/api/v1/user/profile", {
            // l'api attend un firstname et lastname on lui passe ceux des champs du formulaire
            firstName: updateFirstName, lastName: updateLastName

        }).then(response => {

            // on appelle la fonction "updateUser" le l'user reducer qui change le nom / prenom / isEdit = false
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
                // si on à cliqué sur edit pour modifier le nom et prenom de l'utilisateur
                (
                    <div className="header-edit">

                        <form className="edit-user-form"
                            onSubmit={updateSubmit}
                        >
        
                            <div className='edit-user-form-imputs'>
        
                                <input
                                    type="text"
                                    name="firstName"
                                    value={updateFirstName}
                                    placeholder={updateFirstName}
                                    onChange={e => setUpdateFirstName(e.target.value)}
                                />
        
                                <input
                                    type="text"
                                    name="lastName"
                                    value={updateLastName}
                                    placeholder={updateLastName}
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