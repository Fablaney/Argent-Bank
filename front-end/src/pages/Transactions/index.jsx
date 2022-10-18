// import react
import React from 'react'
import { Link } from "react-router-dom"

// import perso
import "./style.scss"
import TransactionWrapper from '../../components/TransactionWrapper'

/**
 * Render of Transactions page
 * @function Transactions
 * @param {*}
 * @returns {jsx}
 */
function Transactions()
{
    return (
        <main className="main bg-dark">

            <h1>Transactions</h1> 

            <TransactionWrapper/>

        </main>
    )
}

export default Transactions