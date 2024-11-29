import "./Campus.css"

import g1 from "../../assets/gallery-1.png"
import g2 from "../../assets/gallery-2.png"
import g3 from "../../assets/gallery-3.png"
import g4 from "../../assets/gallery-4.png"
import wa from "../../assets/white-arrow.png"

const Campus = () => {
    return(
        <div className="campus">
            <div className="gallery">
                <img src={g1} alt="odnt"/>
                <img src={g2} alt="odnt"/>
                <img src={g3} alt="odnt"/>
                <img src={g4} alt="odnt"/>
            </div>
            <button className="btn dark_btn">See More Here <img src={wa}/></button>
        </div>
    )
}

export default Campus