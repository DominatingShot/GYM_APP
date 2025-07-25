
import ImageHeader from "../../components/HomeComponenets/ImageHeader/imageHeader";
import Features from "../../components/HomeComponenets/Features/Features";
import Steps from "../../components/HomeComponenets/HowItWorks/Steps";
import AboutUs from "../../components/HomeComponenets/AboutUs/AboutUs";
import NavBar from "../../components/HomeComponenets/navbar/navBar"
const Home = ()=>{
    return (
        <div className="home">
    
            <NavBar/>
            <AboutUs/>
            <ImageHeader/>
            <Features/>
            <Steps/>
        </div>
    );
}

export default Home

