import FitForgeLogo from "../../assets/landingPage/FitForge.png";
import "./navBar.scss"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="left">
                    <img src={FitForgeLogo} alt="" className="logo" />
                    <p className="name">Fit Forge</p>
                </div>
                <div className="right">
                    <div>Home</div>
                    <div>Features</div>
                    <div>How it works</div>
                    <div>Login</div>
                    <div>Register</div>
                </div>
            </div>
        </div>

    )
}

export default NavBar;