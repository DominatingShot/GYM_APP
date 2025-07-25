import "./aboutus.scss"    
import image from "../../../assets/landingPage/img6.jpg"

const AboutUs = () =>{
    return (
        <div className="Container">
            <div className="left">
                <div className="title">
                    Empowering Every Journey to Strength and Wellness
                </div>
                <div className="content">
                    →FitForge is a smart fitness platform that creates custom workout plans using AI. 
                    Whether you're at home or in the gym, we help you train in a way that fits your life and goals.

                    <br /><br />→We're a team of fitness lovers and tech builders who believe training should be personal. We built 
                    FitForge to take the guesswork out of workouts and help you stay on track.
                    <br /><br />
                    →We believe fitness is about more than just reps — it's about building confidence,
                     staying consistent, and making real progress. Our goal is to make that easier for everyone.
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" />
                <div className="statusWidgetOne">

                </div>
                <div className="statusWidgetTwo">
        
                </div>
            </div>
        </div>
    )
}

export default AboutUs;