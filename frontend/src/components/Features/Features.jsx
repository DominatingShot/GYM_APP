import "./features.scss"


const Features = () => {
    return (
        <div className="featureContainer">
            <div className="feature">
                <div className="header" id="one">AI-Powered Routines</div>
                <div className="content">Get personalized workouts based on your goals,
                    fitness level, and available equipment
                    — built by AI just for you.</div>
                <button id="one">Learn More</button>
            </div>
            <div className="feature">
                <div className="header" id="two">Track Your Progress</div>
                <div className="content">Monitor your progress over time with visual 
                    insights into key fitness metrics 
                    such as body weight, calories burned,
                    and workout consistency.</div>
                <button id="two">Learn More</button>
            </div>
            <div className="feature">
                <div className="header" id="three"> Log Every Workout</div>
                <div className="content">Record and organize your daily exercises, sets,
                     repetitions,and durations to maintain consistency 
                    and track improvements.</div>
                <button id="three">Learn More</button>
            </div>
            <div className="feature">
                <div className="header" id="four">Fully Customizable</div>
                <div className="content">Update and refine your preferences, fitness goals,
                     and training environment to ensure your plan evolves with your needs.</div>
                <button id="four">Learn More</button>
            </div>
        </div>
    )
}

export default Features;