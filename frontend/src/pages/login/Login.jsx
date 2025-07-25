import "./login.scss"
import FitForgeLogo from "../../assets/landingPage/FitForge.png"

const login = ()=>{
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="siteName">
                    <img src={FitForgeLogo} alt="FitForge Logo" className="logo" />
                    <p className="name">Fit Forge</p>
                </div>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password" />
                <button className="loginButton">LOGIN</button>  
                <div className="options">
                    <label >Forgot Password?</label>
                    <label >Sign Up</label>
                </div>              
            </div>
        </div>
    );
}

export default login

