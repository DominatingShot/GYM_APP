
import ImageHeader from "../../components/ImageHeader/imageHeader";
import Features from "../../components/Features/Features";
import Steps from "../../components/HowItWorks/Steps";
import AboutUs from "../../components/AboutUs/AboutUs";
import NavBar from "../../components/navbar/navBar"
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

