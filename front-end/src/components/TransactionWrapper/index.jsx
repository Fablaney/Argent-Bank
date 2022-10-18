import { Link } from "react-router-dom"
import {transactions_data } from "../../api/data_mock"

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
                        <Link className="main-nav-item" to="/profil/transactions">
                            <button className="transaction-button">View transactions</button>
                        </Link>
                    </div>

                </section>
            )
        })
    )
}
export default TransactionWrapper
