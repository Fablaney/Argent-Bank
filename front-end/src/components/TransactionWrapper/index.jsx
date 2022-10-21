import { Link } from "react-router-dom"
import {transactions_data } from "../../api/data_mock"
import { NavLink } from "react-router-dom"

function TransactionWrapper()
{
    return (   
        transactions_data.map((item) => {
            return (
                <section className="account" key={item.title}>

                    <div className="account-content-wrapper">
                        <h3 className="account-title">{item.title}</h3>
                        <p className="account-amount">{item.count}</p>
                        <p className="account-amount-description">{item.text}</p>
                    </div>  

                    <div className="account-content-wrapper cta">
                        <NavLink className="main-nav-item" to="/profil/transactions">
                            <button className="transaction-button">View transactions</button>
                        </NavLink>
                    </div>

                </section>
            )
        })
    )
}
export default TransactionWrapper