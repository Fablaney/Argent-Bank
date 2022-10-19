// import react
import React from 'react'

// import perso
import "./style.scss"

/**
 * Render of Transactions page
 * @function Transactions
 * @param {*}
 * @returns {jsx}
 */
function Transactions({title, count, text})
{
    return (
        <main className="main bg-dark">

            <div className='header'>

                <p>{title}</p>
                <h1>{count}</h1>
                <p>{text}</p>

            </div>
            
    
        </main>
    )
}

export default Transactions