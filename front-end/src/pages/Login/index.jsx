import { useState } from "react"

// import perso
import "./style.scss"

function Login()
{
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("mail et mdp")
        console.log(userEmail, userPassword)

        try
        {
          
        }
        catch(error)
        {
           
        }
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