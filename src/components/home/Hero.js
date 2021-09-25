import React from 'react'
import hero from "../../images/he1.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={hero} alt="" />

            <h1>
                Unlimited Data <br/>
                Unlimited Entertainment
            </h1>
        </div>
    )
}

export default Hero
