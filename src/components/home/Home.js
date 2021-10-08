import React from 'react'
import Hero from "./Hero"
import Form from "./Form"
import Plans from "./Plans"
import Best from "./Best"
import Search from "./Search"
import Map from "./Map"
import Footer from "./Footer"

const Home = () => {
    return (
        <div className="parent">
            <div className="layout-container">
                <Hero />
                <Form />
                <Plans />
                <Best />
                <Search />
                <Map />
                <Footer />
            </div>
        </div>
    )
}

export default Home
