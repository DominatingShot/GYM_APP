import "./steps.scss"

const Steps = ()=>{
    return (
        <div className="StepsContainer">
            <div className="header">
                <p>FitForge makes your fitness journey seamless.</p>
                <p>
                    Here's how you'll go from setting goals to seeing
                    real results — all in just a few steps.
                </p>
                
            </div>
            <div className="stepNumber">
                <div className="numberOne">
                    <p className="number">1</p>
                    <p className="underScore">_________________________________</p>
                </div>
                <div className="numberTwo">
                    <p className="number">2</p>
                    <p className="underScore">_________________________________</p>
                </div>   
                <div className="numberThree">
                    <p className="number">3</p>
                    <p className="underScore">_________________________________</p>
                </div>
                <div className="numberFour">
                    <p className="number">4</p>
                    <p className="underScore">_________________________________</p>
                </div>
            </div>
            <div className="stepContent">
                <div className="contentOne">
                    <p>Start by creating your profile with your fitness goals and available equipment.</p>
                </div>
                <div className="contentTwo">
                    <p>FitForge then builds a personalized workout plan just for you using AI.</p>
                </div>
                <div className="contentThree">
                    <p>Log your workouts easily after each session to keep track of your activity.</p>
                </div>
                <div className="contentFour">
                    <p>See your progress with clear charts showing improvements over time.</p>
                </div>
            </div>
            <div className="button">Let's Get Started →</div>
        </div>
    )
}

export default Steps;