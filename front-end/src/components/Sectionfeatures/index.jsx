import { accueil_data } from '../../api/data_mock'
import chaticon from "../../designs/img/icon-chat.png"
import money from "../../designs/img/icon-money.png"
import security from "../../designs/img/icon-security.png"

function SectionFeatures()
{
    return (
        <section className="features">

            <h2 className="sr-only">Features</h2>

            {
                accueil_data.map((item) => {

                    let img

                    if(item.type == "chat")
                    {
                        img = <img src={chaticon} alt="Chat Icon" className="feature-icon" />
                    }
                    if(item.type == "money")
                    {
                        img = <img src={money} alt="Money Icon" className="feature-icon" />
                    }
                    if(item.type == "security")
                    {
                        img = <img src={security} alt="Security Icon" className="feature-icon" />
                    }

                    return (
                        <div className="feature-item" key={item.title}>
                            
                            {img}
                
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
