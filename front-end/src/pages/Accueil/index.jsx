// import react
import React from 'react'

// import perso
import "./style.scss"

// import des features mockées
import SectionFeatures from '../../components/Sectionfeatures'

/**
 * Render of Accueil page
 * @function Accueil
 * @param {*}
 * @returns {jsx}
 */
function Accueil()
{
    return (
        <main>

            {/* Zone Hero */}
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            {/* Zone features feature */}
            <SectionFeatures/>

        </main>
    )
}

export default Accueil