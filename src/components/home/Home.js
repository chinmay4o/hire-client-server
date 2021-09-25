import React from 'react'
import Hero from "./Hero"
import Form from "./Form"
import Plans from "./Plans"
import Best from "./Best"

const Home = () => {
    return (
        <div className="parent">
            <div className="layout-container">
                <Hero />
                <Form />
                <Plans />
                <Best />
            </div>
        </div>
    )
}

export default Home
