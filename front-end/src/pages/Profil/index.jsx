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

        if (token == null)
        {
            navigate("/login")
        }

    },[token])

    // je prépare les inputs firstname et lastname en leur mettant apr défaut la valeur actuelle
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
            // console.log(response.data)

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