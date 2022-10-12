// import { useState, useEffect } from "react"
// import { FaUser } from "react-icons/fa"
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"
// import { register, reset } from "../../features/auth/authSlice"

// import perso
// import Spinner from "../../components/Spinner/Spinner"

/**
 * Render of Register page
 * @function Register
 * @param {*}
 * @returns {jsx}
 */
function Register()
{
    // const [formData, setFormData] = useState({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    //     password2: '',
    // })

    // const { name,lastname, email, password, password2 } = formData

    // const navigate = useNavigate()

    // const dispatch = useDispatch()

    // const { user, isLoading, isError, isSuccess, message } = useSelector(
    //     (state) => state.auth
    // )
 
    // useEffect(() => {
    //     if ( isError )
    //     {
    //         toast.error(message)
    //     }
    //     if ( isSuccess || user)
    //     {
    //         navigate("/profil")
    //     }
    //     dispatch(reset())

    // }, [user, isError, isLoading, isSuccess, message, navigate, dispatch])

    // function onSubmit(e)
    // {
    //     e.preventDefault()

    //     if (password !== password2 )
    //     {
    //         toast.error("Password not match")
    //     }
    //     else
    //     {
    //         const userData = {name, lastname, email, password}

    //         dispatch(register(userData))
    //     }
    // }

    // function onChange(e)
    // {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    // if ( isLoading )
    // {
    //     return <Spinner/>
    // }

    return (
        <main className="main bg-dark login">

            <section className="sign-in-content">

                <i className="fa fa-user-circle sign-in-icon"></i>

                <h1>Register</h1>

                <form
                    // onSubmit={onSubmit}
                >

                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            // value={name}
                            placeholder="Entrez votre Nom"
                            // onChange={onChange}
                        />
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            // value={lastname}
                            placeholder="Entrez votre Prénom"
                            // onChange={onChange}
                        />
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            // value={email}
                            placeholder="Entrez votre Email"
                            // onChange={onChange}
                        />
                    </div>
                 
                    <div className="input-wrapper">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            // value={password}
                            placeholder="password"
                            // onChange={onChange}
                        />
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            // value={password2}
                            placeholder="password confirm"
                            // onChange={onChange}
                        />
                    </div>

                    <button type="submit" className="sign-in-button">Create Account</button>    

                </form>

            </section>

        </main>
    )
}

export default Register