import React from 'react'
import hero from "../../images/he1.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={hero} alt="" />

            <h1>
                Unlimited Data <span className="line"></span><br/>
                Unlimited Entertainment <span className="line1"></span>
            </h1>
        </div>
    )
}

export default Hero
