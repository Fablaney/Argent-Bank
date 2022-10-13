// import React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from 'react-redux'

// import perso
import './index.scss'
import store from './store'

// pages
import Accueil from './pages/Accueil'
import Login from "./pages/Login"
import Profil from './pages/Profil'
import Transactions from './pages/Transactions'
import Error from './pages/Error'

// composants
import Header from "./components/Header"
import Footer from "./components/Footer"



/**
 * Router his job is send the good page whith the URL, or 404 if page not found
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>

        <Router>
            
            <Header/>

            <Routes>

                <Route path="/" element={<Accueil />} />

                <Route path="/login" element={<Login />} />

                <Route path="/profil" element={<Profil />} />

                <Route path="/transactions" element={<Transactions />} />

                {/* page d'erreur */}
                <Route path="/*" element={<Error/>}/>

            </Routes>

            <Footer/>

        </Router>
        
    </Provider>
)