import "./imageHeader.scss"
import image from "../../assets/landingPage/img7.jpg"

const imageHeader = () => {
    return (
        
        <div className="Container">
            <div className="textContainer">
                <p>"Forge Your Fitness. Smarter."</p>
                <p>"AI-powered routines. Personalized tracking."</p>
            </div>
            <div className="imageContainer">
                <img src={image} alt="Image" />
            </div>
            
        </div>
    )
}

export default imageHeader