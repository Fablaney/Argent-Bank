import { accueil_data } from '../../api/data_mock'
import chaticon from "../../designs/img/icon-chat.png"

function SectionFeatures()
{
    return (
        <section className="features">

            <h2 className="sr-only">Features</h2>

            {
                accueil_data.map((item) => {
                    return (
                        <div className="feature-item" key={item.title}>

                            <img src={chaticon} alt="Chat Icon" className="feature-icon" />
                
                            <h3 className="feature-item-title">{item.title}</h3>
                
                            <p>{item.text}</p>
                
                        </div>
                    )
                })
            } 

        </section>
    )
}
export default SectionFeatures
